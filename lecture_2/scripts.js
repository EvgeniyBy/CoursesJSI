function deepCopy(startObject) {
    let tempObj = {};
    for (let key in startObject) {
        if (startObject[key].typeOf === 'object') {
            tempObj[key] = deepCopy(startObject[key]);
        } else {
            tempObj[key] = startObject[key];
        }
    }
    return tempObj;
}

function takeFromInterval(origArr, from, to) {
    let startInterval = getNumber(from);
    let endInterval = getNumber(to);
    if (startInterval !== false && endInterval !== false) {
        if (startInterval > endInterval) {
            let tempInt = startInterval;
            startInterval = endInterval;
            endInterval = tempInt;
        }
    } else {
        return new Array();
    }
    return origArr.filter((item) => {
        return (startInterval <= item && item <= endInterval)
    })
}

myIterable = {
    from: 9,
    to: 0,
    [Symbol.iterator]: function() {
        return {
            tempCurrent: this.from,
            endIteration: this.to,
            finishFlag: false,
            next() {
                if ((this.tempCurrent || this.tempCurrent == 0) && (this.endIteration || this.endIteration == 0)) {
                    if (this.tempCurrent < this.endIteration) {
                        return { done: false, value: this.tempCurrent++ };
                    }
                    if (this.tempCurrent > this.endIteration) {
                        return { done: false, value: this.tempCurrent-- };
                    }
                    if ((this.tempCurrent == this.endIteration) && this.finishFlag === false) {
                        this.finishFlag = true;
                        return { done: false, value: this.tempCurrent };
                    }
                }
                return { done: true };
            }
        }
    }
}


function getNumber(strQuery) {
    let result = parseInt(strQuery);
    return (isNaN(result)) ? false : result;
}