import image from "../image/image.jpeg"

function leftMenu(props) {
    let { users, clickHandler, style1, index1 } = props;
    let unselected = { background: "whitesmoke" }
    let imageSize = { width: "50px", borderRadius: "16px" }
    //border-radius: 16px;
    let col = { display: "flex", "justify-content": "center", "align-items": "center" }
    let label = {
        "font-size": "61%",
        "font-style": "oblique"
    }
   
    return (

        <div className="left-menu">
            {users.map((item, index) => <div style={index == index1 ? style1 : unselected} key={index} onClick={() => clickHandler({ index: index, item })} className="menu-item"> <div style={col}> <img style={imageSize} src={image} /><div style={label}>{item.username}</div> </div></div>)}
        </div>
    )
}

export default leftMenu;
//<img src={require(item.image)} />