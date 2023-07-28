FROM node:12.13.0-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:12.13.0-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build ./
#COPY .env-example .env
RUN npm run generate
EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
CMD ["npm", "start"]

