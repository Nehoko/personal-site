import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <ul className="pt-1 list-disc list-inside">
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/tech_stack">Tech Stack</Link>
            </li>
        </ul>
    )
}
