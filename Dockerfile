# ---------- Stage 1: Base (all dependencies + source) ----------
    FROM oven/bun:latest AS base
    WORKDIR /usr/src/app
    
    # Copy manifests and install ALL deps (dev+prod)
    COPY package.json bun.lock ./
    RUN bun install --frozen-lockfile
    
    # Copy application source
    COPY . .
    
    # Define default target
    ARG TARGET=dev
    
    # ---------- Stage 2: Development ----------
    FROM base AS dev
    # Enable dev mode
    ENV NODE_ENV=development
    # Expose Vite port
    EXPOSE 3000
    # Run Vite dev server with HMR on 0.0.0.0
    CMD ["bun", "run", "dev", "--host", "0.0.0.0", "--port", "3000"]
    
    # ---------- Stage 3: Build (production bundle) ----------
    FROM base AS build
    # Ensure production optimizations
    ENV NODE_ENV=production
    # Build static assets into dist/
    RUN bun test
    RUN bun run build -- --base ./
    
    # ---------- Stage 4: Production (static server) ----------
    FROM oven/bun:latest AS prod
    WORKDIR /usr/src/app
    
    # Install only production dependencies
    COPY package.json bun.lock ./
    RUN bun install --frozen-lockfile --production
    
    # Copy built assets
    COPY --from=build /usr/src/app/dist ./dist
    
    # Use unprivileged user
    USER bun
    # Serve on port 3000
    EXPOSE 3000
    # Serve static files (SPA fallback) using Bun’s server
    ENTRYPOINT ["bunx", "serve", "-l", "3000", "dist"]

    