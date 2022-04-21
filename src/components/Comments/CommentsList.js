import Comment from "./Comment/Comment";
import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import "./commetsList.css"
import { getAllComments } from "../../services/getAllCommentsServices";
import { Link } from "react-router-dom";

const CommentList
 = () => {
    const[comments, setComments] = useState(null);
    const[selectedId, setSelectedId] = useState(null);
    const[error, setError] = useState(false);
   

    const selectCommentHandler = (id) => {
        setSelectedId(id)
    }

    // how to get data from DB ?
    // 1. useEffect() => http
    // 2. CDM => get
 
    useEffect(()=>{
        // axios
        //     .get("https://jsonplaceholder.typicode.com/comments")
        //     .then((response)=>{
        //         setComments(response.data.slice(0,4))
        //     })
        //     .catch((error)=>{
        //         console.log(error)
        //     })
        getComments();
    },[]);

    async function getComments() {
        try {
            const response = await getAllComments();
            setComments(response.data)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

   const renderCommnets = () => {
       let renderValue = <p> Loading ....</p>
    
       if(error) {
        renderValue = <p>fetching data failed !</p>
        toast.error("this is an error")
        }

       if(comments && !error) {
        renderValue =( comments.map((c)=> 
                    <Link to={`/comment/${c.id}`} key={c.id} >
                        <Comment 
                            name={c.name} 
                            email={c.email} 
                            body={c.body}
                            // onClick={() =>selectCommentHandler(c.id)}
                        />
                    </Link>
                     ) ); 
       }
       return renderValue;
   }


    return ( 
    
            <section className="commentList">
                {renderCommnets()}
            </section>
           
    );
}
 
export default CommentList;