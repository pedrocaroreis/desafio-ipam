import React, { Fragment } from "react"
import Hello from "./components/Hello"
import Selector from "./components/Selector"
import Card from "./components/Card"

function App() {
  return (
    <Fragment>
      <Card>
        <Hello />
        <Selector />
      </Card>
    </Fragment>
  )
}

export default App
