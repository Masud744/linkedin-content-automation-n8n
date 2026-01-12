# LinkedIn Content Automation using n8n

An end-to-end, production-ready LinkedIn content automation system built with **n8n**.
This project automatically generates content topics, writes high-quality LinkedIn posts, creates AI images, optimizes hashtags, and publishes posts to a LinkedIn Organization/Page — fully hands-free.

---

## Overview

This repository demonstrates a real-world AI automation pipeline designed for creators, solopreneurs, and agencies who want to scale LinkedIn content without manual effort.

The system focuses on:

- Reliability over prompt fragility
- Clean data handling between AI steps
- Modular, maintainable automation design

---

## Key Features

- Automated content topic research
- AI-generated LinkedIn captions with strong hooks and CTAs
- AI image generation for each post
- SEO-optimized hashtag generation
- Automatic posting to LinkedIn Pages
- Robust JSON parsing and data validation
- Fully orchestrated using n8n

---

## Demo Video

A full walkthrough of the automation is available here:

▶️ https://youtu.be/cZzRnzhILRs

---

## Workflow Architecture

```text
Schedule Trigger
   ↓
Content Topic Generator (AI)
   ↓
JSON Parser (JavaScript)
   ↓
Content Creator (AI)
   ↓
Content Parser (JavaScript)
   ↓
Hashtag Generator (AI)
   ↓
Image Generator (ClipDrop API)
   ↓
Merge & Validate Data
   ↓
LinkedIn Publisher (Organization/Page)
```

---

## Tech Stack

- n8n (workflow automation)
- OpenRouter (LLM routing)
- ClipDrop API (text-to-image generation)
- JavaScript (data parsing and validation)
- LinkedIn API (organization posting)

---

## Repository Structure

```text
.
├── workflows/     # n8n workflow exports
├── prompts/       # All AI prompts used in the system
├── scripts/       # JavaScript logic for parsing and merging data
├── docs/          # Setup guides and explanations
├── examples/      # Sample outputs and LinkedIn posts
├── assets/        # Images and diagrams
├── README.md
└── .gitignore
```

---

## Setup Summary

1. Import the workflow JSON into n8n
2. Configure API credentials:
   - OpenRouter
   - ClipDrop
   - LinkedIn Page
3. Review prompt files and scripts
4. Execute the workflow

Detailed instructions are available in the `docs/` folder.

---

## Important Notes

- Personal LinkedIn profile posting is intentionally avoided due to API restrictions
- Posting via LinkedIn Organization/Page is stable and recommended
- This project is designed as a production system, not a demo workflow

---

## Author

**Shahriar Alom Masud**  
B.Sc. Engg. in IoT & Robotics Engineering  
University of Frontier Technology, Bangladesh  
📧 Email: shahriar0002@std.uftb.ac.bd  
🔗 LinkedIn: https://www.linkedin.com/in/shahriar-alom-masud

---

## License

This project is licensed under the MIT License.
