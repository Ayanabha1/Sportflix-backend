FROM node:latest

COPY . /home/sportflix

WORKDIR /home/sportflix/

RUN npm install

EXPOSE 3000

CMD ["node", "app"]
