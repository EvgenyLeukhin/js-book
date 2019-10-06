# browser-sync

[Official docs](https://www.browsersync.io/)

```bash
npm i -g browser-sync
npm i --save-dev browser-sync
```

## Use from console

Будет выполнен запуск файла index.html в браузере, который лежит в текущей директории. И браузер будет перезагружаться при изменении любого файла в директории.

```bash
browser-sync start --server './src' --files '**/*'
```

## For testing on several devices

In package.json

```json
...
"adaptive-test": "browser-sync start -s dist",
...
```
