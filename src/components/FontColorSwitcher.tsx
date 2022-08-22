import React, { useState } from 'react'

export function FontColorSwitcher() {
    const [selected, setSelected] = useState('system_theme')
    const handleColorSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value)
    }
    return (
        <form className="fixed -rotate-90 flex justify-around left-[-8vw] bottom-[18vh] h-auto">
            <div>
                <input
                    type="radio"
                    name="font_color"
                    id="system_theme"
                    value="system_theme"
                    className="checked:bg-black mr-3"
                    defaultChecked={true}
                    checked={selected === 'system_theme'}
                    onChange={handleColorSwitch}
                />
                <label htmlFor="light_mode" className="text-xs">
                    System
                </label>
            </div>
            <div className="ml-2">
                <input
                    type="radio"
                    name="font_color"
                    id="light_mode"
                    value="light_mode"
                    className="checked:bg-black mr-3"
                    checked={selected === 'light_mode'}
                    onChange={handleColorSwitch}
                />
                <label htmlFor="light_mode" className="text-xs">
                    Light
                </label>
            </div>
            <div className="ml-2">
                <input
                    type="radio"
                    name="font_color"
                    id="dark_mode"
                    value="dark_mode"
                    checked={selected === 'dark_mode'}
                    onChange={handleColorSwitch}
                    className="checked:bg-black mr-3"
                />
                <label htmlFor="dark_mode" className="text-xs">
                    Dark
                </label>
            </div>
        </form>
    )
}
