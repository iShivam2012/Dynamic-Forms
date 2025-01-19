FROM node:latest

RUN useradd -u 10001 nonroot

RUN mkdir /home/nonroot
WORKDIR /home/nonroot

COPY package*.json ./
RUN npm install

COPY . .

RUN chown -R nonroot:nonroot /home/nonroot

USER 10001

RUN npm run build
RUN ls

CMD ["npx", "serve", "-s", "/home/nonroot/dist", "-l", "8080"]