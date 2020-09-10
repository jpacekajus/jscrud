FROM node
COPY *.js* /app/
WORKDIR /app
RUN npm install
CMD node /app/main.js
