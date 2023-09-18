import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const CommentList = ({comments}) => {
   // const {comments} = props;
    console.log("CommentList comments ",comments )

    return(
        <Wrapper>
            {
                comments && comments.map((comment,i) => (
                    <CommentListItem 
                        key={i}
                        comment={comment}/>

                ))
            }
        </Wrapper>
    )
}
export default CommentList;