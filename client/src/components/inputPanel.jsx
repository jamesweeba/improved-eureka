
function inputPanel(props) {
    let { changeHandler,inputMessage } = props;
    return (
        <div className="input-panel">
            
            <input onChange={(event)=>changeHandler(event.target.value)} type="text" id="text" style={{ width: "98%", height: "100%", padding: "14px" }} 
            value={inputMessage} placeholder={"Type a message"}/>

        </div>
    )
}


export default inputPanel;