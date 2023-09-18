import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import axios from "axios";
import React, { useState,useEffect } from "react";

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
// & > * 전체에 대한 자식들

function MainPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    
    const listPost = () => {
        axios.get('/post/list')
        .then((resp) => {
            console.log(resp);
            setPosts(resp.data)
        })
    }

    useEffect(() => {
        listPost()
    },[])

    return(
        <Wrapper>
            <Container>
                <Button
                    title="글쓰기"
                    onClick={() => {
                        navigate("/postWrite");
                    }}
                />
                <br/><br/>

                <PostList
                    posts={posts}
                    onClickItem={(item)=>{
                        navigate(`/post/${item.id}`)
                    }}
                />

        

            </Container>
        </Wrapper>
    )
}
export default MainPage;