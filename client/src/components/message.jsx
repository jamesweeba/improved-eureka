
function message(props) {

    let{message,fromId}=props;
    // console.log("hhhhhhhhhhhhhhhhhhhhhhh")

    // console.log(JSON.stringify(message));
    // console.log("ttttttttttttttttttttttttttttttttttttttttttttttttt")
    // console.log(fromId)
    // console.log("hhhhhhhhhhhhhhhhhhhhhhh")
    return <div className="message">{message.map((item,index)=><div  id={fromId==item.from ? "other" :"you"} key={index}>{item.msg}</div>)}</div>
}

export default message