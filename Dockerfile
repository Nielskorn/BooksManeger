FROM --platform=linux/amd64 openjdk:23
EXPOSE 8080
ADD backend/target/backend.jar backend.jar
ENTRYPOINT ["java", "-jar", "app.jar"]