/* eslint max-len:off */
const { ruleName } = require('../index');

// Sass and Less edgecases
testRule({
	ruleName,
	config: {},
	skipBasicChecks: true,
	accept: [
		// Should not conflict with keyframes
		{
			code: '@keyframes blue-background-change { 0% { background: black } }',
		},
		// Should not conflict with scss placeholders
		{
			code: '%placeholder { }',
		},
		// Should not conflict with less mixins
		{
			code: '.mixin() { }',
		},
		// Should not conflict with less mixins
		{
			code: '.mixin(@prop: black) { background: @prop }',
		},
		// Should not conflict with less namespaces
		{
			code: '#namespace { }',
		},
		// Should not conflict with ampersands inside mixins
		{
			code: '@mixin specialCase { &:hover { } }',
		},
	],
	reject: [
		{
			code: '.no-mixin:not(x) { }',
			message: `Expected class name "no-mixin" to start with a valid prefix: "a-", "m-", "o-", "l-", "g-", "h-", "state-". (${ruleName})`,
		},
	],
});
