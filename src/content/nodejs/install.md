# Install Node.js

You can download nodejs from official site [nodejs.org](https://nodejs.org/ru/).

## Node & npm versions

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
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

## Check node version

```bash
node -v
```

## See list of installed versions

```bash
nvm ls
nvm ls-remote
```

## Install/uninstall some version

```bash
nvm install stable (last stable version)
nvm install/uninstall 10.15.0 (install exact version)
```

## Create .nvmrc file

Run this command from root of project directory

```bash
node -v > .nvmrc
```

## Use node-version from .nvmrc file

```bash
node use
```

## Use installed version

```bash
nvm use 10.15.0
nvm alias default 10.15.0
```


## Remove node, npm & nvm

[link stackoverflow](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)

```bash
sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp
```

To completely uninstall node + npm is to do the following:

1. go to /usr/local/lib and delete any node and node_modules
2. go to /usr/local/include and delete any node and node_modules directory
3. if you installed with brew install node, then run brew uninstall node in your terminal
4. check your Home directory for any local or lib or include folders, and delete any node or node_modules from there
5. go to /usr/local/bin and delete any node executable

```bash
sudo rm -rf /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node.1 /usr/local/lib/dtrace/node.d

rm -rf ~/.node-gyp
rm -rf ~/.nvm
rm -rf ~/.npm
```
