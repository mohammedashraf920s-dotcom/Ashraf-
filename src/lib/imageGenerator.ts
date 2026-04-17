/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Generates a prompt-based image URL using Pollinations.ai
 * Ensures a consistent professional aesthetic: Minimal, High-end, Modern.
 */
export const getGeneratedImage = (title: string, description: string, size: { width: number; height: number } = { width: 1200, height: 800 }) => {
  const basePrompt = "Professional, high-end digital marketing aesthetic, clean minimal composition, modern UI/UX design, luxury tech vibe, soft studio lighting, 4k resolution, cinematic.";
  const projectContext = `${title}: ${description}`;
  
  // Clean up prompt for URL encoding
  const fullPrompt = encodeURIComponent(`${basePrompt} Topic: ${projectContext}`);
  
  // Stable seed based on title to prevent flickering transitions
  const seed = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Using pollinations.ai for reliable text-to-image generation via URL
  return `https://pollinations.ai/p/${fullPrompt}?width=${size.width}&height=${size.height}&seed=${seed}&nologo=true`;
};

/**
 * Specific seeds for consistent placeholders if needed
 */
export const PROJECT_PLACEHOLDERS = {
  ECOMMERCE: 'digital storefront, professional e-commerce dashboard, high-end retail interface',
  SOCIAL_MEDIA: 'social media engagement graphs, vibrant marketing analytics, professional content creator workspace',
  STRATEGY: 'strategic business roadmap, professional marketing planning, clean corporate growth charts',
  VIDEO: 'professional video editing suite, high-end cinema camera, creative studio atmosphere',
};
