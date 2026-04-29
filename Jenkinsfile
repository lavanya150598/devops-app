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
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-app'
            }
        }
    }
}