FROM node:dubnium-alpine

WORKDIR /usr/src/app

# install dependencies
COPY package.json .
RUN npm install

# install the app
COPY . .

EXPOSE 4567
CMD [ "npm", "run", "serve" ]
