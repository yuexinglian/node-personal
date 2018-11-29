module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "node": true,

    },
    extends: [
        'plugin:vue/essential'
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": 0,
        "no-undef": 0,
        "no-multi-spaces": 2,
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1, "maxBOF": 1}],
        "no-console": 0,
        "linebreak-style": "off"
    }
};
