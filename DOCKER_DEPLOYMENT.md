# Server96 Landing - Docker Deployment Guide

## Prerequisites

- Docker installed (v20.10+)
- Docker Compose installed (v1.29+)
- Nginx Proxy Manager (already installed on your server)

## Quick Start

### Build and Run with Docker Compose

```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

The application will be available at `http://localhost:1996`

### Nginx Proxy Manager Configuration

In your Nginx Proxy Manager dashboard:

1. Go to **Proxy Hosts** → **Add Proxy Host**
2. Configure:
   - **Domain Names**: `your-domain.com` (or your actual domain)
   - **Scheme**: `http`
   - **Forward Hostname/IP**: `localhost`
   - **Forward Port**: `1996`
   - **Cache Assets**: ✓ Enabled
   - **Block Common Exploits**: ✓ Enabled
3. Go to **SSL** tab:
   - **SSL Certificate**: Request a new SSL certificate
   - **Force SSL**: ✓ Enabled
   - **HTTP/2 Support**: ✓ Enabled
4. Save

Your application is now accessible via `https://your-domain.com`

## Manual Docker Build

### Build the image

```bash
docker build -t server96-landing:latest .
```

### Run the container

```bash
docker run -d \
  --name server96-landing \
  -p 1996:4200 \
  -e NODE_ENV=production \
  -e PORT=4200 \
  --restart unless-stopped \
  server96-landing:latest
```

### View logs

```bash
docker logs -f server96-landing
```

### Stop the container

```bash
docker stop server96-landing
docker rm server96-landing
```

## Production Deployment

### Using Docker Compose with Production Override

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### Environment Variables

- `NODE_ENV`: Set to `production` (default)
- `PORT`: Application port (default: 4200)

### Resource Allocation

The docker-compose.yml includes resource limits:
- **CPU**: 2 cores max, 1 core reserved
- **Memory**: 1GB max, 512MB reserved

Adjust these based on your server capacity.

## Health Checks

The container includes a health check that runs every 30 seconds. The application is considered healthy if it responds with status code 200.

View health status:
```bash
docker-compose ps
```

## Logs and Monitoring

### View logs

```bash
# Real-time logs
docker-compose logs -f server96-landing

# Last 100 lines
docker-compose logs --tail 100 server96-landing

# Logs from specific time
docker-compose logs --since 2024-05-01 server96-landing
```

### Log rotation

Docker is configured to rotate logs automatically:
- Max log file size: 10MB
- Max number of files: 3

## Performance Optimization

The build uses multi-stage compilation:
1. **Builder stage**: Creates optimized production bundle
2. **Production stage**: Lightweight runtime with only production dependencies

This results in a smaller final image (~300MB vs 800MB+ with dev deps).

## Networking

The application is served on:
- Container internal: `http://localhost:4200`
- Host machine: `http://localhost:1996`
- Via Nginx Proxy Manager: `https://your-domain.com`

To expose on a different port:
```bash
# Modify docker-compose.yml ports section
ports:
  - "3000:4200"  # Host:Container
```

## Troubleshooting

### Container won't start
```bash
docker-compose logs server96-landing
```

### Port already in use
```bash
# Change port in docker-compose.yml
ports:
  - "1996:4200"

# Or kill the process using port 1996
lsof -i :1996
kill -9 <PID>
```

### Memory issues
```bash
# Increase memory limit in docker-compose.yml
deploy:
  resources:
    limits:
      memory: 2G
```

## Updating the Application

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose up -d --build
```

## Production Best Practices

1. **Use Nginx Proxy Manager** for reverse proxy and SSL (already configured above)
2. **Enable HTTPS/TLS** via Nginx Proxy Manager (automatic Let's Encrypt)
3. **Monitor container health** with Docker health checks
4. **Use environment variables** for sensitive data
5. **Set resource limits** to prevent resource exhaustion
6. **Enable log rotation** (already configured)
7. **Regular backups** of configuration and data

## Nginx Proxy Manager Quick Reference

**Accessing the Dashboard:**
- Navigate to `http://localhost:81` (or your configured port)
- Default credentials: `admin@example.com` / `changeme`

**To add or update a proxy host:**
1. Click **Proxy Hosts** → **Add Proxy Host**
2. Enter your domain name
3. Set forward to `localhost:1996`
4. Enable cache and security options
5. Add SSL certificate (Let's Encrypt)
6. Save

**Useful commands on server:**
```bash
# View Nginx Proxy Manager logs
docker logs nginx-proxy-manager

# Restart Nginx
docker-compose restart nginx-proxy-manager
```
