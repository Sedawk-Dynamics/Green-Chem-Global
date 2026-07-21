import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Section {
  heading: string
  body?: string[]
  list?: string[]
}

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: Section[]
}) {
  return (
    <article className="py-14 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-2">{title}</h1>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">{updated}</p>

        <p className="text-base text-muted-foreground leading-relaxed mb-10">{intro}</p>

        <div className="flex flex-col gap-9">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-serif font-bold text-xl text-foreground mb-3">{s.heading}</h2>
              {s.body?.map((p) => (
                <p key={p} className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="flex flex-col gap-2.5 mt-1">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--brand-green-deep)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
