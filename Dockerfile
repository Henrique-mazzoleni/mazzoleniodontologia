FROM node:16.16.0-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./next.config.js
COPY .env.local ./.env.local

COPY components ./components
COPY hooks ./hooks
COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD [ "npm", "run", "dev" ]