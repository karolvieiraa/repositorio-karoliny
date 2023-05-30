function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

// o de cima faz a mesma coisa do de baixo 

    html.classList.toggle('light')
}