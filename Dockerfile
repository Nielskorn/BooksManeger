FROM --platform=linux/amd64 openjdk:23
EXPOSE 8080
ADD backend/target/backend-0.0.1-SNAPSHOT.jar backend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]