# Dockerfile
FROM node:24-alpine AS build

WORKDIR /app

ARG PUBLIC_APP_ENV
ARG PUBLIC_HOME_URL
ARG PUBLIC_BLOG_URL
ARG PUBLIC_DOCS_URL
ARG PUBLIC_WEB_APP_URL

COPY package*.json ./
RUN npm ci

COPY . .

ENV PUBLIC_APP_ENV=$PUBLIC_APP_ENV
ENV PUBLIC_HOME_URL=$PUBLIC_HOME_URL
ENV PUBLIC_BLOG_URL=$PUBLIC_BLOG_URL
ENV PUBLIC_DOCS_URL=$PUBLIC_DOCS_URL
ENV PUBLIC_WEB_APP_URL=$PUBLIC_WEB_APP_URL

ARG GIT_SHA=dev
ARG PLATFORM_VERSION=unknown
ENV GIT_SHA=$GIT_SHA
ENV PLATFORM_VERSION=$PLATFORM_VERSION
RUN node scripts/generate-version.js

RUN npm run build

FROM nginx:stable-alpine-slim

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN echo '#!/bin/sh' > /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "window.__RACKFLOW_ENV = Object.assign({}, window.__RACKFLOW_ENV || {}, {" > /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  PUBLIC_APP_ENV: \"${PUBLIC_APP_ENV:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  PUBLIC_HOME_URL: \"${PUBLIC_HOME_URL:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  PUBLIC_BLOG_URL: \"${PUBLIC_BLOG_URL:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  PUBLIC_DOCS_URL: \"${PUBLIC_DOCS_URL:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  PUBLIC_WEB_APP_URL: \"${PUBLIC_WEB_APP_URL:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  POSTHOG_KEY: \"${POSTHOG_KEY:-}\"," >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "  POSTHOG_HOST: \"${POSTHOG_HOST:-}\"" >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    echo 'echo "});" >> /usr/share/nginx/html/env.js' >> /docker-entrypoint.d/10-inject-env.sh && \
    chmod +x /docker-entrypoint.d/10-inject-env.sh

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
