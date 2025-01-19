FROM node:latest

RUN useradd -u 10001 nonroot

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chown -R nonroot:nonroot /app

USER 10001

CMD ["npm", "run", "dev"]