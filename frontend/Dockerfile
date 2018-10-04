FROM node:9 AS builder

WORKDIR /usr/src/app

ADD yarn.lock package.json ./

RUN yarn install --no-progress

COPY . ./

RUN yarn build

FROM romanovfielmann/simple-static-server

WORKDIR /

ENV STATIC_FILES_DIRECTORY="/static-files"
ENV SERVING_PORT="8080"

COPY --from=builder /usr/src/app/build /static-files

EXPOSE 8080

CMD ./static-server