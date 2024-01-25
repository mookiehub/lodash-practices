// 返回一个由给定数组减少一级嵌套深度得到的新数组
export default (array = []) => {
    const result = [];
    array.forEach(value => {
        if (Array.isArray(value)) {
            value.forEach(item => {
                result.push(item);
            });
            return;
        }
        result.push(value);
    });
    return result;
};
