import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;


function PostViewPage(){
    const navigate = useNavigate();
    const param = useParams();

    const [post, setPost] = useState({
        id : '',
        title : '',
        content : '',
        comment : ''
    });

    console.log(param.postId)
    const detailPost = () => {
        axios.get(`/post/detail/${param.postId}`)
        .then((resp) => {
            console.log("resp.data.comments", resp.data)
            setPost(resp.data)

        })
    }

    useEffect(()=>{
        detailPost()
    
      },[])

    const [comments, setComments] = useState({
        content : ''
    });

    const commentInsert = () => {
        axios.post(`/comment/insert/${param.postId}`,{
            content : comments.content
        })
        .then(() => {
            alert('추가 성공')
            detailPost()
        })

    }

    return(
        <Wrapper>
            <Container>
                <Button 
                    title="뒤로가기"
                    onClick={() => {
                        navigate("/")
                    }}/>
                    <br/><br/>
                <PostContainer>
               
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                 <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comment}/> 
                <br/>
                <TextInput 
                    height={40}
                    value={comments.content}
                    onChange={(e) => {
                        setComments({content : e.target.value})
                    }}/> 
                    <br/><br/>
                <Button 
                    title="댓글 작성하기"
                    onClick={commentInsert}/>

            </Container>

        </Wrapper>
    )
}
export default PostViewPage;






