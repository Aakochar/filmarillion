module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // best practices
    "consistent-return": [
      "error"
    ],
    "curly": [
      "error"
    ],
    "default-case": [
      "error"
    ],
    "default-param-last": [
      "error"
    ],
    "dot-location": [
      "error",
      "object"
    ],
    "dot-notation": "error",
    "eqeqeq": [
      "error",
      "always"
    ],
    "grouped-accessor-pairs": "error",
    "max-classes-per-file": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-loop-func": "error",
    "no-lone-blocks": "error",
    "no-magic-numbers": [
      "error",
      { "ignore": [1] }
    ],
    "no-multi-str": "error",
    "no-multi-spaces": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-assign": "error",
    "no-proto": "error",
    "no-param-reassign": "error",
    "require-await": "error",
    "no-warning-comments": "error",
    "no-shadow": "error",
    "no-use-before-define": "error",
    // style suggestions
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "consistent-this": [
      "error",
      "that"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "indent": [
      "error",
      2
    ],
    "line-comment-position": [
      "error",
      {
        "position": "above"
      }
    ],
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "max-depth": [
      "error",
      4
    ],
    "max-params": [
      "error",
      5
    ],
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-plusplus": "error",
    "no-unneeded-ternary": "error",
    "one-var": [
      "error",
      "never"
    ],
    "operator-linebreak": [
      "error",
      "before"
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    // es6 rules
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-useless-computed-key": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "symbol-description": "error",

    // vue
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/require-direct-export": "error",
  },
  env: {
    browser: true,
    node: true,
  }
}
