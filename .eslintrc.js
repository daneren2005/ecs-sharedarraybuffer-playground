module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
		'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-empty': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-constant-condition': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-case-declarations': 'off',
		'semi': 'error',
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1,
				'ignoredNodes': [
					'TemplateLiteral'
				]
			}
		],
		'comma-dangle': ['error', 'never'],
		'prefer-const': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'@typescript-eslint/no-var-requires': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
