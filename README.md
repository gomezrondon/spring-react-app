# spring-react-app
A Demo Todo list created with React and Spring boot.

### First Build the Frontend
 ```
gradle deployFrontend
 ```

### Second build the backend
 ```
 gradle clean build
 ```

### Run Spring boot
 ```
java -jar build/libs/spring-react-app-0.0.1-SNAPSHOT.jar
 ```
 
 ### then go to the url:
  ```
 http://localhost:8080/
  ```

--------- using docker compose

### First Build the Frontend
 ```
gradle deployFrontend
 ```

### Second build the image
 ```
gradle bootBuildImage
 ```

### Run the container
 ```
docker-compose up -d
 ```

### then go to the url:
  ```
 http://localhost:8080/
  ```