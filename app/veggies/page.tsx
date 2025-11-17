import Link from 'next/link'

export default function VeggiesPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-black">
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
            VEGGIE
          </span>
        </h1>
        <h2 className="text-6xl md:text-7xl font-black">
          <span className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 bg-clip-text text-transparent">
            ZONE
          </span>
        </h2>
        
        <p className="text-3xl font-bold text-foreground/80 mt-12">
          Coming Soon...
        </p>
        
        <p className="text-xl text-muted-foreground">
          We&apos;re preparing something special for our plant-based friends 🌱
        </p>
        
        <div className="pt-12">
          <Link 
            href="/"
            className="inline-block text-2xl font-black text-foreground hover:text-primary transition-colors duration-300"
          >
            ← Back to Steaks
          </Link>
        </div>
      </div>
    </main>
  )
}
