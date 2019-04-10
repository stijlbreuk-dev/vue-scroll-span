module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    /**
     * Contains all AirBnb standards and doesn't require installing
     * peer dependencies which are only required for use in combination with React.
     * https://www.npmjs.com/package/@vue/eslint-config-airbnb
     */
    '@vue/airbnb'
  ],
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems: 1
      }
    ],
    'array-element-newline': [
      'error',
      'always'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    curly: [
      'error'
    ],
    'import/extensions': [
      'never'
    ],
    indent: [
      'error',
      2
    ],
    'no-console': 'off',
    // Only allow 'debugger;' statements in development
    'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
    /**
     * The AirBNB config disallows the use 'ForOfStatement', 'ForInStatement', 'LabeledStatement'
     * and 'WithStatement' by default, this overrides the config making 'ForOfStatement' allowed.
     * https://github.com/mozilla/eslint-config-amo/issues/45
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_this'
        ]
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 1
        },
        ExportDeclaration: 'always'
      }
    ],
    'object-property-newline': [
      'error',
      {}
    ],
    quotes: [
      'error',
      'single'
    ],
    strict: 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot'
        ]
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: {
          max: 1
        }
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never'
        }
      }
    ],
    'vue/script-indent': [
      'error'
    ]
  },
  overrides: [
    {
      files: [
        'src/store/modules/*.js'
      ],
      rules: {
        // Disabling this rules allows parameter property reassigning in VueX mutations
        'no-param-reassign': 'off'
      }
    },
    {
      files: [
        'src/**/*'
      ],
      parserOptions: {
        // This will prevent errors when using 'import' in Vue SFCs
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: {
        browser: true
      }
    }
  ]
};
