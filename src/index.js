// import _ from 'lodash';
// import './style.css';
// import Picture from './pic.jpg';
// import Data from './data.xml';

// import printMe from './print.js';
import { cube } from './main.js';


function component() {
    // const element = document.createElement('div');
    var btn = document.createElement('button');
    var element = document.createElement('pre');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);
    // element.classList.add('hello');
    //
    // var myPic = new Image();
    // myPic.src = Picture;
    // element.appendChild(myPic);
    //
    // console.log(Data);
    //

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element;
}

document.body.appendChild(component());


// if(module.hot) {
//     module.hot.accept('./print.js',function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }
