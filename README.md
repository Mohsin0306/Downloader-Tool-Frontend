# Downloader-Tool-Frontend

React + Vite frontend for the Video Downloader tool. Paste video links from YouTube, Instagram, TikTok, Facebook and 1000+ sites to fetch and download.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally (uses backend proxy to localhost:3001):**
   ```bash
   npm run dev
   ```

   For production API (Railway), create `.env.local`:
   ```
   VITE_API_URL=https://downloader-tool-production.up.railway.app/api
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

Production build uses the Railway backend by default (see `.env.production`).
