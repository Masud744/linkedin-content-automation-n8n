
/**
 * merge-post-data.js
 *
 * Purpose:
 * Combines caption text and hashtag output into a single,
 * LinkedIn-ready post body while preserving image binary data.
 *
 * This ensures the LinkedIn node always receives a clean,
 * human-readable caption.
 */

const caption = $json.caption;
const hashtags = $json.text || $json.hashtags || "";

if (!caption) {
  throw new Error('Caption is missing during merge stage.');
}

return {
  final_caption: `${caption}\n\n${hashtags}`
};
