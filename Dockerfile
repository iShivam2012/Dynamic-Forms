FROM node
RUN groupadd -r appgroup && useradd -r -m -g appgroup appuser
WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["npm", "run", "dev"]
