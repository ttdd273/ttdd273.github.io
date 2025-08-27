#!/bin/bash

# Cloudflare Workers Deployment Script
echo "🚀 Starting Cloudflare Workers deployment..."

# Build the React app
echo "📦 Building React app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to Cloudflare Workers
echo "🌐 Deploying to Cloudflare Workers..."
npx wrangler deploy

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

echo "✅ Deployment completed successfully!"
echo "🎉 Your site is now live on Cloudflare Workers!"
