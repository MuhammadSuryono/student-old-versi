#!/bin/bash
echo "DEPLOY"
sudo docker container stop nuxt-student-staging
sudo docker container rm nuxt-student-staging

# sudo git pull githubrepo staging
sudo docker build -f Dockerfile.staging -t nuxt-student-staging .
sudo docker container run -d -p 5002:5000 --restart unless-stopped --name nuxt-student-staging nuxt-student-staging:latest
echo "DONE"
