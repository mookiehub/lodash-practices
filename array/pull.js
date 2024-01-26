// 移除数组中所有和给定值相等的元素
export default (array = [], ...values) => {
    values.forEach(value => {
        let index = -1;
        while ((index = array.indexOf(value)) !== -1) {
            array.splice(index, 1);
        }
    });
    return array;
};
