import "./style.css";
import header from "./createHeader.js";
import footer from "./createFooter.js";

document.querySelector("#content").appendChild(header());
document.querySelector("#content").appendChild(footer('home'));