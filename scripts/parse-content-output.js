
/**
 * parse-content-output.js
 *
 * Purpose:
 * Extracts final LinkedIn caption and image prompt from the
 * content creator LLM output, preventing raw JSON leakage.
 *
 * Output Fields:
 * - caption
 * - image_prompt
 */

const rawText = $json.text;

// Identify JSON content
const start = rawText.indexOf('{');
const end = rawText.lastIndexOf('}');

if (start === -1 || end === -1) {
  throw new Error('No JSON found in content creator output.');
}

const parsed = JSON.parse(rawText.slice(start, end + 1));

return {
  caption: parsed.final_post.text,
  image_prompt: parsed.final_post.image_prompt
};
