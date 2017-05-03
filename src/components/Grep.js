//过滤方法
const grep =(elems, callback, inv)=> {
    var ret = [],
        retVal;
    inv = !!inv;

    for (var i = 0, length = elems.length; i < length; i++) {
        retVal = !!callback(elems[i], i);
        if (inv !== retVal) {
            ret.push(elems[i]);
        }
    }

    return ret;
}
export default grep;
