if (typeof window === "undefined") {
    module.exports = global.require("stream");
} else {
    module.exports = {}
}