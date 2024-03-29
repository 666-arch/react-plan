import React, { memo, useState, useEffect } from 'react'

export default memo(function App() {
    const [count, setCount] = useState(200)


    useEffect(()=>{
        //当前传入的回调函数会在组件被渲染完成后，自动执行
        document.title = count
    })

    return (
        <div>
            <h2>当前计数： {count}</h2>
            <button onClick={e => setCount(count+1)}>+1</button>
        </div>
    )
})
