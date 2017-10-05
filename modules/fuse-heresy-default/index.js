module.exports = function(input) {
    return ['function', 'object', 'array']
        .indexOf(typeof input) > -1 && input.default === undefined ? 
             Object.defineProperty(input, "default", {value : input, enumerable : false}) : void 0;
}