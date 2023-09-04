import { useState } from "react"


const Say = () => {
    const [message, setMessage] = useState('안녕')
    const [color, setColor] = useState('black')
    const onClickEnter = () => {
        setMessage('반갑습니다.')
        setColor('yellow')
    }

    const onClickLeave = () => {
        setMessage('안녕히 가세요.')
        setColor('red')
    }

    const clickColor = () => {
        setColor('pink')
    }

    const changeColor = (color) =>{
        setColor(color)
    }


    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            {/* 오류 발생
            <button onClick={changeColor('red')}>빨강</button> \
            */}
            <button onClick={()=>changeColor('red')}>빨강</button>
            <button onClick={()=>changeColor('green')}>초록</button>
            <button onClick={()=>changeColor('blue')}>파랑</button>
            <button onClick={clickColor}>분홍</button>

        </div>
    )
}
export default Say;