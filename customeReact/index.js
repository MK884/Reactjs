const rootElement = document.querySelector("#root");

customRander = (root, ele) =>{
    let elem = document.createElement(ele.type);
    for (const key in ele.param) {
        elem.setAttribute(key, ele.param[key]);
    }
    elem.innerHTML = ele.child;
    root.appendChild(elem);
}


const Ele = {
    type: 'a',
    param:{
        href : 'https://www.google.com',
        target: '_blank',
    },
    child: "click here..."
}


customRander(rootElement,Ele)