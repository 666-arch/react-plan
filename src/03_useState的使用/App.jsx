import React, { memo, useState } from 'react'

export default memo(function App() {
    const [message, setMessage] = useState('Hello world')
    function changeMessage() {
        setMessage("你好啊")
    }
    return (
        <div>
            <h2>App:{message}</h2>
            <button onClick={changeMessage}>修改文本</button>
        </div>
    )
})
