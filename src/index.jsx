import React from 'react'
import { render } from 'react-dom'

export const App = React.createClass({
  render: function () {
    return(
			<div>Yo!</div>
		)
  }
})


export default App

render(<App/>, document.getElementById('entry_point'))
