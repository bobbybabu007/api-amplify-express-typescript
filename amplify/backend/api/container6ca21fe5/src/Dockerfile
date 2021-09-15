FROM node:14.8.0-alpine3.11

WORKDIR '/app'

COPY package*.json ./

RUN npm install

COPY lib .

EXPOSE 4000

CMD ["npm","start"]