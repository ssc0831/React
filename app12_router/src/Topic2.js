import { useParams } from "react-router-dom";

const Topic2 = ({contents}) => {
     const {id} = useParams();
     let selected_topic = {
        title: '죄송합니다',
        desc: '해당되는 주소는 찾을 수 없는 페이지 (404)'
     }
     for(const topic of contents){
        if(topic.id === Number(id)){
            selected_topic = topic;
            break;
        }
     }
    return(
    <div>
        <h2>{selected_topic.title}</h2>
        {selected_topic.desc}
    </div>
    )
}
export default Topic2;