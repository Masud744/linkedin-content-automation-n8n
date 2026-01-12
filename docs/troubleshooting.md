
# Troubleshooting Guide

This document covers common issues and their solutions when running the LinkedIn Content Automation workflow.

---

## Issue: JSON Appears in LinkedIn Caption

**Cause**
- AI output returned as a string instead of structured fields

**Solution**
- Ensure Code parsing nodes are enabled
- Verify final LinkedIn node uses the cleaned caption field

---

## Issue: Image Not Attached

**Cause**
- Binary field missing or incorrectly named

**Solution**
- Confirm HTTP Request node outputs binary as `data`
- Verify LinkedIn node Input Binary Field is set to `data`

---

## Issue: Only Hashtags Posted

**Cause**
- Caption field overwritten during merge

**Solution**
- Ensure caption and hashtags use different field names
- Combine fields explicitly before LinkedIn node

---

## Issue: LinkedIn Person Option Not Available

**Cause**
- LinkedIn API restrictions

**Solution**
- Use Organization/Page posting
- Personal profile automation is not supported reliably

---

## Best Practices

- Execute nodes sequentially during debugging
- Avoid using multiple `text` fields
- Keep prompts and logic separated
- Always validate JSON outputs

Following these practices ensures a stable and maintainable automation system.
