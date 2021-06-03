module.exports = {
    setupFiles: ["raf/polyfill", './src/config/setupTests.js'],
    snapshotSerializers: ["enzyme-to-json/serializer"]
};
