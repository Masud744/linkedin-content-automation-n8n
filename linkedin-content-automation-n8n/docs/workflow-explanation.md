# Workflow Explanation

This document explains the internal logic and data flow of the LinkedIn Content Automation system.

---

## High-Level Overview

The workflow is designed as a modular AI pipeline that transforms an abstract content idea into a fully published LinkedIn post.

---

## Workflow Stages

### 1. Content Topic Generator

- Uses an LLM to generate structured topic ideas
- Outputs title, rationale, and hook

### 2. JSON Parsing (Code Node)

- Converts string-based AI output into valid JSON
- Ensures reliable downstream data access

### 3. Content Creator

- Generates a complete LinkedIn caption
- Produces a detailed AI image prompt

### 4. Content Parsing (Code Node)

- Extracts caption and image prompt into clean fields
- Prevents JSON leakage into the final post

### 5. Hashtag Generator

- Produces SEO-optimized LinkedIn hashtags
- Uses post content as semantic input

### 6. Image Generation

- Calls ClipDrop Text-to-Image API
- Returns binary image data

### 7. Data Merge

- Combines caption, hashtags, and image
- Ensures single-item output

### 8. LinkedIn Publisher

- Publishes post to an Organization/Page
- Supports image + caption posts

---

## Design Principles

- Separation of concerns
- Explicit data shaping
- Fail-safe JSON handling
- Production reliability over prompt dependency

This architecture is scalable and can be extended for scheduling, analytics, or multi-platform posting.
