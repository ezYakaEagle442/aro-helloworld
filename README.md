# aro-helloworld

This sample is a very simple NodeJS application used to demonstrate Application deployment in [Azure Redhat OpenShift Service](https://docs.microsoft.com/en-us/azure/openshift). 
The packaged version of the application is available on [Docker Hub](https://hub.docker.com/r/pinpindock/hello-aro).

# Build the docker image
```sh
docker_usr="<Your Docker Hub Account>"
echo "Docker Hub user Name : " $docker_usr 

docker version
docker info
docker login
systeminfo
docker system df
docker container ls

docker build --no-cache -t "$docker_usr/hello-aro:1.0" -f "Dockerfile" .
docker image list
docker image history "$docker_usr/hello-aro:1.0"
```

## Push it to Docker Hub
```sh
docker image push "$docker_usr/hello-aro:1.0"
docker scan --accept-license --file Dockerfile "$docker_usr/hello-aro:1.0"
# docker image prune -a
# docker system prune -a
# docker container prune
# docker volume prune
# docker network prune
#docker container ls
```