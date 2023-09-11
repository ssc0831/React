import BoardItem from "./BoardItem";


const BoardList = ({lists, deleteBoard}) =>{
    return(
        <div>
            {
                lists.map((board) => (
                    <BoardItem key = {board.num}
                    board = {board} 
                    deleteBoard={deleteBoard}/>   
                ))
            }

        </div>
    )
}
export default BoardList;