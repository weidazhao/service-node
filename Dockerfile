FROM node:argon

WORKDIR /nodeapp
COPY package.json .
RUN npm install
COPY . .

ENTRYPOINT ["node", "server.js"]