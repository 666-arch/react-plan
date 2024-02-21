import React, { memo, useState } from 'react'

// function useFoo () {
//     const [ message ] = useState('Hello world')
//     return message
// }
const CounterHook = () => {
    const [counter, setCounter] = useState(0)
    // const message = useFoo()
    return <div>
        <h2>当前计数：{counter}</h2>
        <button onClick={e=>setCounter(counter+1)}>+1</button>
        <button onClick={e=>setCounter(counter-1)}>-1</button>
    </div>    
}

export default memo(CounterHook)
