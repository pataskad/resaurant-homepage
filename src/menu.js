export { menuRender }

function menuRender() {
    const cardContainer = document.querySelector('#card-container')

    const card1 = document.createElement('div')
    card1.id = 'menu-1'
    card1.classList.add('menu-columns')

    const card2 = document.createElement('div')
    card2.id = 'menu-2'
    card2.classList.add('menu-columns')

    const card3 = document.createElement('div')
    card3.id = 'menu-3'
    card3.classList.add('menu-columns')

    const menuOption1 = document.createElement('h2')
    const menuOption2 = document.createElement('h2')
    const menuOption3 = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    menuOption1.textContent = 'Weekly Special'
    menuOption2.innerHTML = 'Classic Fries'
    menuOption3.innerHTML = 'Carrot and Tomato Soup'

    p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam.'
    p2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam.'
    p3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam.'

    // append in 'cascading style' top to bottom.  card content > card column > card container
    card1.appendChild(menuOption1)
    card2.appendChild(menuOption2)
    card3.appendChild(menuOption3)
    card1.appendChild(p1)
    card2.appendChild(p2)
    card3.appendChild(p3)
    cardContainer.appendChild(card1)
    cardContainer.appendChild(card2)
    cardContainer.appendChild(card3)
}