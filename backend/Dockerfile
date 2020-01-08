FROM node

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5600
CMD ["node", "-r", "esm", "-r", "dotenv/config", "index.js", "dotenv_config_path=./config/.env" ]
