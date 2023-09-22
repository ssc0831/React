import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

const PostList=({posts,onClickItem})=>{
    return(
        <Wrapper>
            {posts.map((post,index)=>{
                return(
                    <PostListItem key={post.div} post={post} onClick={()=>{onClickItem(post)}}/>
                )
            })}
        </Wrapper>
    )
}
export default PostList;