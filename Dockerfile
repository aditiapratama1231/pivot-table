FROM node:10

# Create app directory
WORKDIR /usr

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8050
CMD [ "npm", "start" ]