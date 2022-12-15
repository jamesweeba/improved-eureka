
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import App from './App';
import io from 'socket.io-client';
// let socket = io.connect("http://localhost:3001");
const URL= "http://localhost:3001"||"https://wee-chat.onrender.com"

function Start() {
    const socket = io(URL, { autoConnect: false ,secure: true })
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    if(isAuthenticated){
        return <App socket={socket} user={user} logout={logout}/>
    }else{
        return (
            <div className='main1'>
                <div className='but'><button onClick={loginWithRedirect}>Login with Redirect</button>
                </div>
            </div>
        )

    }
  
    
}

export default Start;