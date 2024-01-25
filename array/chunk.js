// 根据指定长度将数组拆分成多个区块，并将这些区块组成一个新数组。
export default (array = [], size = 1) => {
    // 新数组的元素个数
    const length = Math.ceil(array.length / size);
    const result = Array(length);
    // 原数组中的索引
    let index = 0;
    for (let i = 0; i < length; i++) {
        // 新数组的每个元素为原数组指定长度的切片
        result[i] = array.slice(index, index += size);
    }
    return result;
};
