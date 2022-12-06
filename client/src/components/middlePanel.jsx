import { useState } from "react";

function MiddlePanel(props) {
    let { fromId, changeHandler, message, inputMessage, handleSubmit,show,users} = props;
    
    return (
        <div className="middlePanel">
            <div className="messagePanel">{ users.length==0 ? <div className="select"><div>NO USER ONLINE TO CHAT WITH</div></div>: show ? message.map((item,index)=><div  id={fromId==item.from ? "other" :"you"} key={index}>{item.msg}</div>):
            <div className="select"><div>SELECT A FRIEND TO CHAT</div></div>}</div>
            <form onSubmit={handleSubmit}  show={show.toString()}>
                <div className="sender">
                    <input type="text" onChange={(e)=>changeHandler(e.target.value)} value={inputMessage} placeholder=" type message here"/>
                    <button >send</button>
                </div>
            </form>
        </div>
        //return <div className="message">{message.map((item,index)=><div  id={fromId==item.from ? "other" :"you"} key={index}>{item.msg}</div>)}</div>
        // <MessagePanel fromId={fromId} changeHandler={handleChange} message={privateMessage} inputMessage={inputMessage} id={id} handleSubmit={handleSubmit} />

    )
}

export default MiddlePanel;