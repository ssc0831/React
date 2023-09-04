import { Component } from "react";


class MyDevice1 extends Component{
    render(){
        const {mydata} = this.props
        return (
            <div>
                {
                   mydata.map((device, index)=>{
                    return (
                        <div key ={index}>
                            키 :  {index} <br/>
                            이름 : {device.name} <br/>
                            램 : {device.RAM} <br/>
                            홈버튼 : {(device.HomeButton === true) ? '있음' : '없음'} <br/>
                            터치기능:  {device.TouchID} <br/>
                            안면인식 : {device.FaceID} <br/><br/>
                        </div>    
                    )
                   }) 
                }
            </div>
        )
    }
}
export default MyDevice1;


