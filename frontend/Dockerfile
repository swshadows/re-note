FROM node:alpine3.17

WORKDIR /home/app
RUN chown -R node:node /home/app
COPY --chown=node:node package.*json .
RUN npm install
COPY --chown=node:node . .
USER node

EXPOSE 8080
CMD ["npm", "run", "serve"]