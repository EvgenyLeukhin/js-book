# Npm

Npm install with node automaticly.

## Install

```bash
npm i -g package-name
npm i --save-dev package-name
```

## Remove

```bash
npm remove -g package-name
npm remove --save-dev package-name
```

## Update

```bash
npm update -g <package_name>
npm update --save-dev <package_name>
```

## Update all packages

```bash
npm update -g
npm update --save-dev
```

## Rebuild

Helpful command when need to reinstall package after change node version.

```bash
npm rebuild <package_name>
```

## See installed

Localy
```npm list -g --depth 0```

Globaly
```npm list --save-dev --depth 0```

# Yarn

## Install

```bash
npm i -g yarn
yarn -v
```

## Add package

```bash
yarn add package-name
```

## Remove

```bash
yarn remove package-name
```
