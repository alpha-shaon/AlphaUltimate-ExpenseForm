
🚀 Deployment Guide

1. FRONTEND:
   - Upload everything in /public to your GitHub Pages or Render static site.
   - Or upload via FTP to IONOS (htdocs folder).

2. BACKEND:
   - Open Google Apps Script (https://script.google.com/)
   - Paste code from google-apps-script.gs
   - Deploy as Web App (New Deployment > Web App)
     - Execute as: Me
     - Who has access: Anyone

   - Replace POST URL in index.html with your Web App URL.

3. GOOGLE SIGN-IN:
   - Create OAuth 2.0 credentials from Google Cloud Console
   - Add the client ID to the Google Sign-In button in HTML.

4. FILE STORAGE:
   - Form file uploads link to Google Drive folder (ID already set).
