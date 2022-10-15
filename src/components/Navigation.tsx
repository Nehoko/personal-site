import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div className="flex flex-row space-x-10">
            <Link to='/'> Ilia Mikhailov </Link>
            <ul className='list-inside list-row list-none flex flex-row space-x-2'>
                <li>
                    <Link to='/'>About me</Link>
                </li>
                <li>
                    <Link to='/tech_stack'>Tech Stack</Link>
                </li>
            </ul>
        </div>
    )
}
