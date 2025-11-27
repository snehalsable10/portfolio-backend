# Portfolio Backend API

Backend API for my portfolio website built with Node.js, Express, and MongoDB.

## Features
- Contact form API
- Projects listing
- Skills endpoint
- MongoDB integration

## Setup

1. Clone the repository
```bash
git clone https://github.com/snehalsable10/portfolio-backend.git
cd portfolio-backend
```

2. Install dependencies
```bash
npm install
```

3. Create .env file
```bash
cp .env.example .env
```

4. Add your MongoDB URI to .env

5. Run the server
```bash
npm start
```

## API Endpoints

- `GET /` - API status
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get skills list
- `POST /api/contact` - Submit contact form

## Deploy to Render

1. Connect your GitHub repository
2. Add environment variable: `MONGODB_URI`
3. Deploy!

## Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose