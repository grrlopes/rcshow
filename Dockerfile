FROM node:14.16.1-alpine as build
RUN mkdir /usr/app
WORKDIR /usr/app
COPY . /usr/app
RUN npm install && npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=build /usr/app/dist/ /usr/share/nginx/html/
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
