install:
	npm ci
menu-game:
	node bin/menu-game.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
fix:
	npx eslint . --fix
inst eslint:
	npm install --save-dev eslint
	npm install --save-dev eslint-config-airbnb-base
	npm install --save-dev eslint-plugin-import
