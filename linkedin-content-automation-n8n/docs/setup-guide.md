# Setup Guide

This document provides a complete, step-by-step guide to setting up the **LinkedIn Content Automation using n8n** project.
Follow each section carefully to ensure a stable and production-ready deployment.

---

## Prerequisites

Before starting, ensure you have the following:

- n8n (self-hosted or cloud)
- LinkedIn Page (Organization) admin access
- OpenRouter API key
- ClipDrop API key
- Basic understanding of n8n workflows and nodes

---

## Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Masud744/linkedin-content-automation-n8n.git
cd linkedin-content-automation-n8n
```

---

## Step 2: Import Workflow into n8n

1. Open your n8n dashboard
2. Navigate to **Workflows**
3. Click **Import from File**
4. Upload the workflow JSON located in:

```
/workflows/linkedin-content-automation.json
```

---

## Step 3: Configure Credentials

### OpenRouter

- Create an OpenRouter account
- Generate an API key
- Add credentials in n8n:
  - Type: HTTP / OpenAI compatible
  - Base URL: https://openrouter.ai/api/v1

### ClipDrop

- Create a ClipDrop account
- Generate an API key
- Add credentials in the HTTP Request node header:
  - x-api-key: YOUR_CLIPDROP_API_KEY

### LinkedIn

- Authenticate LinkedIn credentials
- Ensure posting access to an Organization/Page
- Personal profile posting is not recommended

---

## Step 4: Environment Variables (Optional)

If self-hosting n8n, add:

```
OPENROUTER_API_KEY=your_key_here
CLIPDROP_API_KEY=your_key_here
```

---

## Step 5: Final Verification

- Execute nodes one-by-one
- Confirm text, image, and hashtags are generated correctly
- Run the LinkedIn node last

Your automation is now ready for production use.
