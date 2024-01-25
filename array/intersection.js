// 创建一个新数组，其值由所有传入数组的交集元素组成
export default (...arrays) => {
    const result = [];
    // 结果数组中的元素个数
    const length = Math.min(...arrays.map(array => array.length));
    // 第一个数组（每个元素只出现一次）
    const first = [...new Set(arrays[0])];
    // 剩余数组
    const rest = arrays.slice(1);
    for (const value of first) {
        // 剩余数组是否均包含当前元素
        const includes = rest.every(array => array.includes(value));
        if (includes) {
            result.push(value);
        }
        if (result.length === length) {
            break;
        }
    }
    return result;
};
