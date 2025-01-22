FROM --platform=linux/amd64 openjdk:23
EXPOSE 8080
ADD backend/target/backend0.0.1-SNAPSHOT.jar backend.jar
ENTRYPOINT ["java", "-jar", "backend.jar"]