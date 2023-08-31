const body = document.body

body.style.backgroundColor = '#000000'

body.addEventListener('keydown', (e) => {e
    if (e.key === 'Enter') {
        body.style.backgroundColor = '#de3a3a'
    } else if (e.key !== 'F11') {
        body.style.backgroundColor = '#075579'   
    }
})

// avoid right-click on browser

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})
