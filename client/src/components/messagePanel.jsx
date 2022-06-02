
import InputPanel from "./inputPanel";
import Button from "./button";
import Message from "./message";
function messagePanel(props) {
    
    let { onSendMessage, message, changeHandler,id,fromId,handleSubmit ,inputMessage} = props;
    return (
        <>
            <div className="message-panel">
                <Message fromId={fromId} message={message} />
                
                    <form onSubmit={handleSubmit}>
                    <div className="sender">
                        <InputPanel changeHandler={changeHandler} inputMessage={inputMessage}/>
                        <Button id={id} onSendMessage={onSendMessage} />
                        </div>
                    </form>

               

            </div>

        </>

    )
}

export default messagePanel;