import React, { useState } from 'react'
import FrontEnd from '../components/tech_stack/FrontEnd'
import BackEnd from '../components/tech_stack/BackEnd'
import Sre from '../components/tech_stack/Sre'
import TechNavigation, { FRONTEND, BACKEND, SRE } from '../components/tech_stack/TechNavigation'


export function TechStackPage() {
    const [stack, setStack] = useState<string>(FRONTEND)

    return (
        <div className='flex flex-row divide-x-2 divide-solid'>
            <TechNavigation className='mr-4' setStack={setStack} />
            <div className='pl-4'>
                {stack === FRONTEND && <FrontEnd />}
                {stack === BACKEND && <BackEnd />}
                {stack === SRE && <Sre />}
            </div>
        </div>
    )
}
