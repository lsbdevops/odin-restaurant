// Input: an array of objects, Output: an array of created html elements
export default function domElementsGenerator(elObjectArr) {
    // Assign empty array to collect created elements.
    const elements = [];

    // For each element object provided, create the html element, assign class, text and attributes.
    elObjectArr.forEach(elObject => {
        const element = document.createElement(elObject.tag);

        if (elObject.class) {
            element.classList.add(elObject.class);
        }
    
        if (elObject.text) {
            element.textContent = elObject.text;
        }
    
        if (elObject.attributes) {
            for (const [key, value] of Object.entries(elObject.attributes)) {
                element.setAttribute(key, value);
            }
        } 
        elements.push(element);
    });

    return elements;
}

// Input: A parent element and array of elements.
// Output: A parent element with direct children elements as siblings (Parent > Node + Node + etc.)
function appendSiblingsToParent(originalParentEl, sibElArr) {
    // Create a copy of the parent element to ensure the original is not modified.
    const parentEl = originalParentEl.cloneNode(true);

    // Append each sibling element in the array to the parent.
    sibElArr.forEach(element => {
        parentEl.appendChild(element);
    });

    return parentEl;
}

// Input: A parent element and array of elements.
// Output: Cascading parent-children elements (Node > Node > Node > etc.)
function appendCascadingChildren(originalParentEl, originalChildElArr) {
    // Create a copy of the parent and child elements to ensure the original is not modified.
    const parentEl = originalParentEl.cloneNode(true);
    const childElArr = [];
    originalChildElArr.forEach(element => {
        const elCopy = element.cloneNode(true);
        childElArr.push(elCopy);
    })

    // Work backwards through array so that final element tree is in order of the array.
    for (let i = childElArr.length - 2; i >= 0; i--) {
        childElArr[i].appendChild(childElArr[i + 1]);
    }

    // Append the tree to the highest parent.
    parentEl.appendChild(childElArr[0]);

    return parentEl;
}

function ElObject (tag, cls, text, attr) {
    this.tag = tag;
    this.class = cls;
    this.text = text;
    this.attr = attr;
}

export {appendSiblingsToParent, appendCascadingChildren, ElObject};