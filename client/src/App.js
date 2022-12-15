
import './App.css';
// import io from 'socket.io-client';
import { useEffect, useState } from "react";
import MainHeader from './components/mainHeader';
import Footer from './components/footer';
import LeftPanel from './components/leftPanel';
import RightPanel from './components/rightPanel';
import MiddlePanel from './components/middlePanel';


// https://carding.link/
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
  let [display, setDisplay] = useState(false);
  let [noUser, setNoUser] = useState(false);
  socket.on("users", (connectedUers) => {
    let filter = connectedUers.filter(item => item.username != user.email);
    console.log(filter)
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
    setNoUser(true)

  }


  let handleChange = (value) => {
    setInputMessage(value)
  }
  socket.off('send').on('send', (data) => {
    console.log(data);
    setMessage(list => [...list, data])
    setPrivateMessage(list => [...list, data])

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
      setDisplay(true)
    }
  };



  return (
    <div className='mainPage'>
      <MainHeader user={socket.auth} />
      <div className='container'>
        <LeftPanel index={index} style1={background} clickHandler={handleClick} users={users} user={socket.auth} />
        <MiddlePanel fromId={fromId} changeHandler={handleChange} message={privateMessage} inputMessage={inputMessage} 
                      id={id} show={noUser} handleSubmit={handleSubmit} users={users} />
        <RightPanel logout={logout} />
      </div>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
