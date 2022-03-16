FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY ./ ./

EXPOSE 3000

RUN npm ci

CMD ["npm", "start"]