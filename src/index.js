console.log('Hello there! This is working as intended.')
import { pageLoadRender } from './pageLoad.js' // import function from pageLoad.js!
import './style.css' // imports stylesheet to manipulate css

window.onload = function() {
    pageLoadRender();
}