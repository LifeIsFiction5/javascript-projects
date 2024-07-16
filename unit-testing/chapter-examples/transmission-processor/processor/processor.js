function processor(transmission){
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }
    return {};
};

module.exports = processor;

