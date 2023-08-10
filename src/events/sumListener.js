import dom from '../dom.js';
import sumHandler from '../handlers/sumHandler.js';

const sumListener = () => {
    dom.btn.addEventListener('click', sumHandler);
};

export default sumListener;
