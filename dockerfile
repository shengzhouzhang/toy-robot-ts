FROM node:13.11.0

RUN apt-get update && apt-get install -y \
  grep

RUN mkdir app
WORKDIR app
ADD . .
RUN yarn install

ENTRYPOINT ["yarn"]