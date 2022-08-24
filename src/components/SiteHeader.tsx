import React from 'react'
import { Navigation } from './Navigation'

export function SiteHeader() {
    return (
        <div id="header">
            <h1>Ilia Mikhailov</h1>
            <span className="text-sm">Fullstack Software Developer</span>
            <Navigation />
        </div>
    )
}
