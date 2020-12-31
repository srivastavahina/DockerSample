
FROM node:current-slim

WORKDIR /usr/src/app
#COPY package.json .
RUN npm install
COPY package.json .
EXPOSE 8080
CMD [ "npm", "server2" ]

COPY . .
