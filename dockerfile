FROM node:13.11.0

RUN mkdir app
WORKDIR app
ADD . .
RUN yarn install

ENTRYPOINT ["yarn"]