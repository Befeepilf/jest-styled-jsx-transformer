const deasync = require('deasync');
const {transformSync} = require('@babel/core');
let cssLoader = require(require('styled-jsx/webpack').loader);


module.exports = {
    process(fileContent, filename) {
        let result;

        cssLoader = cssLoader.bind({
            addDependency() {},
            callback(error, output) {
                result = transformSync(output, {filename}).code;
            },
        });

        cssLoader(fileContent);

        // https://github.com/facebook/jest/issues/5556#issuecomment-429145941
        while (result === undefined) {
            deasync.runLoopOnce();
        }

        return result;
    }
}