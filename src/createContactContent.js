import {default as elGenerator, appendSiblingsToParent, appendCascadingChildren, ElObject as ElObj} from "./domManipulator";
import pizzaKitchen from "./Assets/Pizza kitchen.jpg";

const formElements = ['name', 'email', 'phone', 'message', 'button'];

export default function createContactContent() {
    const contactObjs = [
        new ElObj('div', 'main-content-wrapper'),
        new ElObj('div', 'contact-us'),
        new ElObj('h2', null, 'Contact Us'),
        new ElObj('form', null, null, {'action': ''})
    ]

    const [parent, wrapper, h2, formParent] = elGenerator(contactObjs);
    const inputEls = [];
    formElements.forEach(element => {
        inputEls.push(createFormElement(createGetFormElement(element)));
    })

    const form = appendSiblingsToParent(formParent, inputEls);

    const img = new Image();
    img.src = pizzaKitchen;
    img.alt = 'Pizza Store Kitchen';

    parent.appendChild(appendSiblingsToParent(wrapper, [h2, form, img]));

    return parent;
}

function createFormElement(type) {
    // Create form row elements.
    const formRowObjs = [new ElObj('div', 'form-row')];

    // Label element is not required if a button is being created.
    if (type.type !== 'button') {
        formRowObjs.push(new ElObj('label', null, `${type.labelText}`, {'for': type.name}));
    }

    formRowObjs.push(new ElObj(type.type, null, type.text, type.attributes));

    const [parent, ...children] = elGenerator(formRowObjs);

    return appendSiblingsToParent(parent, children);
}


function createGetFormElement(type) {
    switch(type) {
        case 'name': return {
            'type': 'input',
            'name': 'name', 
            'labelText': 'Name',
            'text': '',
            'attributes': {'type': 'text', 'name': 'name', 'id': 'name', 'autofocus': ''}
        };
        case 'email': return {
            'type': 'input',
            'name': 'email',
            'labelText': 'Email',
            'text': '',
            'attributes': {'type': 'email', 'name': 'email', 'id': 'email', 'placeholder': 'name@example.com'}
        };
        case 'phone': return {
            'type': 'input',
            'name': 'phone',
            'labelText': 'Phone Number',
            'text': '',
            'attributes': {'type': 'tel', 'name': 'phone', 'id': 'phone'}
        };
        case 'message': return {
            'type': 'textarea',
            'name': 'message',
            'labelText': 'Message',
            'text': 'Leave your message here!',
            'attributes': {'name': 'message', 'id': 'message', 'cols': '30', 'rows': '10'}
        };
        case 'button': return {
            'type': 'button',
            'text': 'Submit',
            'attributes': {'type': 'button'}
        };
    }

} 