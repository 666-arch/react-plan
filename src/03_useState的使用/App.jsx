import React, { memo, useState } from 'react'

export default memo(function App() {
    const [message, setMessage] = useState('Hello world')
    function changeMessage(message) {
        
    }
    return (
        <div>
            <h2>App:{message}</h2>
            <button onClick={setMessage('你好啊')}>修改文本</button>
        </div>
    )
})
