'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

interface SteakSubmission {
  id: number
  image: string
  name: string
  location: string
  votes: number
  submittedBy: string
  timestamp: string
}

// Sample steak data
const steakSubmissions: SteakSubmission[] = [
  {
    id: 1,
    image: '/perfectly-grilled-ribeye-steak-with-grill-marks.jpg',
    name: 'The Ethereal Ribeye',
    location: 'Don Julio, Palermo',
    votes: 847,
    submittedBy: 'vitalik.eth',
    timestamp: '2025-03-15',
  },
  {
    id: 2,
    image: '/argentinian-asado-beef-steak-medium-rare.jpg',
    name: 'Consensus Asado',
    location: 'La Cabrera, Buenos Aires',
    votes: 723,
    submittedBy: 'satoshi.btc',
    timestamp: '2025-03-14',
  },
  {
    id: 3,
    image: '/wagyu-beef-steak-with-chimichurri-sauce.jpg',
    name: 'Proof of Wagyu',
    location: 'El Mirasol, Puerto Madero',
    votes: 689,
    submittedBy: 'nakamoto.base',
    timestamp: '2025-03-16',
  },
  {
    id: 4,
    image: '/thick-cut-tomahawk-steak-on-board.jpg',
    name: 'Tomahawk Validator',
    location: 'Cabaña Las Lilas',
    votes: 654,
    submittedBy: 'buterin.eth',
    timestamp: '2025-03-15',
  },
  {
    id: 5,
    image: '/sirloin-steak-with-herbs-and-butter.jpg',
    name: 'Decentralized Sirloin',
    location: 'La Dorita, Palermo',
    votes: 612,
    submittedBy: 'crypto.punk',
    timestamp: '2025-03-17',
  },
  {
    id: 6,
    image: '/new-york-strip-steak-perfectly-cooked.jpg',
    name: 'Byzantine Strip',
    location: 'Siga La Vaca',
    votes: 589,
    submittedBy: 'hodler.xyz',
    timestamp: '2025-03-14',
  },
  {
    id: 7,
    image: '/filet-mignon-with-red-wine-sauce.jpg',
    name: 'Merkle Mignon',
    location: 'El Ferroviario',
    votes: 567,
    submittedBy: 'defi.eth',
    timestamp: '2025-03-16',
  },
  {
    id: 8,
    image: '/porterhouse-steak-with-garlic.jpg',
    name: 'Porterhouse Protocol',
    location: 'Don Julio, Palermo',
    votes: 534,
    submittedBy: 'web3.dev',
    timestamp: '2025-03-15',
  },
  {
    id: 9,
    image: '/t-bone-steak-with-rosemary.jpg',
    name: 'T-Bone Consensus',
    location: 'La Cabrera Norte',
    votes: 498,
    submittedBy: 'staker.sol',
    timestamp: '2025-03-17',
  },
]

export function SteakGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 md:px-8 max-w-[2000px] mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-6xl md:text-8xl font-black mb-4 steak-shine bg-clip-text text-transparent">
          THE BOARD
        </h2>
        <p className="text-xl text-muted-foreground font-bold tracking-wide">
          RANKED BY COMMUNITY VOTES
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {steakSubmissions.map((steak, index) => (
          <div
            key={steak.id}
            className="relative aspect-square overflow-hidden group cursor-pointer border border-border/50"
            onMouseEnter={() => setHoveredId(steak.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Steak image */}
            <img
              src={steak.image || "/placeholder.svg"}
              alt={steak.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Rank badge */}
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-foreground/20">
                <span className="text-3xl font-black text-primary-foreground">
                  #{index + 1}
                </span>
              </div>
            </div>

            {/* Votes badge */}
            <div className="absolute top-6 right-6 z-20">
              <div className="bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-foreground/20">
                <span className="text-xl font-black text-accent-foreground">
                  🔥 {steak.votes}
                </span>
              </div>
            </div>

            {/* Hover overlay with info */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
                hoveredId === steak.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-black text-foreground mb-3 tracking-tight">
                  {steak.name}
                </h3>
                <div className="space-y-2 text-foreground/80">
                  <p className="text-lg font-bold flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    {steak.location}
                  </p>
                  <p className="text-lg font-bold flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    {steak.submittedBy}
                  </p>
                  <p className="text-lg font-bold flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    {new Date(steak.timestamp).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Always visible gradient at bottom for better UX */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}
