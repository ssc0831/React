
//  자바스크립트 값을 JSX 내부에서 사용할 때는 
//중괄호로 감싸주어야 한다.
const MyDevice = ({mydata}) => {
    return (
        <div>
            <h4>MyDevice test</h4>
            {
                mydata.myDeviceData.map((device, index)=>{
                    return(
                        <div key={index}>
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
export default MyDevice;