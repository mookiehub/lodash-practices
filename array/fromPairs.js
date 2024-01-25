// 返回一个由键值对数组构成的对象
export default (pairs = [[]]) => {
    const result = {};
    pairs.forEach(pair => {
        const [key, value] = pair;
        result[key] = value;
    });
    return result;
};
