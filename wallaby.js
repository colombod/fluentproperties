module.exports = function (wallaby) {
    return {
        env: {
            type: "node"
        },
        files: [
            "src/**/*.ts",
            "test/**/*.ts",
            "!test/**/*.specs.ts*"
        ],
        tests: ["tests/**/*.specs.ts"],
        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({
                typescript: require('typescript'),
                module: 'commonjs',
            })
        },
        testFramework: 'mocha',
        debug: true,
        setup: function (wallaby) {
            var mocha = wallaby.testFramework;
            mocha.timeout(10000);
        }
    };
};
