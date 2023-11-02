import "./style.css";
import header from "./createHeader.js";
import footer from "./createFooter.js";
import home from "./createHomeContent.js";
import menu from "./createMenuContent";


const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(menu());
content.appendChild(footer('home'));
