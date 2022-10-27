FROM node:18.12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./myapp/package*.json /usr/src/app/
RUN npm install
COPY ./myapp /usr/src/app

EXPOSE 3000
CMD "yarn" "start"