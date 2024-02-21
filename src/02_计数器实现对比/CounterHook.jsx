import React, { memo } from 'react'

const CounterHook = () => {
    return <div>
        <h2>当前计数：{0}</h2>
        <button>+1</button>
        <button>-1</button>
    </div>    
}

export default memo(CounterHook)