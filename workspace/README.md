# Attendance & Report Management System

Full stack web application for managing attendance and daily reports.

## Directory Structure
- `backend/` - Express API server
- `frontend/` - React SPA built with Vite

## Setup
1. Copy `.env.example` to `.env` and fill values.
2. Build and start containers:

```bash
docker-compose up --build
```

### Windows Server Docker Compose
Ensure Docker Desktop or the Docker engine is installed, then run the above command in PowerShell.

### Deployment with GitHub Actions
Push the repository to GitHub and configure a workflow that builds images and deploys to Azure App Service or Container Registry.
