#base image based in node.js
FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 2525  
EXPOSE 3030

CMD [ "npm","start"]
