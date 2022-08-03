
import User from "./user"
function mainHeader(props) {
    let { user } = props
  
    return (
        <div className="mainHeader">
            <User user={user} />
        </div>
    )
}


export default mainHeader;