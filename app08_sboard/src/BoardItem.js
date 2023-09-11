

const BoardItem = ({board, deleteBoard}) => {
    return(
        <div>
            <h3>BoardItem</h3>
            번호 : { board.num }<br/>
            제목 : { board.title }<br/>
            내용 : { board.content }<br/>
            <button onClick={() => deleteBoard(board.num)}> 삭제 </button>
        </div>
    )
}
export default BoardItem;