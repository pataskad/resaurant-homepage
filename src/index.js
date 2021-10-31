import { pageLoadRender } from './pageLoad.js' // import function from pageLoad.js!
import './style.css' // imports stylesheet to manipulate css

window.onload = function() {
    
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

    tabDiv.appendChild(homeTab)
    tabDiv.appendChild(menuTab)
    tabDiv.appendChild(contactTab)
    content.appendChild(tabDiv)

    pageLoadRender();

    document.addEventListener('click', function(e) {
        // if 'tab' clicked, clear contents and append new tab contents to display content container
        // inserted within window.onload to prevent rendering/catching each event three times (due to webpack??)
        if (e.target.textContent === 'Home') {
            // clear contents and render home contents (what if already clicked?)
            homeTab.classList.add('active-tab')
            menuTab.classList.remove('active-tab')
            contactTab.classList.remove('active-tab')
        }
        if (e.target.textContent === 'Menu') {
            // clear contents and render home contents (what if already clicked?)
            menuTab.classList.add('active-tab')
            contactTab.classList.remove('active-tab')
            homeTab.classList.remove('active-tab')
        }
        if (e.target.textContent === 'Contact') {
            // clear contents and render home contents (what if already clicked?)
            contactTab.classList.add('active-tab')
            menuTab.classList.remove('active-tab')
            homeTab.classList.remove('active-tab')
        }
    })
}