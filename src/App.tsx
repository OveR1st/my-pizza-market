import React from 'react'

import RoutesContainer from './Router/Router'
import './App.css'
import HeaderContainer from './components/header.container'

function App() {
	return (
		<div className="App">
			<HeaderContainer />
			<RoutesContainer />
		</div>
	)
}

export default App
