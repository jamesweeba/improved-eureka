import image from "../image/image.jpeg"

function leftMenu(props) {
    let { users, clickHandler, style1, index1, user } = props;
    let unselected = { background: "whitesmoke" }
    let imageSize = { width: "50px" }
    let col={display:"flex"}
    let label={margin: "10px"}
    console.log(user)
    return (
        <div className="left-menu">
            {users.map((item, index) => <div style={index == index1 ? style1 : unselected} key={index} onClick={() => clickHandler({ index: index, item })} className="menu-item"> <div style={col}> <img style={imageSize} src={image} /><div style={label}>{item.username}</div> </div></div>)}
        </div>
    )
}

export default leftMenu;
//<img src={require(item.image)} />