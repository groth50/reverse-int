module.exports = function reverse (n) {
    return [...n.toString().replace(/\-/g, '')].reverse().join("");
}
