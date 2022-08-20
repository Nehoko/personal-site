import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Navigation } from './components/Navigation'
import { TechStackPage } from './pages/TechStackPage'

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/tech_stack" element={<TechStackPage />}></Route>
            </Routes>
        </>
    )
}

export default App
