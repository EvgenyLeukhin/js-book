# Install

You can download nodejs from official site [nodejs.org](https://nodejs.org/ru/).

### Node & npm versions

```bash
node -v && npm -v
```

## Linux

```bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Mac OS

```bash
brew install node
```

### Lunch code in console

```bash
node
```

and write js-code.

### Lunch code from some file in console

```bash
node some-file.js
```

# Nvm

## Install

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

## Check node version

```bash
node -v
```

## See list of installed versions

```bash
nvm ls
```

## Install/uninstall some version

```bash
nvm install/uninstall 10.15.0
```

## Use installed version

```bash
nvm use 10.15.0
```

## .nvmrc

```bash
node -v > .nvmrc
```
