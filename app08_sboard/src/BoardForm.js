import { useEffect, useState } from "react";
import axios from 'axios';

const BoardForm = ({listBoard}) => {
    const [formContent, setFormContent] = useState({
        title : '',
        content : ''
    })

    const getValue = (e) => {
        setFormContent({
            ...formContent,
            [e.target.name] : e.target.value
        })
    }

    // 제목과 내용을 가지고 서버에 전달
    const submitBoard = () => {
        // axios.get('/').then(()=>{
        //         alert('등록완료')
        //     })

        axios.post('/api/insert', {
            title : formContent.title,
            content : formContent.content
        }).then(()=>{
            alert('등록완료')
            listBoard();
        })
    }


    return(
        <div>
            <input type="text" name="title" placeholder="제목" value={formContent.title} 
            onChange={getValue}/><br/><br/>
            <textarea name="content" rows="10" cols={40} value={formContent.content}
            onChange={getValue}/><br/>
            <button onClick={submitBoard}> 입력 </button>
        </div>
     )
}
export default BoardForm;