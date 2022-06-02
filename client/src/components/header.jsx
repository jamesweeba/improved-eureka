
import Popup from 'reactjs-popup';

function header(props){
    let {handleMenuClick,logout}=props;
    return (
        <div className="header">
        <Popup trigger={<span onClick={handleMenuClick} style={{cursor:"pointer",color:"white"}} >&#9776;</span>} 
         position="bottom center">
          <div onClick={logout} style={{textAlign:"center",cursor:"pointer"}}>Logout</div>
         
        </Popup>
      </div>


    //    <div className="header">
    //        
          
    //    </div>
    )
}



export default header;