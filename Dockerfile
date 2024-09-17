# FROM node:20-alpine AS build

# WORKDIR /usr/src/app
# COPY package*.json ./

# RUN yarn install --production

FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]

