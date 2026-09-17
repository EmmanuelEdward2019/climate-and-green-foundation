/**
 * Where the subject sits inside each photo, as a CSS object-position /
 * background-position value.
 *
 * Most of the Foundation's photography is portrait or square, but the site
 * crops it into wide, short bands (page heroes, card headers, timeline strips).
 * A crop with no focal point lands on the middle of the frame, and the middle
 * of a photo of people is their torso, so the faces get cut off.
 *
 * Every image that has a subject worth keeping in frame gets a focal point
 * here, and the render sites read it through `focus()`. Anything not listed
 * falls back to 'center', which is correct for landscapes and detail shots.
 */
export const IMAGE_FOCUS: Record<string, string> = {
  // Founder and team portraits - heads sit in the top third
  '/images/the-founder.png': 'center 15%',
  '/images/emmanuel-chukwuemeka.png': 'center 20%',
  '/images/fortune-terdoo.png': 'center 20%',
  '/images/igah-helen-ebam.png': 'center 20%',
  '/images/iorna-terhemba-emmanuel.png': 'center 20%',
  '/images/okpokam-frank.jpg': 'center 20%',
  '/images/nnenna-joy-anosike.jpg': 'center 20%',
  '/images/williams-otanwa.jpg': 'center 20%',

  // Group photos - the team stands in the upper half of the frame
  '/images/environment-week-group-1.png': 'center top',
  '/images/environment-week-group-2.png': 'center 25%',

  // Field photography
  '/images/tree-planting-welcome.png': 'center 12%',
}

/** Focal point for an image, defaulting to 'center'. */
export function focus(src?: string): string {
  if (!src) return 'center'
  return IMAGE_FOCUS[src] ?? 'center'
}
