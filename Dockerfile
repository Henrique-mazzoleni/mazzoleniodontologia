FROM node:16.16.0-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./next.config.js

COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD [ "npm", "run", "dev" ]