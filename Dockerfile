FROM node:16.20-alpine3.18
COPY . .
RUN npm install && adduser -D auser
USER auser
CMD ["node", "index.js"]