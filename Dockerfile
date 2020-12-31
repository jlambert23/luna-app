FROM node:latest
COPY . /src
WORKDIR /src
RUN yarn install
EXPOSE 5600
CMD ["node", "-r", "esm", "-r", "dotenv/config", "index.js", "dotenv_config_path=./config/.env" ]
