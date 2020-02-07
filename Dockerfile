FROM node:10.19.0-alpine

# Set up our workspace
WORKDIR /usr/app

# Install app dependencies
COPY ./package.json ./package-lock.json ./
RUN npm install --quiet --production

# App source
COPY . .

# Ports
EXPOSE 3000

# Default Command
CMD ["npm", "run", "start"]
# RUN mkdir /usr/src/app
# COPY . /usr/src/app

# WORKDIR /usr/src/app

# RUN npm i --silent

# EXPOSE 3000
# CMD ["npm", "start"]
