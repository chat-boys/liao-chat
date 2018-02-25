FROM mhart/alpine-node:latest

MAINTAINER Tom Lagier <lagierta@gmail.com>

WORKDIR www/
RUN npm install
CMD npm run build && npm run start