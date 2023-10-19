FROM node:lts-alpine3.18 AS webbuilder

# THIS IS A DEVELOPMENT DOCKERFILE WITH MANY COMFORT FEATURES
# REMOVE THEM AND MAKE THIS SECURE FOR PRODUCTION

# RUN adduser -D -u 10001 -G users user

ENV HOME=/home/user
WORKDIR ${HOME}

COPY .bashrc .bashrc
COPY pkglist.txt pkglist.txt
COPY package.json package.json
COPY package-lock.json package-lock.json

# TODO: copy source code on production (do not mount)

# One file, remove cahce, update ...
RUN apk add --no-cache bash
RUN apk add --no-cache vim
RUN rm -rf /var/cache/apk/*

RUN npm install
RUN npm install --save three
RUN npm install --save-dev vite
# Remove npm cache

# useless on production, just make sure the user has correct permissions
# RUN mkdir -p ${SRC}
# RUN chown -R user ${SRC}
# RUN chmod 755 ${SRC}
# USER user

# RUN npm install --save three
# RUN npm install --save-dev vite

# TODO: move package.json to build folder
# TODO: copy public and src folders