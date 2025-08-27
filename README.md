# Portfolio Website

Dumping ground for bunch of projects and experiences, credits to Kevin Powell for the initial website idea.

# Deploy Instructions
1. Run `npm install` from the root to install the required packages 
2. Run `npm run start` to start the development server
3. Run `npm run build` to build a production deployment

# Cloudflare Workers Setup

## Prerequisites
1. Install dependencies: `npm install`
2. Verify Wrangler: `npx wrangler --version`
3. Login to Cloudflare: `npx wrangler login`

## Development
1. Run `npm start` to start the React development server
2. Run `npx wrangler dev --local` to start the Cloudflare Worker locally
3. Visit `http://localhost:8787` to see your worker in action

## Deployment
### Option 1: Using the deployment script
```bash
./deploy.sh
```

### Option 2: Manual deployment
1. Build the project: `npm run build`
2. Deploy to Cloudflare Workers: `npx wrangler deploy`

### Option 3: Using npm scripts
- Default: `npm run worker:deploy`
- Staging: `npm run worker:deploy:staging`
- Production: `npm run worker:deploy:prod`

## Configuration
- `wrangler.toml` - Cloudflare Workers configuration
- `src/worker.js` - Worker script that serves static files
- `deploy.sh` - Automated deployment script

## Notes
- This setup uses Wrangler v3 for compatibility with Node.js v18
- The worker serves your React build files from the `./build` directory
- Make sure to run `npx wrangler login` before your first deployment 