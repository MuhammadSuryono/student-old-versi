def buildNumber = env.BUILD_NUMBER as int
if (buildNumber > 1) milestone(buildNumber - 1)
milestone(buildNumber)

def micrositeName = '/api/dashboard'
def git_repo = "https://code.mylabzolution.com/edc-business/dashboard-service.git"
def public_route_prefix = 'edcweb'
def git_branch = "development"

def namespace = 'edc-dev'
def env = 'dev-micro-edc-limit'
def nexus_base_url = 'https://library.mylabzolution.com'
def nexus_deps_repo = "$nexus_base_url/repository/mvn_atm_dev/"
def nexus_deploy_repo = "$nexus_base_url/repository/atm_dev/"
def projectName = 'edc-dev'

def cpu_req = '500m'
def memory_req = '1000Mi'
def cpu_limit = '1000m'
def memory_limit = '2000Mi'

def appName = 'dashboard-service'
def pomappName
def appFullVersion
def gitCommitId

node ('nodejs'){
    stage('Checkout') {
        git url: "${git_repo}", branch: "${git_branch}", credentialsId: 'gagah'
    }
    stage('Prepare'){
        withCredentials([[$class: 'UsernamePasswordMultiBinding',
            credentialsId: 'nexus',
            usernameVariable: 'nexus_username', passwordVariable: 'nexus_password']]) {
                sh """
                    echo 'Downloading ci-cd templates...'
                    curl --fail -u ${nexus_username}:${nexus_password} -o cicd-template.tar.gz ${nexus_base_url}/repository/general-ist/cicd-template-${env}.tar.gz
                    rm -rf cicd-template
                    mkdir cicd-template && tar -xzvf ./cicd-template.tar.gz -C "\$(pwd)/cicd-template"
                    chmod -R 777 "\$(pwd)/cicd-template"
                    """
                prepareSettingsXml(nexus_deps_repo, nexus_username, nexus_password)
                addDistributionToPom(nexus_deploy_repo)
        }

        pomappName = getFromPom('name')
        if(pomappName == null || pomappName.trim() == ""){
          pomappName = getFromPom('artifactId')
        }
        //sh "mvn -s ./cicd-template/maven/settings.xml build-helper:parse-version versions:set -DnewVersion=\\\${parsedVersion.majorVersion}.\\\${parsedVersion.minorVersion}.\\\${parsedVersion.incrementalVersion}\\\${parsedVersion.qualifier?}.${BUILD_NUMBER} versions:commit"
        appFullVersion = getFromPom('version')
        gitCommitId = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        echo "pomappName: '${pomappName}', appFullVersion:'${appFullVersion}', gitCommitId:'${gitCommitId}'"
        appMajorVersion = appFullVersion.substring(0, appFullVersion.indexOf('.'))
        parameterProjectname(projectName)
        parameterTemplatedeployment(appName, appMajorVersion, appFullVersion)
        parameterTemplateingress(appName, appMajorVersion, micrositeName, public_route_prefix)
        parameterTemplatedeployment(appName, appMajorVersion, appFullVersion, cpu_req, memory_req, cpu_limit, memory_limit)
        parameterTemplateHpa(appName, appMajorVersion)
    }



    stage('Build') {

        sh """
        mvn clean -U package -DskipTests=true -s ./cicd-template/maven/settings.xml
        """
    }

    //stage('Update Sonar Code Quality'){
        //sh 'mvn verify sonar:sonar -Dsonar.host.url=https://sonarqube.mylabzolution.com -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml -s ./cicd-template/maven/settings.xml'
    //}

    stage ('Docker Build'){
        sh """
        docker build --rm -t image.mylab-siab.com/edc-dev/${appName}-v${appMajorVersion}:${appFullVersion} .
      """
    }

    stage ('Docker Push'){
        sh """
        docker push image.mylab-siab.com/edc-dev/${appName}-v${appMajorVersion}:${appFullVersion}
        sleep 120
      """
    }
    stage ('Deploy to GKE'){

            sh """
            export PATH="${PATH}:/root/google-cloud-sdk/bin"
            gcloud auth activate-service-account --key-file /cimb-edc-357007-0879643a083f.json
            gcloud container clusters get-credentials edc-development --zone asia-southeast2-a --project cimb-edc-357007
            kubectl apply -f ./cicd-template/kubernetes-external/deployment.yaml -n ${namespace}
            kubectl apply -f ./cicd-template/kubernetes-external/ingress.yaml -n ${namespace} --validate=false
            kubectl apply -f ./cicd-template/kubernetes-external/hpa.yaml -n ${namespace} --validate=false
            """
    }

    stage ('Rollout'){
        sh """
        kubectl rollout restart deployment ${appName}-v${appMajorVersion} -n ${namespace}
      """
    }
}

def getFromPom(key) {
    sh(returnStdout: true, script: "mvn -U -s ./cicd-template/maven/settings.xml -q -Dexec.executable=echo -Dexec.args='\${project.${key}}' --non-recursive exec:exec").trim()
}

def addDistributionToPom(nexus_deploy_repo) {
    pom = 'pom.xml'
    distMngtSection = readFile('./cicd-template/maven/pom-distribution-management.xml')
    distMngtSection = distMngtSection.replaceAll('\\$nexus_deploy_repo', nexus_deploy_repo)
    content = readFile(pom)
    newContent = content.substring(0, content.lastIndexOf('</project>')) + distMngtSection + '</project>'
    writeFile file: pom, text: newContent
}

def prepareSettingsXml(nexus_deps_repo, nexus_username, nexus_password) {
    settingsXML = readFile('./cicd-template/maven/settings.xml')
    settingsXML = settingsXML.replaceAll('\\$nexus_deps_repo', nexus_deps_repo)
    settingsXML = settingsXML.replaceAll('\\$nexus_username', nexus_username)
    settingsXML = settingsXML.replaceAll('\\$nexus_password', nexus_password)

    writeFile file: './cicd-template/maven/settings.xml', text: settingsXML
}

def parameterProjectname(projectName) {
    parameter = readFile('./src/main/resources/application.properties')
    parameter = parameter.replaceAll('\\$projectName', projectName)

    writeFile file: './src/main/resources/application.properties', text: parameter
}

def parameterTemplatedeployment(appName, appMajorVersion, appFullVersion) {
    parameter = readFile('./cicd-template/kubernetes-external/deployment.yaml')
    parameter = parameter.replaceAll('\\$APP_NAME', appName)
    parameter = parameter.replaceAll('\\$APP_MAJOR_VERSION', appMajorVersion)
    parameter = parameter.replaceAll('\\$APP_FULL_VERSION', appFullVersion)

    writeFile file: './cicd-template/kubernetes-external/deployment.yaml', text: parameter
}

def parameterTemplateingress(appName, appMajorVersion, micrositeName, public_route_prefix) {
    parameter = readFile('./cicd-template/kubernetes-external/ingress.yaml')
    parameter = parameter.replaceAll('\\$APP_NAME', appName)
    parameter = parameter.replaceAll('\\$APP_MAJOR_VERSION', appMajorVersion)
    parameter = parameter.replaceAll('\\$APP_ROUTE_PATH', micrositeName)
    parameter = parameter.replaceAll('\\$PUBLIC_ROUTE_PREFIX', public_route_prefix)

    writeFile file: './cicd-template/kubernetes-external/ingress.yaml', text: parameter
}
def parameterTemplateHpa(appName, appMajorVersion) {
    parameter = readFile('./cicd-template/kubernetes-external/hpa.yaml') 
    parameter = parameter.replaceAll('\\$APP_NAME', appName)
    parameter = parameter.replaceAll('\\$APP_MAJOR_VERSION', appMajorVersion)

    writeFile file: './cicd-template/kubernetes-external/hpa.yaml', text: parameter
}
def parameterTemplatedeployment(appName, appMajorVersion, appFullVersion, cpu_req, memory_req, cpu_limit, memory_limit) {
    parameter = readFile('./cicd-template/kubernetes-external/deployment.yaml') 
    parameter = parameter.replaceAll('\\$APP_NAME', appName)
    parameter = parameter.replaceAll('\\$APP_MAJOR_VERSION', appMajorVersion)
    parameter = parameter.replaceAll('\\$APP_FULL_VERSION', appFullVersion)
    parameter = parameter.replaceAll('\\$CPU_REQ', cpu_req)
    parameter = parameter.replaceAll('\\$MEM_REQ', memory_req)
    parameter = parameter.replaceAll('\\$CPU_LIMIT', cpu_limit)
    parameter = parameter.replaceAll('\\$MEM_LIMIT', memory_limit)


    writeFile file: './cicd-template/kubernetes-external/deployment.yaml', text: parameter
}

