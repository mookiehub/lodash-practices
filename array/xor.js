import difference from './difference.js';
import flatten from './flatten.js';

// 创建一个数组，其值由给定数组的唯一值（对称差集）组成
export default (...arrays) => {
    const { length } = arrays;
    // 创建元素数量相同的结果数组
    const result = Array(length);
    arrays.forEach((array, index) => {
        for (let otherIndex = 0; otherIndex < length; otherIndex++) {
            if (otherIndex !== index) {
                // 结果数组中的每个元素也是数组，
                // 其值为自身元素排除 arrays 其他索引位置的数组元素
                const current = result[index] || array;
                result[index] = difference(current, arrays[otherIndex]);
            }
        }
    });
    // 将结果数组减少一级嵌套深度并去掉重复元素
    return [...new Set(flatten(result))];
};
