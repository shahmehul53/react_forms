import React from 'react'
import useScreen from './useScreen'

const ScreenComponent = () => {
    const screenSize = useScreen()
  return (
    <div>ScreenComponent
        <h1>we are in {screenSize} screeen</h1>
    </div>
  )
}

export default ScreenComponent