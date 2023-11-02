import "./style.css";
import header from "./createHeader.js";
import footer from "./createFooter.js";
import home from "./createHomeContent.js";


const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(home());
content.appendChild(footer('home'));
