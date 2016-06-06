module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq eslintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    {{#if_eq eslintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    {{/if_eq}}
    {{#if_eq eslintConfig "airbnb"}}
    'import/no-unresolved': 0,
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
