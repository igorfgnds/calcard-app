FROM node:14.5.0 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx
COPY --from=builder /usr/src/app/dist/calcard-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf