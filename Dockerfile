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
#ARG app_version
#ARG app_environment
WORKDIR /app
COPY --from=build /build ./
COPY .env-example .env
RUN npm run generate
#RUN printf "\nAPP_VERSION=$app_version" >> .env
#RUN printf "\nENVIRONMENT=$app_environment" >> .env
EXPOSE 5006
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5006
CMD ["npm", "start"]

