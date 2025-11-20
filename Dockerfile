FROM --platform=linux/amd64 node:20-bullseye

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y python3 g++ make libc-dev
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]