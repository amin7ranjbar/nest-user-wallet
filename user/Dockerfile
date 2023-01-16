FROM node:14.21.2-alpine3.16
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
ADD . /var/www/app
RUN npm install
CMD npm run migration:up && npm run build && npm run start:prod
EXPOSE 3000