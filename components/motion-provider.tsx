'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Honours the user's `prefers-reduced-motion` setting site-wide.
 *
 * With `reducedMotion="user"`, framer-motion skips transform and opacity
 * animations for those users and renders elements straight to their final
 * state — so no section ever sits blank waiting for an entrance animation.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
