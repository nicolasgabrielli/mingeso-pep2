FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} supplier-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/supplier-service-0.0.1-SNAPSHOT.jar"]