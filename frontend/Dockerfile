FROM node:12.13 AS builder

WORKDIR /usr/src/app

ADD yarn.lock package.json ./

RUN yarn install --no-progress

COPY . ./

RUN yarn build
RUN CI=true yarn test

FROM nginx:1.14-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]