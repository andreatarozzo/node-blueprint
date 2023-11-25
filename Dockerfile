FROM node:16.15-alpine
WORKDIR /home/node/app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:16.15-alpine
WORKDIR /home/node/app
COPY . .
RUN yarn install --frozen-lockfile --production && yarn cache clean
EXPOSE 3000
CMD ["yarn", "start"]