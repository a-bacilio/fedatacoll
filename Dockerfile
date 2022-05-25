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
ARG REACT_APP_BACKEND_API
ENV REACT_APP_BACKEND_API=${REACT_APP_BACKEND_API}
ARG REACT_APP_HOST
ENV REACT_APP_HOST=${REACT_APP_HOST}
# Copy built assets from builder
COPY --from=RCLIENT /usr/src/app/build /usr/share/nginx/html
# Add your nginx.conf
COPY --from=RCLIENT /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD nginx -g "daemon off;"
