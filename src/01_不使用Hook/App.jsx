import React, { PureComponent } from 'react'

class HelloWorld extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello World"
        }
    }

    changeText(){
        this.setState({message:"你好 lyh"})
    }
    render() {
        const {message} = this.state
        return (
            <div>
                <h2>内容：{message}</h2>
                <button onClick={e=>this.changeText()}>修改</button>
            </div>
        )
    }
}


function HelloWorld2(props){
    let message = 'hello world2'
    return <div>
        <h2>内容2：{message}</h2>
        <button>修改</button>
    </div>
}

export class App extends PureComponent {
    render() {
        return (
            <div>
                <HelloWorld/>
                <HelloWorld2/>
            </div>
        )
    }
}

export default App
