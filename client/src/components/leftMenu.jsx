

function leftMenu(props) {
    let { users,clickHandler,style1,index1 } = props;
    let unselected={background:"whitesmoke"}
    return (
        <div className="left-menu">
            {users.map((item,index) => <div  style={index==index1 ? style1:unselected} key={index}  onClick={()=>clickHandler({index:index,item})} className="menu-item">{item.username}</div> )}
        </div>
    )
}

export default leftMenu;