# build-stage
FROM node:16 as build-stage
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node","app.js"]

# production stage
# FROM nginx:stable-alpine as prduction-stage
# WORKDIR /usr/share/nginx/html
# COPY --from=build-stage /app/build .
# ENTRYPOINT ["nginx","-g","daemon off;"]