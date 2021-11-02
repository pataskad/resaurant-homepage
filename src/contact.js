export { contactRender } 

function contactRender() {

    const cardContainer = document.querySelector('#card-container')

    const address = document.createElement('address')
    address.classList.add('address-block')

    address.innerHTML = `<h1>Make a Reservation Today!</h1>
                         <p>Call us at 612-951-5022!<br>
                         <h1>Or Come and Visit us!</h1>
                         <p>3535 Rocket Drive<br>Minneapolis, MN 55418<br>
                        United States</p>`
                        
    cardContainer.appendChild(address)
}