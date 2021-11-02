import { pageLoadRender } from './pageLoad.js'
import { menuRender } from './menu.js'
import { contactRender } from './contact.js'
import './style.css'

window.onload = function() {

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
    
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab-div')

    const homeTab = document.createElement('button')
    homeTab.textContent = 'Home'
    homeTab.classList.add('browse-btns')
    homeTab.classList.add('active-tab')
    homeTab.disabled = true

    // hometab 'clicked' since default starting point
    const menuTab = document.createElement('button')
    menuTab.textContent = 'Menu'
    menuTab.classList.add('browse-btns')

    const contactTab = document.createElement('button')
    contactTab.textContent = 'Contact'
    contactTab.classList.add('browse-btns')

    // always ' present', but content will be added/removed as each tab is 'clicked'
    const cardContainer = document.createElement('div')
    cardContainer.id = 'card-container'

    content.appendChild(cardContainer)
    tabDiv.appendChild(homeTab)
    tabDiv.appendChild(menuTab)
    tabDiv.appendChild(contactTab)
    content.appendChild(tabDiv)

    pageLoadRender();

    const container = document.querySelector('#card-container')

    document.addEventListener('click', function(e) {
        // inserted within window.onload to prevent rendering/catching each event three times (due to webpack??)
        if (e.target.textContent === 'Home') {
                while (container.firstChild) {
                    container.removeChild(container.lastChild)
                }
                homeTab.classList.add('active-tab')
                menuTab.classList.remove('active-tab')
                contactTab.classList.remove('active-tab')
                pageLoadRender()
                homeTab.disabled = true
                menuTab.disabled = false
                contactTab.disabled = false
        }
        if (e.target.textContent === 'Menu') {
                while (container.firstChild) {
                    container.removeChild(container.lastChild)
                }
                menuTab.classList.add('active-tab')
                contactTab.classList.remove('active-tab')
                homeTab.classList.remove('active-tab')
                menuRender()
                menuTab.disabled = true
                homeTab.disabled = false
                contactTab.disabled = false

        }
        if (e.target.textContent === 'Contact') {
                while (container.firstChild) {
                    container.removeChild(container.lastChild)
                }
                contactTab.classList.add('active-tab')
                menuTab.classList.remove('active-tab')
                homeTab.classList.remove('active-tab')
                contactRender()
                contactTab.disabled = true
                homeTab.disabled = false
                menuTab.disabled = false
        }
    })
}