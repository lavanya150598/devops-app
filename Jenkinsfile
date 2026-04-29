pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/lavanya150598/devops-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t maddikera412/devops-app:latest .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker stop devops-app || true'
                sh 'docker rm devops-app || true'
                sh 'docker run -d -p 3005:3000 --name devops-app maddikera412/devops-app:latest'
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'U', passwordVariable: 'P')]) {
                    sh 'echo $P | docker login -u $U --password-stdin'
                    sh 'docker push maddikera412/devops-app:latest'
                }
            }
        }
    }
}