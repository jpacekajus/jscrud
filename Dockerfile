FROM node
COPY . /app
WORKDIR /app
RUN npm install
CMD node /app/main.js
