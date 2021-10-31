export { pageLoadRender }


// function creates/loads default page on initial browser launch
function pageLoadRender() {
    const content = document.querySelector('#content')

    // header
    const header = document.createElement('div')
    header.id = 'header'
    const title = document.createElement('h1')
    title.textContent = 'Fancy Restaurant'
    const smallText = document.createElement('small')
    smallText.textContent = 'Great food, service, and a friendly atmosphere!'
    header.appendChild(title)
    header.appendChild(smallText)
    content.appendChild(header)

    // card container, houses card columns and content, then appended to content
    const cardContainer = document.createElement('div')
    cardContainer.id = 'card-container'
    content.appendChild(cardContainer)

    // card columns
    const card1 = document.createElement('div')
    card1.id = 'card-1'
    card1.classList.add('card-columns')

    const card2 = document.createElement('div')
    card2.id = 'card-2'
    card2.classList.add('card-columns')

    const card3 = document.createElement('div')
    card3.id = 'card-3'
    card3.classList.add('card-columns')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam.'
    p2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam.'
    p3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis aliquam.'

    card1.appendChild(p1)
    card2.appendChild(p2)
    card3.appendChild(p3)

    cardContainer.appendChild(card1)
    cardContainer.appendChild(card2)
    cardContainer.appendChild(card3)
}