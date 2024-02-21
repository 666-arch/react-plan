import React, { memo } from 'react'
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'
export default memo(function App() {
  return (
    <div>
      App
      <CounterClass/>
      <CounterHook/>
    </div>
  )
})
