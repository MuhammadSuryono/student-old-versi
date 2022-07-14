FROM node:12
WORKDIR /nuxt-student
COPY . .
RUN npm install
RUN npm run build
RUN npm run generate

EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
CMD ["npm", "start"]
