# Server96 Landing - Deployment Instructions for Linux Server

Your Server96 Landing application is ready to deploy on your Linux server with Docker and Nginx Proxy Manager.

## Quick Deployment

### On Your Server

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url> /opt/server96.landing
   cd /opt/server96.landing
   ```

2. **Start the application**:
   ```bash
   docker-compose up -d
   ```

3. **Verify it's running**:
   ```bash
   docker-compose ps
   docker-compose logs -f
   ```

The application will be available at `http://localhost:1996`

### Configure Nginx Proxy Manager

1. **Open Nginx Proxy Manager Dashboard**:
   - Go to `http://your-server-ip:81` (or your configured port)
   - Login with your credentials

2. **Add Proxy Host**:
   - Click **Proxy Hosts** → **Add Proxy Host**
   - Fill in:
     - **Domain Names**: `your-domain.com` (replace with your actual domain)
     - **Scheme**: `http`
     - **Forward Hostname/IP**: `localhost`
     - **Forward Port**: `1996`
     - **Cache Assets**: ✓ Enabled
     - **Block Common Exploits**: ✓ Enabled
   - Save

3. **Enable SSL (HTTPS)**:
   - Go to **SSL** tab on the proxy host
   - **SSL Certificate**: "Request a new SSL Certificate"
   - **Email Address**: `your-email@example.com`
   - **Force SSL**: ✓ Enabled
   - **HTTP/2 Support**: ✓ Enabled
   - Save

4. **Your site is live**:
   - Access via `https://your-domain.com` (with automatic HTTPS!)

## Important Files

- **docker-compose.yml** - Service configuration (port 1996, environment, health checks)
- **Dockerfile** - Multi-stage build for production
- **docker-commands.sh** - Helper commands for managing the container
- **DOCKER_DEPLOYMENT.md** - Full deployment documentation

## Useful Commands

```bash
# View logs in real-time
docker-compose logs -f

# Stop the application
docker-compose down

# Restart the application
docker-compose restart

# Check container status
docker-compose ps

# View resource usage
docker stats server96-landing

# Update application (after git pull)
docker-compose up -d --build
```

## Troubleshooting

### Application not responding on port 1996
```bash
docker-compose ps
# Check if container is running

docker-compose logs
# Check logs for errors
```

### Port 1996 already in use
```bash
lsof -i :1996
# Find what's using the port

# Change port in docker-compose.yml:
# ports:
#   - "2000:4200"  # New port
docker-compose up -d
```

### Nginx Proxy Manager not connecting
- Verify `docker-compose.yml` has `ports: ["1996:4200"]`
- Check `docker-compose logs` for errors
- Ensure firewall allows port 1996

## Performance Notes

- **Container Port**: 4200 (internal, only for Nginx to connect)
- **Host Port**: 1996 (where Nginx Proxy Manager connects)
- **External Port**: 443 (HTTPS via Nginx Proxy Manager)
- **Compression**: Enabled (gzip)
- **CPU Limit**: 2 cores, 1 core reserved
- **Memory Limit**: 1GB, 512MB reserved

## Monitoring

The container includes health checks that run every 30 seconds. You can check health status:

```bash
docker inspect server96-landing --format='{{.State.Health.Status}}'
```

Response should be: `healthy`

## Need Help?

For more detailed information, see:
- [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md) - Full Docker documentation
- [docker-commands.sh](./docker-commands.sh) - Available helper commands

Or check application logs:
```bash
docker-compose logs -f server96-landing
```
