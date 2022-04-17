FROM node:14-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build

ENTRYPOINT ["npm", "start", "--port", "8080"]
