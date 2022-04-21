import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComment } from "../../services/getOneCommentServices";

import "./FullComment.css"

const FullComment = ({setComments, setSelectedId}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const commentId = id


    console.log(navigate)

    

        const [comment, setComment] = useState(null);

    // get comment => id => async await => useEffect => recieve full  commnet
    useEffect(() => {
        if(commentId){
                getOneComment(commentId)
                .then((res) => {setComment(res.data)})
                .catch((error) => console.log(error))
            }
    },[commentId]);

    const styles = {
        background : "red",
        color : "#444",
        padding : "10px",
        margin : "2rem",
        
    };
    const deleteHandler = async() => {
       try {
           await deleteComment(commentId)
           navigate('/');
            // const {data} = await getAllComments();
            // setComments(data);
            // setSelectedId(null);
            setComment(null);

       } catch (error) {}
    }
    // commentId ?
    // comment ?
    let commentDetail = <h3 style={styles}>Not commnet, please select one comment..</h3>

    if (commentId) commentDetail = <p> comment loading ...</p>
    if (comment)  {  
        commentDetail = (
            <div className="FullComment">
                <p><h3>name:</h3> {comment.name}</p>
                <p><h3>email:</h3> {comment.email}</p>
                <p><h3>body:</h3> {comment.body}</p>
                <button onClick={deleteHandler}>delete</button>
            </div>)}

    return commentDetail;
}
 
export default FullComment;