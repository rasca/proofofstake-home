export function Footer() {
  return (
    <footer className="bg-black border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
          <a
            href="https://genlayer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105 transform"
          >
            Powered by{' '}
            <span className="steak-shine bg-clip-text text-transparent">
              GenLayer
            </span>
          </a>
          
          <span className="hidden md:inline text-muted-foreground">·</span>
          
          <a
            href="https://proofoftravel.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105 transform"
          >
            Powered by{' '}
            <span className="steak-shine bg-clip-text text-transparent">
              ProofOfTravel.xyz
            </span>
          </a>
          
          <span className="hidden md:inline text-muted-foreground">·</span>
          
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105 transform"
          >
            𝕏
          </a>
          
          <span className="hidden md:inline text-muted-foreground">·</span>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105 transform"
          >
            Github
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Built with 🥩 at Devconnect 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
