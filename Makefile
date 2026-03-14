install:
	npm install

dev:
	npx concurrently "npx @11ty/eleventy --serve --port=4321" "npx @tailwindcss/cli -i src/styles/main.css -o _site/css/style.css --watch"

build:
	npx @tailwindcss/cli -i src/styles/main.css -o _site/css/style.css --minify
	npx @11ty/eleventy

preview: build
	npx serve _site -l 4321

clean:
	rm -rf _site

.PHONY: install dev build preview clean
