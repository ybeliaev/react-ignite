import React from 'react'
import GlobalStyles from './components/GlobalStyles'
//Components and pages
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <h1>Store Game</h1>
            <Home />
        </div>
    )
}

export default App
