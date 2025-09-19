# Dockerfile
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the static site
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Create startup script for injecting environment variables
RUN echo '#!/bin/sh' > /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "window.__RACKFLOW_ENV = Object.assign({}, window.__RACKFLOW_ENV || {}, {" > /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  PUBLIC_HOME_URL: \"${PUBLIC_HOME_URL:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  POSTHOG_KEY: \"${POSTHOG_KEY:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  POSTHOG_HOST: \"${POSTHOG_HOST:-}\"" >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "});" >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    chmod +x /docker-entrypoint.d/10-inject-env.sh

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]