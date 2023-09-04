import { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneList extends Component{
    render(){
        const {data, onRemove} = this.props
        return(
            <div>
            <br/>[PhoneList]<br/>
            {
                data.map((info, index)=>{
                    return(
                        <PhoneInfo key={index} info={info}
                        onRemove = {onRemove}/>
                    )
                })
            }
            </div>
        )
    }
}
export default PhoneList;