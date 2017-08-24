FROM node
WORKDIR /app
RUN npm install nodemon -g
COPY package.json /app/package.json
RUN npm install
COPY . /app
CMD nodemon start
EXPOSE 3000