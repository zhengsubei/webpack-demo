import _ from 'lodash';
// import './style.css';
// import Picture from './pic.jpg';
// import Data from './data.xml';

import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    var btn = document.createElement('button');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // element.classList.add('hello');
    //
    // var myPic = new Image();
    // myPic.src = Picture;
    // element.appendChild(myPic);
    //
    // console.log(Data);
    //
    return element;
}

document.body.appendChild(component());
