FROM node:16

RUN groupadd -r appgroup && \
    useradd -r -m -g appgroup -u 15000 nonrootuser

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R appuser:appgroup /app

USER nonrootuser

EXPOSE 3000

CMD ["npm", "run", "dev"]
