
/**
 * parse-topic-output.js
 *
 * Purpose:
 * Safely extracts and parses structured topic JSON from LLM outputs
 * that may arrive as raw strings, markdown-wrapped JSON, or mixed text.
 *
 * This script ensures downstream nodes always receive clean, predictable data.
 */

const rawText = $json.text;

// Locate JSON boundaries
const start = rawText.indexOf('{');
const end = rawText.lastIndexOf('}');

if (start === -1 || end === -1) {
  throw new Error('No JSON structure found in topic generator output.');
}

// Extract and parse JSON
const parsed = JSON.parse(rawText.slice(start, end + 1));

// Expected structure:
// {
//   "topics": [
//     { "title": "", "rationale": "", "hook": "" }
//   ]
// }

return parsed;
