import {default as elGenerator, appendSiblingsToParent, appendCascadingChildren, ElObject as ElObj} from "./domManipulator";

export default function createHeader() {
    // Create the overall parent element and node trees for header title and nav.
    const headerParentObj = [new ElObj('div', 'header')];
    const [headerParentEl] = elGenerator(headerParentObj);

    return appendSiblingsToParent(headerParentEl, [createHeaderTitle(), createHeaderNav()]);
}

function createHeaderNav() {
        // Create navigation bar elements.
        const headerNavObjs = [
            new ElObj('div', 'header-nav'),
            new ElObj('ul'),
            new ElObj('li', null, 'Home', {'id': 'home'}),
            new ElObj('li', null, 'Menu', {'id': 'menu'}),
            new ElObj('li', null, 'Contact', {'id': 'contact'})
        ];
    
        const headerNavEls = elGenerator(headerNavObjs);
    
        // Append nodes.
        const [parent, ul, ...li] = headerNavEls;
        parent.appendChild(appendSiblingsToParent(ul, li));

        return parent;
}

function createHeaderTitle() {
        // Create navigation title.
        const headerTitleObjs = [
            new ElObj('div', 'header-title'),
            new ElObj('h1', null, 'Luca\'s Pizzeria'),
            new ElObj('span', null, '🍕')
        ];
    
        const headerTitleEls = elGenerator(headerTitleObjs);
    
        // Append nodes.
        const[parent, ...children] = headerTitleEls;
        return appendCascadingChildren(parent, children);
}