import "./comment.css"

const Comment = ({name, email, onClick}) => {
    return ( 
        <div className="comment" onClick={onClick}>
            <p><h3>name:</h3>{name}</p>
            <p><h3>email:</h3>{email}</p>
        </div>
     );
}
 
export default Comment;