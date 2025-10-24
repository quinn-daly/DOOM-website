# Syracuse DOOM Ultimate Frisbee Website

## Overview
This is a static HTML website for Syracuse DOOM Ultimate Frisbee team. The site features:
- Team news and updates
- Photo gallery
- Events calendar
- Salt City Classic tournament information
- Team history archives
- Merchandise shop

## Project Architecture
- **Type**: Static HTML/CSS/JavaScript website
- **Structure**:
  - `index.html` - Home page with news
  - `gallery.html` - Photo gallery
  - `events.html` - Events calendar
  - `saltcity.html` - Salt City Classic info
  - `archives.html` - Team history
  - `css/styles.css` - Main stylesheet
  - `Js/main.js` - JavaScript file
  - `images/` - Image assets

## Development Setup
- **Server**: Python HTTP server on port 5000
- **Host**: 0.0.0.0 (required for Replit proxy)

## Recent Changes
- 2025-10-24: Initial Replit environment setup
  - Installed Python 3.11
  - Configured static file server
  - Set up workflow for development
  - Configured deployment settings
  - Redesigned footer with clean two-column layout
  - Added social media integration section with:
    - Spotify podcast player (400px square)
    - X (Twitter) timeline feed (400px square)
    - Instagram post embed (400px square)
    - All three embeds display horizontally
  - Fixed header navigation across all pages:
    - Made header span full width of screen
    - Increased max-width to 1600px to accommodate all links
    - Added scroll fade effect - nav links fade out when scrolling down
    - Logo shrinks on scroll, maintaining visibility
    - Smooth transitions for all scroll effects
    - Applied consistent header to all pages (index, gallery, events, saltcity, archives)
    - Added responsive breakpoints for different screen sizes
    - All navigation links properly spaced and visible including Shop

## Deployment
- Configured for Replit autoscale deployment
- Serves static files via Python HTTP server
