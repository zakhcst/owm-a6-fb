FROM node:8.12-slim

RUN ["mkdir", "firebase"]
RUN cd firebase
WORKDIR /firebase
COPY .firebaserc firebase.json ./

RUN ["node", "-v"]
RUN ["npm", "-v"]
RUN ["npm", "-s", "-g", "i", "firebase-tools@latest"]
RUN ["npm", "-g", "ls", "--depth", "0"]
