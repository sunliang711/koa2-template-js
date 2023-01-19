FROM node:19-alpine

WORKDIR /app
COPY . ./
RUN yarn
EXPOSE  3000

CMD ["node","/app/src/index.js"]