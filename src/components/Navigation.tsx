import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-blue-300 items-center shadow-md">
            <Link to="/">Main</Link>
            <Link to="/tech_stack">Tech Stack</Link>
        </nav>
    )
}
