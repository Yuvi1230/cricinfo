# CricInfo Website

A comprehensive and interactive web application similar to CricBuzz, built using Java for the backend and Angular for the frontend. The application provides live cricket scores, match schedules, player statistics, and other cricket-related information in real time.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Live Scores**: Real-time updates of ongoing cricket matches.
- **Match Schedules**: Upcoming match schedules with details.
- **Player Statistics**: Detailed stats of players including runs, wickets, averages, and more.
- **Team Rankings**: Up-to-date team rankings across formats.
- **Interactive UI**: Responsive and user-friendly interface.
- **Search Functionality**: Easily find matches, players, or teams.

## Tech Stack

- **Backend**: Java, Spring Boot
- **Frontend**: Angular
- **Database**: MySQL / PostgreSQL
- **Others**: RESTful API, JSON, HTML, CSS, Tailwind

## Getting Started

### Prerequisites

- Java 17 or later
- Node.js and npm
- Angular CLI
- MySQL / PostgreSQL
- Git

### Installation

1. **Clone the Repository**

```bash
   git clone https://github.com/your-username/cricinfo-website.git
   cd cricinfo-website
```

2. **Backend Setup**
   - Navigate to the backend directory and build the project:

```bash
cd backend
./mvnw clean install
```
Update the application properties file with your database configuration.

3. **Frontend Setup**
Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

## Running the Application
1. **Start the Backend**
From the backend directory, run:
```bash
./mvnw spring-boot:run
```

2. **Start the Frontend**
From the frontend directory, run:

```bash
ng serve
```
The application will be available at http://localhost:4200.

## Project Structure
- backend/: Contains the Java Spring Boot backend code.
- frontend/: Contains the Angular frontend code.
- database/: Database schema and sample data.
- docs/: Documentation and other resources

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and include appropriate tests.

- Fork the Project
- Create your Feature Branch `git checkout -b feature/AmazingFeature`
- Commit your Changes `git commit -m 'Add some AmazingFeature'`
- Push to the Branch `git push origin feature/AmazingFeature`
- Open a Pull Request

