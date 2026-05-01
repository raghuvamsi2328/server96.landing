#!/bin/bash

# Server96 Landing - Docker Quick Commands

# ============================================
# Development
# ============================================

# Build and start containers
start-dev() {
  docker-compose -f docker-compose.yml up -d
  echo "✓ Application running at http://localhost:1996"
}

# View logs
logs() {
  docker-compose logs -f server96-landing
}

# Stop containers
stop() {
  docker-compose down
  echo "✓ Containers stopped"
}

# Restart containers
restart() {
  docker-compose restart
  echo "✓ Containers restarted"
}

# Clean up everything
clean() {
  docker-compose down -v
  docker system prune -f
  echo "✓ Docker cleaned up"
}

# ============================================
# Production
# ============================================

# Build production image
build-prod() {
  docker build -t server96-landing:latest .
  echo "✓ Production image built"
}

# Run production container
run-prod() {
  docker run -d \
    --name server96-landing-prod \
    -p 1996:4200 \
    -e NODE_ENV=production \
    --restart unless-stopped \
    --health-interval=30s \
    --health-timeout=10s \
    --health-retries=3 \
    --health-start-period=40s \
    server96-landing:latest
  echo "✓ Production container running at http://localhost:1996"
}

# Push to registry (example: Docker Hub)
push() {
  local REGISTRY="${1:-docker.io}"
  local USERNAME="${2:-}"
  local IMAGE_NAME="server96-landing"
  
  if [ -z "$USERNAME" ]; then
    echo "Usage: push <registry> <username>"
    echo "Example: push docker.io myusername"
    return 1
  fi
  
  docker tag server96-landing:latest "$REGISTRY/$USERNAME/$IMAGE_NAME:latest"
  docker push "$REGISTRY/$USERNAME/$IMAGE_NAME:latest"
  echo "✓ Image pushed to $REGISTRY/$USERNAME/$IMAGE_NAME:latest"
}

# ============================================
# Monitoring
# ============================================

# Check container status
status() {
  docker-compose ps
}

# View resource usage
stats() {
  docker stats server96-landing
}

# ============================================
# Utility
# ============================================

# Build image and run tests
test() {
  docker-compose build
  docker-compose up -d
  sleep 10
  echo "Testing health check..."
  docker-compose ps
  docker-compose logs
}

# Display help
help() {
  echo "Server96 Landing - Docker Commands"
  echo ""
  echo "Development:"
  echo "  start-dev    - Start containers"
  echo "  logs         - View container logs"
  echo "  stop         - Stop containers"
  echo "  restart      - Restart containers"
  echo "  clean        - Clean up Docker resources"
  echo ""
  echo "Production:"
  echo "  build-prod   - Build production image"
  echo "  run-prod     - Run production container"
  echo "  push         - Push image to registry"
  echo ""
  echo "Monitoring:"
  echo "  status       - Check container status"
  echo "  stats        - View resource usage"
  echo ""
  echo "Utility:"
  echo "  test         - Build and test"
  echo "  help         - Show this help message"
}

# Run the command provided as argument
$@
