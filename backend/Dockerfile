FROM node:alpine3.17
RUN addgroup app && adduser -S -G app app
RUN mkdir -p /app && chown app:app /app
USER app

WORKDIR /app
COPY --chown=app:app package*.json .
RUN npm install
ADD . .

EXPOSE 3001
CMD ["npm", "start"]