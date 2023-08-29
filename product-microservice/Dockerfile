FROM gradle:8.0.0-jdk17 AS builder
WORKDIR /app
COPY . .
RUN gradle build --no-daemon

FROM openjdk:17
WORKDIR /app
COPY --from=builder /app/build/libs/product-microservice-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]


