import { Component } from "react";

class Counter2 extends Component{
    state = {
        myAge : 0
    }

    // 화살표 함수
    plus = () => {
        // 구조 분해 할당
        this.setState(({myAge})=>({myAge : myAge+1 }
        )) // return 생략 표현


    //     this.setState((st) =>({
    //         myAge : st.myAge + 1
    //     }))
    }

    minus = () => {
        this.setState(({myAge})=>({myAge : myAge-1 }
        ))
    }

    componentDidMount(){
        console.log("in componentDidMount")
    }

    componentDidUpdate(){
        console.log("in componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("in componentwillUnmount")
    }

    render(){
        return(
            <div>
                <span>나이 {this.state.myAge} </span>
                <button onClick={this.plus}>증가</button>
                <button onClick={this.minus}>감소</button>
            </div>
        )


    }

}
export default Counter2;