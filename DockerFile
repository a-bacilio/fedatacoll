# Dockerfile for React client

# Build react client
FROM node:14-slim AS RCLIENT

# Working directory be app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build


# Bundle static assets with nginx
FROM nginx:alpine AS productionClient
# Copy built assets from builder
COPY --from=RCLIENT /usr/src/app/build /usr/share/nginx/html
# Add your nginx.conf
COPY --from=RCLIENT /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD nginx -g "daemon off;"
