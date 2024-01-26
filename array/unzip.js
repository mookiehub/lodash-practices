// 对分组元素进行重组，返回数组的第 n 个元素包含所有的输入数组的第 n 个元素
// 例如：
// 输入数组 [['fred', 30, true], ['barney', 40, false]]
// 输出数组 [['fred', 'barney'], [30, 40], [true, false]]
export default (array = []) => {
    // 组内元素的最大数量
    const maxLength = Math.max(...(array.map(value => value.length)));
    const result = Array(maxLength);
    for (let i = 0; i < maxLength; i++) {
        result[i] = array.map(value => value[i]);
    }
    return result;
};
