import _ from 'lodash';
import './css/style.scss';
import main1 from './js/main1';
import main2 from './js/main2';


function component() {
    let element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());

  console.log('Hello World');

  main1();
  main2();