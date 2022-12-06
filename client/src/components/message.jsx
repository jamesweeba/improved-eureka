
function message(props) {
    let{message,fromId}=props;

    console.log(message,fromId)
    // return <div className="message">{message.map((item,index)=><div  id={fromId==item.from ? "other" :"you"} key={index}>{item.msg}</div>)}</div>
}

export default message