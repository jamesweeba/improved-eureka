function rightPanel(props){
    let {logout}=props;
    return(
        <div className="rightPanel">
            <div className="logout" onClick={()=>logout({returnTo:window.location.origin})}>
                <div style={{"margin-left":"25%"}}>Logout</div>
            </div>
        </div>
    )
}


export default rightPanel