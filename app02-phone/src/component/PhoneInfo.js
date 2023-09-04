import { Component } from "react";

class PhoneInfo extends Component{

    handleRemove = () => {
        this.props.onRemove(this.props.info.id)
    }

    render(){
        const {name, phone, id} = this.props.info;
        const style = {
            border : '3px solid black',
            padding : '8px',
            margin : '8px'
        }
        return(
            <div style={style}>
                <div>ID : {id} </div>
                <div>이름 : {name}  </div>
                <div>전화번호 : {phone} </div>
                <button onClick={this.handleRemove}>삭제</button><br/>
            </div>
        )
    }
}
export default PhoneInfo;