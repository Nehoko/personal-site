import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { TechStackPage } from './pages/TechStackPage'
import { SiteHeader } from './components/SiteHeader'

function App() {
    return (
        <div className="flex flex-row h-full max-h-full w-full max-w-full min-h-screen max-h-screen h-screen justify-between">
            <div className="box-border border-black border m-[10px] p-[10px] dark:bg-black w-full">
                <SiteHeader />
                <div id="body">
                    <Routes>
                        <Route path="/" element={<MainPage />}></Route>
                        <Route
                            path="/tech_stack"
                            element={<TechStackPage />}
                        ></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
