import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from 'axios';

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

function PostWritePage(){
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title : '',
        content : '',
        comments : ''
    });


    const insertPost = () => {
        axios.post('/post/insert',{
            title : post.title,
            content : post.content
        })
        .then(() => {
            alert('추가 성공')
            navigate('/')
        })

    }


    return(
        <Wrapper>
            <Container>
                <TextInput 
                    height={20}
                    value={post.title}
                    onChange={(e) => {
                        setPost({title : e.target.value , content : post.content})
                    }}
                    
                />

                <TextInput 
                    height={480}
                    value={post.content}
                    onChange={(e) => {
                        setPost({title : post.title , content : e.target.value})
                    }}
                    name='content'
                />

                <Button 
                    title="글 작성하기"
                    onClick={insertPost}                
                />
            
            </Container>

        </Wrapper>
    )
}
export default PostWritePage;