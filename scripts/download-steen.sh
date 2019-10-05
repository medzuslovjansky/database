#!/usr/bin/env bash

mkdir -p external
cd external

redownload() {
  rm -f $1
  curl -O http://steen.free.fr/scripts/$1
  tr -d '\015' <$1 >$2
  printf "\n\nmodule.exports = dictionary();\n" >> $2
  rm $1
}

redownload dictionary.js steen-en.js
redownload slownik.js steen-pl.js
