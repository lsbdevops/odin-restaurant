import {default as elGenerator, appendSiblingsToParent, appendCascadingChildren, ElObject as ElObj} from "./domManipulator";
import PizzaImg from "./Assets/Pizza out of oven.jpg";

export default function createHomeContent() {
    const objs = [
        new ElObj('div', 'main-content-wrapper'),
        new ElObj('div', 'about-us'),
        new ElObj('div', 'image-wrapper')
    ]

    const [parent, child, grandchild] = elGenerator(objs);
    
    const elementTree = appendSiblingsToParent(child, [grandchild, createInformationContent()]);
    parent.appendChild(elementTree);

    return parent;
}

function createInformationContent() {
    // Create information elements.
    const infoObjs = [
        new ElObj('div', 'information'),
        new ElObj('h2', null, 'About Us'),
        new ElObj('p', null, `Serving up the best pizzas in town since 2020! We use only the freshest ingredients, and prepare 
        Luca's special long fermented dough that is full of flavour and has the perfect texture!`),
        new ElObj('p', null, `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis nostrum atque quidem veniam tenetur deleniti nihil, aperiam provident itaque,
        earum libero facere placeat excepturi assumenda. Atque quasi dolores a illo.`)
    ]

    const [parent, ...children] = elGenerator(infoObjs);

    // Create img element.
    const img = new Image();
    img.src = PizzaImg;
    img.alt = 'Wood Fired Pizza';
    children.push(img);

    return appendSiblingsToParent(parent, children);
}