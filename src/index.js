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
    
    // tabs default rendering
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab-div')

    const homeTab = document.createElement('button')
    homeTab.textContent = 'Home'
    homeTab.classList.add('browse-btns')
    homeTab.classList.add('active-tab') // default | change to event listener to activate/deactivate active tab

    // hometab 'clicked' since default starting point
    const menuTab = document.createElement('button')
    menuTab.textContent = 'Menu'
    menuTab.classList.add('browse-btns')

    const contactTab = document.createElement('button')
    contactTab.textContent = 'Contact'
    contactTab.classList.add('browse-btns')

    // card container, houses card columns and content, then appended to content
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
            if (homeTab.classList.contains('active-tab')) {
                console.log('ehh')
                // disable button?
            } else {
                while (container.firstChild) {
                    container.removeChild(container.lastChild)
                }
                homeTab.classList.add('active-tab')
                menuTab.classList.remove('active-tab')
                contactTab.classList.remove('active-tab')
                pageLoadRender()
            }
        }
        if (e.target.textContent === 'Menu') {
            if (menuTab.classList.contains('active-tab')) {
                console.log('ehhh2')
                // disable button?
            } else {
                while (container.firstChild) {
                    container.removeChild(container.lastChild)
                }
                menuTab.classList.add('active-tab')
                contactTab.classList.remove('active-tab')
                homeTab.classList.remove('active-tab')
                menuRender()
            }
        }
        if (e.target.textContent === 'Contact') {
            if (contactTab.classList.contains('active-tab')) {
                console.log('weeee')
                // disable button?
            } else {
                while (container.firstChild) {
                    container.removeChild(container.lastChild)
                }
                contactTab.classList.add('active-tab')
                menuTab.classList.remove('active-tab')
                homeTab.classList.remove('active-tab')
                contactRender()
            }
        }
    })
}