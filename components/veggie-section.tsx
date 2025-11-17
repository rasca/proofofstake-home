import Link from 'next/link'

export function VeggieSection() {
  return (
    <section className="py-24 px-4 flex items-center justify-center">
      <Link 
        href="/veggies"
        className="group relative"
      >
        <div className="text-center space-y-4">
          <p className="text-3xl md:text-5xl font-black text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
            NOT INTO MEAT?
          </p>
          <div className="relative inline-block">
            <span className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
              GO VEGGIE →
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-green-600/50 via-green-500/50 to-green-400/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
          <p className="text-xl text-muted-foreground/80 font-bold">
            (We won&apos;t judge... much 🌱)
          </p>
        </div>
      </Link>
    </section>
  )
}
