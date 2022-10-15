import React from 'react'

interface TechNavigationProps {
    setStack: (stack: string) => void
    className: string
}

export const FRONTEND = 'frontend'
export const BACKEND = 'backend'
export const SRE = 'sre'

export default function TechNavigation(props: TechNavigationProps) {
    return <div className={props.className}>
        <ul>
            <li className='cursor-pointer' onClick={(_) => props.setStack(FRONTEND)}> Frontend</li>
            <li className='cursor-pointer' onClick={(_) => props.setStack(BACKEND)}> Backend</li>
            <li className='cursor-pointer' onClick={(_) => props.setStack(SRE)}> SRE</li>
        </ul>
    </div>
}