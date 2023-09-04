import React, {Component} from "react"

// Class형
class InputTest extends Component {
    state = {
        text: ''
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onReset = () => {
        this.setState({
            text: ''
        })
    }

    render(){
    return(
        <div>
          <input type="text" name="text" placeholder="내용"
            value={this.state.text} 
            onChange={this.textChange}/>
            <button onClick={this.onReset}>초기화</button>
            <div>
            {this.state.text}
            </div>   
        </div >
    )
    }
}


// // 함수형
// const InputTest = () => {
//     const [text, setText] = useState('')
//     const textChange = (e) => {
//         setText(e.target.value)
//     }
    
//     const onReset = () => {
//         setText('')
//     }
    
//     return(
//         <div>
//             <input type="text" name="text" placeholder="내용"
//             value={text} 
//             onChange={textChange}/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//             {text}
//             </div>    
//         </div>
//     )
// }
export default InputTest;