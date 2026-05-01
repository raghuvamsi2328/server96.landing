#!/bin/bash

# Server96 Landing - Linux Server Deployment Guide
# For servers with Docker and Nginx Proxy Manager already installed
# This script helps with quick deployment on port 1996

echo "==================================="
echo "Server96 Landing - Deployment Setup"
echo "==================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed"
    exit 1
fi

echo "✓ Docker is installed: $(docker --version)"
echo "✓ Docker Compose is installed: $(docker-compose --version)"
echo ""

# Clone/pull repository
read -p "Enter git repository URL: " REPO_URL
read -p "Enter deployment directory (default: /opt/server96-landing): " DEPLOY_DIR
DEPLOY_DIR=${DEPLOY_DIR:-/opt/server96-landing}

echo ""
echo "Cloning repository to $DEPLOY_DIR..."
sudo mkdir -p "$DEPLOY_DIR"
cd "$DEPLOY_DIR"

if [ -d ".git" ]; then
    echo "Repository already exists, pulling latest changes..."
    sudo git pull origin main
else
    echo "Cloning new repository..."
    sudo git clone "$REPO_URL" .
fi

# Ensure proper permissions
sudo chown -R "$USER:$USER" .
chmod +x docker-commands.sh

echo ""
echo "✓ Repository ready at $DEPLOY_DIR"
echo ""

# Build and start
echo "Building Docker image..."
docker-compose build

echo ""
echo "Starting application on port 1996..."
docker-compose up -d

# Wait for health check
echo "Waiting for application to start..."
sleep 10

# Check status
echo ""
echo "=== Docker Status ==="
docker-compose ps
echo ""

# Get container health
HEALTH=$(docker inspect server96-landing --format='{{.State.Health.Status}}' 2>/dev/null)
if [ "$HEALTH" = "healthy" ]; then
    echo "✓ Application is healthy"
else
    echo "⚠ Checking application status..."
    curl -I http://localhost:1996 || echo "Application not yet responding"
fi

echo ""
echo "==================================="
echo "✓ Deployment Complete!"
echo "==================================="
echo ""
echo "Application running at: http://localhost:1996"
echo ""
echo "Next steps:"
echo "1. Open Nginx Proxy Manager dashboard (usually port 81)"
echo "2. Add a Proxy Host:"
echo "   - Domain: your-domain.com"
echo "   - Forward to: localhost:1996"
echo "   - Enable SSL (Let's Encrypt)"
echo ""
echo "3. Access your site at: https://your-domain.com"
echo ""
echo "Useful commands:"
echo "  ./docker-commands.sh logs       - View application logs"
echo "  ./docker-commands.sh stop       - Stop application"
echo "  ./docker-commands.sh restart    - Restart application"
echo "  docker-compose ps               - Check status"
echo ""
