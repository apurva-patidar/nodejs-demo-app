# nodejs-demo-app# Node.js Demo App

## Project Overview
This project demonstrates CI/CD automation using GitHub Actions and Docker.

## Technologies Used
- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## Application
A simple Node.js web application that displays:

`Hello from DevOps Internship!`

## CI/CD Pipeline
The GitHub Actions workflow runs automatically when code is pushed to the `main` branch.

Pipeline steps:
1. Checkout the source code.
2. Set up Node.js.
3. Run application tests.
4. Build the Docker image.
5. Push the Docker image to Docker Hub.

## Workflow File
`.github/workflows/main.yml`

## How to Run Locally
1. Install Node.js and Docker.
2. Build the Docker image:

   `docker build -t nodejs-demo-app .`

3. Run the container:

   `docker run -d --name nodejs-demo-container -p 3000:3000 nodejs-demo-app`

4. Open `http://localhost:3000` in your browser.

## Author
Apurva Patidar