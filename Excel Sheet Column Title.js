var convertToTitle = function(columnNumber) {
    let result = '';

    while(columnNumber > 0){
        let remainder = (columnNumber - 1) %26;
        result = String.fromCharCode('A'.charCodeAt(0) + remainder) + result;
        columnNumber = Math.floor((columnNumber - 1) /26);
    }
    return result;
};

//Example usage:
console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));