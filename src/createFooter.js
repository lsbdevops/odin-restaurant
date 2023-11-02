import {default as elGenerator, appendSiblingsToParent, appendCascadingChildren, ElObject as ElObj} from "./domManipulator";
import GithubIcon from "./Assets/github-mark-white.svg";

export default function createFooter(page) {
    // Create the footer parent/wrapper div.
    const footerParentObj = [new ElObj('div', 'footer')];
    const [footerPatentEl] = elGenerator(footerParentObj);

    // Create image credit elements, and append developer info.
    const childElTree = createImgCredit(page);
    childElTree.appendChild(createDevDetails());

    // Then append to the footer parent div.
    footerPatentEl.appendChild(childElTree);
    
    return footerPatentEl;
}

function createDevDetails() {
    const devDetObjs = [
        new ElObj('div', 'dev-details'),
        new ElObj('li', null, 'Website design: lsbdevops@gmail.com'),
        new ElObj('li'),
        new ElObj('a', null, null, {'href': 'https://github.com/lsbdevops/'})
    ];

    const devDetEls = elGenerator(devDetObjs);

    // Create github logo image.
    const logo = new Image();
    logo.src = GithubIcon;
    logo.alt = 'Github Logo';

    // Append elements.
    const [div, email, li, a] = devDetEls;
    const logoEls = appendCascadingChildren(li, [a, logo]);
    return appendSiblingsToParent(div, [email, logoEls]);
}

function createImgCredit(page) {
    // Create parent ul element. 
    const parentEl = document.createElement('ul');

    // Get image credits & links.
    const imageCredit = getImgCredits(page);

    // Create elements for credits. Array must be first flattened (due to array of array of objects).
    const imgCreditEls = [];
    imageCredit.flat().forEach(credit => {
        const imgCreditObjs = [
            new ElObj('li', null, 'Photo by '),
            new ElObj('a', null, `${credit.photographer} `, {'href': credit.profileUrl}),
            new ElObj('a', null, `(${credit.site})`, {'href': credit.siteUrl})
        ]

        imgCreditEls.push(elGenerator(imgCreditObjs));
        
    })

    // For each image credit, append links to the list item parent.
    const creditNodeTree = [];

    imgCreditEls.forEach(credit => {
        creditNodeTree.push(appendSiblingsToParent(credit[0], [credit[1], credit[2]]));
    });

    // Append each list item to the unordered list parent.
    return appendSiblingsToParent(parentEl, creditNodeTree)
}

function getImgCredits(page) {
    const imageCredit = [];

    switch(page) {
        case 'home':
            imageCredit.push([
                {'photographer': 'Hoa Luu', 
                'profileUrl': 'https://pixabay.com/users/hoaluu-5512970/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2589577',
                'site': 'Pixabay', 
                'siteUrl': 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2589577'},
                {'photographer': 'Nik Owens', 
                'profileUrl': 'https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                'site': 'Unsplash', 
                'siteUrl': 'https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'}
            ]);
            break;
        case 'menu':
            imageCredit.push([
                {'photographer': 'Aurélien Lemasson-Théobald', 
                'profileUrl': 'https://unsplash.com/@aurel__lens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                'site': 'Unsplash', 
                'siteUrl': 'https://unsplash.com/photos/round-cooked-pizza-x00CzBt4Dfk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'},
                {'photographer': 'Svetlozar Hristov', 
                'profileUrl': 'https://pixabay.com/users/svetlozarhristov-14833915/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4803139',
                'site': 'Pixabay', 
                'siteUrl': 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4803139'},
                {'photographer': 'marker_photography', 
                'profileUrl': 'https://pixabay.com/users/marker_photography-4171480/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1949157',
                'site': 'Pixabay', 
                'siteUrl': 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1949157'}
            ]);
            break;
        case 'contact':
            imageCredit.push([
                {'photographer': 'Benu Marinescu', 
                'profileUrl': 'https://unsplash.com/@benu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                'site': 'Unsplash', 
                'siteUrl': 'https://unsplash.com/photos/man-near-pizza-e6ZOmEfNHLM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'}
            ]);
            break;
    }

    return imageCredit;
}
