import _ from 'lodash';
import print from './print';
const initMsg = () => {
    const msg = _.join(["hello", "world"], " ");
    const element = document.createElement('div');
    element.innerText = msg;
    element.addEventListener("click", print)

    return element;
}

document.body.appendChild(initMsg())
