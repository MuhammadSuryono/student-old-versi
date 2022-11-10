pipeline {

  environment {
    dockerimagename = "primeskills/petra-student"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git url: 'https://muhammadsuryono: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@github.com/Primeskills-Web-Team/petra-student-frontend.git', branch: '0.3.0', credentialsId: 'github_suryono'
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

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "=.yml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}