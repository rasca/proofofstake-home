import Link from 'next/link'
import { NextCategoryLink } from '@/lib/category-data'

interface CategoryLinkProps {
  nextCategory: NextCategoryLink
}

export function CategoryLink({ nextCategory }: CategoryLinkProps) {
  return (
    <section className="py-24 px-4 flex items-center justify-center">
      <Link
        href={nextCategory.href}
        className="group relative"
      >
        <div className="text-center space-y-4">
          <p className="text-3xl md:text-5xl font-black text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
            {nextCategory.preText}
          </p>
          <div className="relative inline-block">
            <span className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${nextCategory.gradientFrom} ${nextCategory.gradientVia} ${nextCategory.gradientTo} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
              {nextCategory.mainText}
            </span>
            <div className={`absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r ${nextCategory.gradientFrom}/50 ${nextCategory.gradientVia}/50 ${nextCategory.gradientTo}/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          </div>
          <p className="text-xl text-muted-foreground/80 font-bold">
            {nextCategory.subText}
          </p>
        </div>
      </Link>
    </section>
  )
}
