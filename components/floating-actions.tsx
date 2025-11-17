'use client'

import { Button } from '@/components/ui/button'

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
)

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
)

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <Button
        size="lg"
        className="w-16 h-16 rounded-full shadow-2xl steak-shine border-2 border-foreground/20 hover:scale-110 transition-transform duration-300"
        aria-label="Upload steak"
      >
        <UploadIcon />
      </Button>
      <Button
        size="lg"
        variant="secondary"
        className="w-16 h-16 rounded-full shadow-2xl border-2 border-foreground/20 hover:scale-110 transition-transform duration-300"
        aria-label="Help"
      >
        <HelpIcon />
      </Button>
    </div>
  )
}
