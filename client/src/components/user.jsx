

function user(props) {
    let { user } = props
    let { email } = user
    return (
        <div className="name">
            <div>Welcome {email}</div>
        </div>
    )
}



export default user;