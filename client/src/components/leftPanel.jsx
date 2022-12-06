
import LeftMenu from "./leftMenu";

function leftPanel(props){
    let{index,clickHandler,users,style1}=props;
    return(
        <div className="leftPanel">
            {/* <LeftMenu style1={background} index1={index} clickHandler={handleClick} users={users} user={socket.auth} /> */}
            <LeftMenu index1={index} clickHandler={clickHandler} users={users}  style1={style1}/>
            
        </div>
    )
}

export default leftPanel;