export function selectSystemMode() {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.getElementById('root')?.classList.add('dark')
    } else {
        document.getElementById('root')?.classList.remove('dark')
    }
}

export function selectDarkMode() {
    document.getElementById('root')?.classList.add('dark')
}

export function selectLightMode() {
    document.getElementById('root')?.classList.remove('dark')
}
