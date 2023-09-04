import { Component } from "react";

const MyDevice2 = ({mydata}) =>{    
    return(
        <div>
            <h4>MyDevice2 test</h4>     
            {                
                 mydata.map((device, index)=>{
                    return(                        
                        <div key = {index}>
                             키 : {index} <br/>
                             이름 : {device.name} <br/>
                             램 : {device.ram} <br/>
                             홈버튼 : {(device.homeButton === true)?'있음' : '없음'} <br/>                           
                         </div>

                    )
                 })
            }   

        </div>
    )
}

export default MyDevice2;