FROM node:17.3-alpine3.15

# EXPOSE 8080

#ENV NODEJS_VERSION=17 \
#    NPM_RUN=start \
#    NAME=nodejs \
#    NPM_CONFIG_PREFIX=$HOME/.npm-global

RUN mkdir -p /usr/src/app
COPY ./app/* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
CMD node /usr/src/app/index.js