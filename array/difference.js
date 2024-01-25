// 创建一个新数组，其值为第一个数组排除了后续数组中的值。
export default (array = [], ...values) => {
    // 后续数组中所有值的集合
    const valueSet = new Set();
    values.forEach(value => {
        if (Array.isArray(value)) {
            value.forEach(item => {
                valueSet.add(item);
            });
        }
    });
    return array.filter(value => !valueSet.has(value));
};
