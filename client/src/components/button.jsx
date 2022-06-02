

import Popup from 'reactjs-popup';
function button(props) {
    // wee-chat-wee
    let { id } = props;
    if (!id) {
        return (
            <div className="send">
                <Popup trigger={<button style={{ height: '100%' }} > SEND</button>}
                    position="top center">
                    <div  >Select contact to chat with</div>
                </Popup>
            </div>
        )

    }

    return (<div className="send">
        <button style={{ height: '100%' }} > SEND</button>
    </div>)

}

/*

     <div className="header">
        <Popup trigger={<span onClick={handleMenuClick} style={{cursor:"pointer"}}>&#9776;</span>} 
         position="bottom center">
          <div onClick={logout} style={{textAlign:"center",cursor:"pointer"}}>Logout</div>
         
        </Popup>
      </div>
*/


export default button;