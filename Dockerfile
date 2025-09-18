FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache python3 g++ make \
    && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]