import "./style.css";
import header from "./createHeader.js";
import footer from "./createFooter.js";
import home from "./createHomeContent.js";
import menu from "./createMenuContent.js";
import contact from "./createContactContent.js";

const pageController = function() {
    const clearPage = () => {
    // Delete content div, re-create and append.
    document.querySelector("#content").remove();
    
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
    document.body.appendChild(contentDiv);
    }

    const loadPage = (page) => {
        const content = document.querySelector("#content");

        // Load header & event listeners for navigation.
        content.appendChild(header());
        eventController.createEvents();

        // Load main content.
        switch(page) {
            case 'home':
                content.appendChild(home());
                break;
            case 'menu':
                content.appendChild(menu());
                break;
            case 'contact':
                content.appendChild(contact());
                break;
        }

        // Load footer.
        content.appendChild(footer(page));
    }

    return {clearPage, loadPage};
}()

const eventController = function() {
    const createEvents = () => {
        // When nav title is clicked, clear current page and load the clicked page.
        document.querySelector('#home').addEventListener('click', (e) => {
            pageController.clearPage();
            pageController.loadPage('home');
        })

        document.querySelector('#menu').addEventListener('click', (e) => {
            pageController.clearPage();
            pageController.loadPage('menu');
        })

        document.querySelector('#contact').addEventListener('click', (e) => {
            pageController.clearPage();
            pageController.loadPage('contact');
        })
    }

    return {createEvents};
}()


// Inital (home) page load.
pageController.loadPage('home');