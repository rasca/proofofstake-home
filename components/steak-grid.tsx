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
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-white steak-shine" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          LEADERBOARD
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="w-2 h-2 rounded-full bg-primary/60"></div>
          <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide mb-3">
          Ranked by an AI Jury
        </p>

        <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
          Each submission is evaluated by an intelligent contract through a consensus of LLMs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {steakSubmissions.map((steak, index) => (
          <div
            key={steak.id}
            className="relative aspect-square overflow-hidden group cursor-pointer border border-border/30 bg-black transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,140,0,0.3)]"
            onMouseEnter={() => setHoveredId(steak.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Steak image with enhanced transitions */}
            <img
              src={steak.image || "/placeholder.svg"}
              alt={steak.name}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
            />

            {/* Rank badge - minimal elegant */}
            <div className="absolute top-5 left-5 z-20 transition-all duration-400 group-hover:scale-105">
              <div className="relative">
                {/* Soft ambient glow */}
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-lg scale-150 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Badge container */}
                <div className="relative bg-black/80 px-6 py-2.5 rounded-lg border border-white/10 shadow-[0_0_20px_rgba(255,180,0,0.15),0_0_40px_rgba(255,140,0,0.08)] elegant-shimmer">
                  <span className="text-2xl font-black text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    #{index + 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Votes badge - minimal elegant */}
            <div className="absolute top-5 right-5 z-20 transition-all duration-400 group-hover:scale-105 group-hover:-translate-y-0.5">
              <div className="relative">
                {/* Soft ambient glow */}
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-lg scale-150 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Badge container */}
                <div className="relative bg-black/80 px-5 py-2.5 rounded-lg border border-white/10 shadow-[0_0_20px_rgba(255,160,0,0.15),0_0_40px_rgba(255,120,0,0.08)] elegant-shimmer">
                  <span className="text-2xl font-black text-white flex items-center gap-2.5 tracking-wide">
                    <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(255,100,0,0.8)]">🥩</span>
                    <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{steak.votes}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Hover overlay with refined gradients */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/20 transition-all duration-500 ${
                hoveredId === steak.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500">
                {/* Decorative top border */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <h3 className="text-4xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {steak.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-2xl mt-0.5 drop-shadow-glow transition-transform group-hover/item:scale-110">📍</span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-0.5">Location</p>
                      <p className="text-base font-bold text-white/90">{steak.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-2xl mt-0.5 drop-shadow-glow transition-transform group-hover/item:scale-110">👤</span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-0.5">Submitted by</p>
                      <p className="text-base font-bold text-primary">{steak.submittedBy}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-2xl mt-0.5 drop-shadow-glow transition-transform group-hover/item:scale-110">📅</span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-0.5">Date</p>
                      <p className="text-base font-bold text-white/90">
                        {new Date(steak.timestamp).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle gradient vignette always visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Corner accent (top-left glow) */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-16 flex justify-center">
        <button className="group relative px-12 py-5 bg-black/80 border border-white/10 rounded-lg transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,140,0,0.3)] hover:scale-105 elegant-shimmer">
          <div className="absolute inset-0 bg-primary/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative text-xl font-black text-white tracking-wider">
            LOAD MORE
          </span>
        </button>
      </div>

      {/* Upload Your Steak CTA */}
      <div className="mt-32 max-w-4xl mx-auto text-center">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="w-3 h-3 rounded-full bg-primary/60"></div>
          <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        <h3 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white steak-shine" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          GOT A PRIME CUT?
        </h3>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Submit your best steak photo and let the AI jury decide if it deserves a spot on the leaderboard
        </p>

        <button className="group relative px-16 py-6 bg-primary/10 border-2 border-primary/30 rounded-lg transition-all duration-500 hover:border-primary hover:shadow-[0_0_50px_rgba(255,140,0,0.4)] hover:scale-105 elegant-shimmer">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative text-2xl md:text-3xl font-black text-white tracking-wider flex items-center gap-4">
            <span className="text-3xl">🥩</span>
            UPLOAD YOUR STEAK
          </span>
        </button>
      </div>
    </section>
  )
}
