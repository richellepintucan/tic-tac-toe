import dom from '../dom.js';
import sum from '../utils/sum.js';
import createSum from '../components/createSum.js';
import updateSum from '../components/updateSum.js';

const sumHandler = () => {
    // get num1 and num2
    const num1 = Number(dom.num1.value);
    const num2 = Number(dom.num2.value);

    // get result
    const result = sum(num1, num2);

    // show result
    const resultExist = document.getElementById('container');
    if (!resultExist) {
        const resultDom = createSum({ result: result });
        dom.output.append(resultDom);
    } else {
        updateSum(resultExist, { result: result });
    }
};

export default sumHandler;
