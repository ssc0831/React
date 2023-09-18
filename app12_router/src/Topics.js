import { NavLink, Outlet } from "react-router-dom";

const Topics = ({contents}) => {
    const list = []
    for (let i=0; i<contents.length; i++){
        list.push(
            <li key={contents.id}>
                <NavLink to={`/topics/${contents[i].id}`}>
                    {contents[i].title} </NavLink>
            </li>
        )
    }

    return (
        <div>
            <h2>Topics</h2>
            토픽페이지 입니다.
            <ul>
                {list}
                {/* 하위 컴포넌트 보여지는 부분 */}
                <Outlet></Outlet>
            </ul>
        </div>
    )
}
export default Topics;