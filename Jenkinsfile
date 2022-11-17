pipeline {

  environment {
    dockerimagename = "primeskills/petra-student"
    dockerImage = ""
    containerName = "nuxt-app-student-dev"
    port = "5006"
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git url: 'https://muhammadsuryono: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@github.com/Primeskills-Web-Team/petra-student-frontend.git', branch: 'development', credentialsId: 'github_yono_app'
      }
    }

    stage('Setup Environment') {
      steps {
        script {
          sh """
      echo "basePath=/student-dev/" > .env
      echo "basePathBuild=/student-dev/_nuxt/" >> .env
      echo "baseUrl=https://dev.petraverse.id/api" >> .env
      echo "siteKey=6LdCnvghAAAAAMP0pFWnrJBoV0rqwbgByb6bkS5c" >> .env
      cat .env
      """
        }
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
          registryCredential = 'primeskills_docker'
      }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Server') {
      steps {
        script {

          def dockerRunCommand = "whoami && docker stop ${containerName} && docker rm ${containerName} && docker system prune -a -f && docker run -d --name ${containerName} --publish ${port}:5000 ${dockerimagename}"

          sshagent(credentials: ['petra_ssh_server']) {
            sh """
              ssh -o StrictHostKeyChecking=no ubuntu@18.142.248.178 '${dockerRunCommand}'
            """
          }
        }
      }
    }

  }

}
