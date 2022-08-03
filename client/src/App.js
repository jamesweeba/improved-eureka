import logo from './logo.svg';
import './App.css';
// import io from 'socket.io-client';
import { useEffect, useState } from "react";
import LeftMenu from "./components/leftMenu";
import MessagePanel from "./components/messagePanel";
import Header from "./components/header";
import Vertival from "./components/vertical"
import MainHeader from './components/mainHeader';
import Footer from './components/footer';




function App(props) {
  let { socket, user, logout } = props;
  socket.auth = user;
  socket.connect();
  let [users, setUsers] = useState([]);
  let [background, setBackground] = useState({});
  let [index, setIndex] = useState(0);
  let [id, setId] = useState("");
  let [fromId, setFromId] = useState("")
  let [message, setMessage] = useState([]);
  let [privateMessage, setPrivateMessage] = useState([]);
  let [inputMessage, setInputMessage] = useState("");

  socket.on("users", (connectedUers) => {
    let filter = connectedUers.filter(item => item.username != user.email)
    setUsers(filter)
  });

  let handleClick = (payload) => {
    let { index, item } = payload
    setIndex(index);
    setId(item.user_id);
    setBackground({ background: "teal" });
    let privateM = message.filter(it => {
      return (it.to == fromId && it.from == item.user_id || it.to == item.user_id && it.from == fromId)
    });
    setPrivateMessage([...privateM])
    console.log(privateM, privateMessage);
  }

  let handleMenuClick = () => {
    console.log("who do u know ")
  }


  let handleChange = (value) => {
    setInputMessage(value)
  }

  socket.off('send').on('send', (data) => {
    setMessage((list) => [...list, data])
    setPrivateMessage((list) => [...list, data])

  });

  socket.off('user').on('user', (user) => {
    setFromId(user)
  })

  const handleSubmit = event => {
    event.preventDefault();
    if (id && inputMessage) {
      let messageDate = {
        to: id,
        msg: inputMessage,
        from: fromId
      }
      setInputMessage("")
      socket.emit('getMsg', messageDate);
      setMessage((list) => [...list, messageDate]);
      setPrivateMessage((list) => [...list, messageDate])

    }

    if (!id) {
      console.log("please select some to chat")
      setId("")
    }

  };

  return (

    <>
      <MainHeader user={socket.auth} />
      <div style={{ margin: "0% auto", zIndex: "5", position: "relative" }}>
        <Header logout={logout} handleMenuClick={handleMenuClick} />
        <div className="App">
          <Vertival />
          <LeftMenu style1={background} index1={index} clickHandler={handleClick} users={users} user={socket.auth} />
          <MessagePanel fromId={fromId} changeHandler={handleChange} message={privateMessage} inputMessage={inputMessage} id={id} handleSubmit={handleSubmit} />
        </div>
      </div>
      <Footer />
    </>

  );
}

export default App;
