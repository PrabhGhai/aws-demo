FROM node:slim 
WORKDIR /app
COPY . /app
RUN npm install 
EXPOSE 1000
CMD node app.js

