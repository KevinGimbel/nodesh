# nodesh
#### Example Node CLI script

This repository holds some example code written to better understand the usage of NodeJS for command line tools. `nodesh` does not use any third-party scripts because I want to learn how to implement a script on my own. Actually, it does not do much and is propably of little interest to anyone.

Thre are some basic tests for `nodesh` inside the `test` directory. The tests use Mocha and can be run with `npm test`.

### Installation

Clone this repository to your computer and run `npm install -g` inside. This will install the `nodesh` executable inside your `$PATH`. 

### Uninstall 

To remove the script run `npm remove -g nodesh`.

### Usage

See `nodes -u`

```sh
USAGE: nodesh [OPTION ["arguments"]]

OPTIONS:
    -n "name"   Greet someone or say "Hello, world!"
    -u          Show usage message
    -v          Show version
    -t          Run mocha tests for nodesh
```

Example:

```sh
$ nodesh -n "Kevin"
Hello, Kevin!
$ nodesh -v
nodesh - v1.0.0
Example node cli app.

(c) 2017 by Kevin Gimbel <https://kevingimbel.com>
Report issues to https://github.com/kevingimbel/nodesh/issues
```

### Scripts

Inside the `scripts` folder is a `pre-commit` git hook that executes the mocha test before a commit can be made. To use it, copy it to `.git/hooks/`.