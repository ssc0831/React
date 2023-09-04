import { Context } from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요~!"
    },

    {
        name: "유재석",
        comment: "리액트 재미있어요~!"
    },

    {
        name: "강민경",
        comment: "리액트 배워보고 싶어요!!"
    }

]

function CommentList(){
    return(
        <div>
            <h1>CommentList</h1>
            {
                comments.map((comment, i)=>{
                    return(
                        <div key={i}>
                            {/* {comment.name} // {comment.comment}     <br/> */}
                            <Comment name={comment.name} comment={comment.comment}/>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default CommentList;