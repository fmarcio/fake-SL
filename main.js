const body = document.body

body.style.backgroundColor = '#000000'

body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        body.style.backgroundColor = '#de3a3a'
    } else {
        body.style.backgroundColor = '#075579'   
    }
})

// avoid right-click on browser

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})