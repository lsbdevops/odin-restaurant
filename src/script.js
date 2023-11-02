import "./style.css";
import header from "./createHeader.js";
import footer from "./createFooter.js";
import home from "./createHomeContent.js";
import menu from "./createMenuContent.js";
import contact from "./createContactContent.js";


const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(contact());
content.appendChild(footer('home'));
