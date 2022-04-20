import { useState } from "react";
import "./NewComment.css"
import { addNewComment } from "../../services/addNewCommnetServices";
import { getAllComments } from "../../services/getAllCommentsServices";
const NewComment = ({setComments, setError}) => {
    const [comment, setComment] = useState({
        name:"",
        email:"",
        body:"",
    });
    const changeHandler = (e) => {
        setComment({...comment, [e.target.name]: e.target.value}); 
    };

       // const postCommentHandler = () => {
    //     axios
    //         .post("/comments", {...comment, postId:987})
    //         .then((res) => axios.get("/comments"))
    //         .then((res) => setComments(res.data))
    //         .catch((error) => setError(true))
    // }  
    const postCommentHandler = async() => {
        try {
            await addNewComment({...comment, postId:987})
            const {data} = await getAllComments();
            setComments(data)
        } catch (error) {
        
        }
    } 
   
    return ( 
        <div className="newComment">
            <div>
                <label>name</label>
                <input type="text" onChange={changeHandler} name="name"/>
            </div>
            <div>
                <label>email</label>
                <input type="email" onChange={changeHandler} name="email"/>
            </div>
            <div>
                <label>body</label>
                <textarea onChange={changeHandler} name="body"/>
            </div>
            <div>
                <button onClick={postCommentHandler}>add New comment</button>
            </div>
        </div>
     );
}
 
export default NewComment;