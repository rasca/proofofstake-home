'use client'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <div className="relative z-10 w-full px-4 -mt-32">
        <div 
          className="text-[15vw] md:text-[20vw] lg:text-[22vw] font-black leading-[0.85] text-center tracking-tighter"
          style={{
            backgroundImage: `
              url(/steak-01.jpg), url(/steak-02.jpg), url(/steak-03.jpg), url(/steak-04.jpg), url(/steak-05.jpg),
              url(/steak-06.jpg), url(/steak-07.jpg), url(/steak-08.jpg), url(/steak-09.jpg), url(/steak-10.jpg),
              url(/steak-11.jpg), url(/steak-12.jpg), url(/steak-13.jpg), url(/steak-14.jpg), url(/steak-15.jpg),
              url(/steak-16.jpg), url(/steak-17.jpg), url(/steak-18.jpg), url(/steak-19.jpg), url(/steak-20.jpg),
              url(/steak-21.jpg), url(/steak-22.jpg), url(/steak-23.jpg), url(/steak-24.jpg), url(/steak-25.jpg)
            `,
            backgroundSize: '20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%, 20% 20%',
            backgroundPosition: `
              0% 0%, 20% 0%, 40% 0%, 60% 0%, 80% 0%,
              0% 25%, 20% 25%, 40% 25%, 60% 25%, 80% 25%,
              0% 50%, 20% 50%, 40% 50%, 60% 50%, 80% 50%,
              0% 75%, 20% 75%, 40% 75%, 60% 75%, 80% 75%,
              0% 100%, 20% 100%, 40% 100%, 60% 100%, 80% 100%
            `,
            backgroundRepeat: 'no-repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            filter: 'contrast(1.3) saturate(1.3) brightness(1.1)',
          }}
        >
          <div>PROOF</div>
          <div>OF STEAK</div>
        </div>
        {/* </CHANGE> */}
        <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-4 text-[oklch(0.85_0.08_45)] tracking-widest">
          DEVCONNECT 2025 · BUENOS AIRES
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
