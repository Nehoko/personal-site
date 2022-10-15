import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { SiteHeader } from './components/SiteHeader'
import { TechStackPage } from './pages/TechStackPage'

function App() {
    return (
        <div className='h-full max-h-full w-full max-w-full min-h-screen max-h-screen h-screen justify-between mx-4'>
            <SiteHeader />
            <div id='body'>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/tech_stack' element={<TechStackPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
