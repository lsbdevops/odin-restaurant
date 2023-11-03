import {default as elGenerator, appendSiblingsToParent, ElObject as ElObj} from "./domManipulator";
import margPizzaImg from "./Assets/margherita pizza.jpg";
import prosPizzaImg from "./Assets/prosciutto pizza.jpg";
import lucaPizzaImg from "./Assets/luca's special pizza.jpg";

const menuItems = ['margherita', 'prosciutto', 'lucaspecial']

export default function createMenuContent() {
    const objs = [
        new ElObj('div', 'main-content-wrapper'),
        new ElObj('div', 'menu'),
        new ElObj('h2', null, 'Menu')
    ]

    const [parent, child, grandchild] = elGenerator(objs);

    child.appendChild(grandchild);

    menuItems.forEach(item => {
        const [imgEl, itemEl] = createMenuItem(getItem(item));
        child.appendChild(itemEl); 
        child.appendChild(imgEl);
    })

    parent.appendChild(child);

    return parent;
}

function createMenuItem(item) {
    const itemObjs = [
        new ElObj('div', 'item-information'),
        new ElObj('h3', null, `${item.name}`),
        new ElObj('p', null, `${item.description}`)
    ];

    const [itemParent, ...itemChildren] = elGenerator(itemObjs);

    const itemTree = appendSiblingsToParent(itemParent, itemChildren)

    const itemImg = new Image();
    itemImg.src = item.img;
    itemImg.alt = item.name;

    return [itemTree, itemImg];
}

function getItem(item) {
    switch(item) {
        case 'margherita':
            return {
                'name': 'Marghertita Pizza - $22',
                'description': 'Fior di latte and parmesan cheesy goodness with a topping of fresh basil atop a san marzano tomato base.',
                'img': margPizzaImg
            };
        case 'prosciutto':
            return {
                'name': 'Prosciutto & Rocket Pizza - $26',
                'description': 'The finest quality prosciutto di parma and freshest rocket atop a san marzano tomato base.',
                'img': prosPizzaImg
            };
        case 'lucaspecial':
            return {
                'name': 'Luca\'s Special Pizza - $30',
                'description': 'Fior di latte, salami, mushroom, olives and sun-dried tomatoes atop Luca\'s famous white-sauce base.',
                'img': lucaPizzaImg
            };       
    }
}