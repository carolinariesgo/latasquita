import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const IgIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75"/>
        <stop offset="25%" stopColor="#fa7e1e"/>
        <stop offset="50%" stopColor="#d62976"/>
        <stop offset="75%" stopColor="#962fbf"/>
        <stop offset="100%" stopColor="#4f5bd5"/>
      </linearGradient>
    </defs>
    <path fill="url(#igGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const TileDivider = ({ label }: { label: string }) => (
  <div className="flex items-center w-full px-3 md:px-16 py-2 bg-black">
    <div className="flex-1 overflow-hidden" style={{ height: '40px' }}>
      <img src="/tiles.webp" alt="" aria-hidden="true" className="w-full h-full object-cover object-left" style={{ filter: 'invert(1) opacity(0.5)' }} />
    </div>
    <span className="px-3 md:px-6 font-['Roboto_Slab'] text-xs md:text-sm tracking-widest uppercase text-[#d4a820] whitespace-nowrap shrink-0">
      {label}
    </span>
    <div className="flex-1 overflow-hidden" style={{ height: '40px' }}>
      <img src="/tiles.webp" alt="" aria-hidden="true" className="w-full h-full object-cover object-right" style={{ filter: 'invert(1) opacity(0.5)' }} />
    </div>
  </div>
)


const locations = [
  {
    slug: 'manuel-becerra',
    name: 'Manuel Becerra',
    subtitle: "La Tasquita de Manuel Becerra",
    address: 'Pl. de Manuel Becerra, 3, Local 2 — Madrid',
    maps: 'https://maps.google.com/?q=La+Tasquita+de+Manuel+Becerra+Madrid',
    phone: 'tel:+34655157337',
    whatsapp: 'https://wa.me/34655157337?text=Hola%2C%20quiero%20reservar%20en%20La%20Tasquita%20de%20Manuel%20Becerra',
    instagram: 'https://www.instagram.com/latasquitademanuelbecerra_/',
    reserveUrl: 'https://latasquitalt.com/reservar-manuel-becerra/',
  },
  {
    slug: 'salamanca',
    name: 'Salamanca',
    subtitle: "La Tasquita de Salamanca",
    address: 'Calle Padilla, 61 — Madrid',
    maps: 'https://maps.google.com/?q=La+Tasquita+de+Salamanca+Calle+Padilla+61+Madrid',
    phone: 'tel:+34625011348',
    whatsapp: 'https://wa.me/34625011348?text=Hola%2C%20quiero%20reservar%20en%20La%20Tasquita%20de%20Salamanca',
    instagram: 'https://www.instagram.com/latasquitadesalamanca_/',
    reserveUrl: 'https://latasquitalt.com/reservar/',
  },
  {
    slug: 'diego-de-leon',
    name: 'Diego de León',
    subtitle: "La Tasquita de Diego de León",
    address: 'Calle Diego de León, 42 — Madrid',
    maps: 'https://maps.google.com/?q=La+Tasquita+Diego+de+Leon+42+Madrid',
    phone: 'tel:+34639520687',
    whatsapp: 'https://wa.me/34639520687?text=Hola%2C%20quiero%20reservar%20en%20La%20Tasquita%20de%20Diego%20De%20Le%C3%B3n',
    instagram: 'https://www.instagram.com/latasquitadediegodeleon_/',
    reserveUrl: 'https://latasquitalt.com/reservar-diego-de-leon/',
  },
]



const reviews = [
  {
    name: 'Moni Ucin',
    date: 'Julio 2, 2025',
    text: 'Pedro was a very friendly waiter; he kept our sunglasses safe for us after we left them there. Excellent service and great attention.',
    stars: 5,
  },
  {
    name: 'Manuel Condor',
    date: 'Julio 5, 2025',
    text: 'Gabriel served us; that Romanian man is very attentive. The service was excellent, always making sure everything was perfect. It\'s a pleasure to be there. I would definitely return just for the service we received. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Cinthya Madeleine Haro Espinoza',
    date: 'Junio 25, 2025',
    text: 'Very good place, delicious food, thanks to the Romanian waiter who was very attentive and provided excellent service.',
    stars: 5,
  },
  {
    name: 'Ana García',
    date: 'Agosto 10, 2025',
    text: 'Un sitio increíble. La comida estaba buenísima y el ambiente es muy acogedor. Repetiré sin duda. ¡Muy recomendable!',
    stars: 5,
  },
]

const values = [
  {
    title: 'Atención',
    body: 'Nuestro equipo es altamente profesional, cercano y ofrece un servicio impecable. Harán que te sientas como en casa.',
  },
  {
    title: 'Producto',
    body: 'Selección personal de las mejores materias primas. Producto fresco, de proximidad y de temporada.',
  },
  {
    title: 'Ambiente',
    body: 'Tu bar de siempre, al que vas con tus amigos, tu familia, tu pareja... El rincón más castizo de Madrid, con el mejor sabor de España.',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [reserveOpen, setReserveOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="hidden md:flex h-20 items-center">
            <img src="/logo.webp" alt="La Tasquita" className="h-full w-auto object-contain" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('locales-panels')} className="nav-link">Locales</button>
            <button onClick={() => scrollTo('historia')} className="nav-link">Historia</button>
            <button onClick={() => scrollTo('valores')} className="nav-link">Valores</button>
            <button onClick={() => scrollTo('reviews')} className="nav-link">Clientes</button>
            <button onClick={() => scrollTo('eventos')} className="nav-link">Eventos</button>

            {/* Reserve dropdown */}
            <div className="relative">
              <button
                onClick={() => setReserveOpen(!reserveOpen)}
                className="btn-gold flex items-center gap-2"
              >
                Reservar
                <svg className={`w-3 h-3 transition-transform ${reserveOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {reserveOpen && (
                <div className="absolute right-0 top-full mt-1 bg-[#d4a820] min-w-[180px] z-50">
                  {locations.map(loc => (
                    <a
                      key={loc.name}
                      href={loc.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setReserveOpen(false)}
                      className="block px-5 py-3 font-['Inter'] text-xs tracking-widest uppercase text-black hover:bg-[#dba93a] transition-colors border-t border-black/10 first:border-t-0"
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
            <button onClick={() => scrollTo('locales-panels')} className="nav-link text-left">Locales</button>
            <button onClick={() => scrollTo('historia')} className="nav-link text-left">Historia</button>
            <button onClick={() => scrollTo('valores')} className="nav-link text-left">Nuestros Valores</button>
            <button onClick={() => scrollTo('reviews')} className="nav-link text-left">Nuestros Clientes</button>
            <button onClick={() => scrollTo('eventos')} className="nav-link text-left">Grupos y Eventos</button>
            <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
              <p className="font-['Inter'] text-xs tracking-widest uppercase text-white/40 mb-1">Reservar en</p>
              {locations.map(loc => (
                <a
                  key={loc.name}
                  href={loc.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold inline-block text-center"
                >
                  {loc.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-start pt-24 md:justify-center md:pt-16 pb-0 px-4">

        {/* Logo centrado y grande */}
        <div className="flex flex-col items-center mb-3 md:mb-16">
          <div className="h-px w-12 bg-[#d4a820]/50 mb-3 md:mb-8" />
          <img src="/logo.webp" alt="La Tasquita" className="w-52 sm:w-64 md:w-[480px] object-contain" />
          <div className="h-px w-12 bg-[#d4a820]/50 mt-3 md:mt-8 mb-2 md:mb-6" />
          <p className="font-['Roboto_Slab'] text-[10px] md:text-sm text-white/40 tracking-[0.3em] uppercase">
            Tu segundo hogar en Madrid
          </p>
        </div>

        {/* 3 location panels */}
        <div id="locales-panels" className="flex flex-col md:flex-row w-full max-w-6xl border border-white/10 scroll-mt-28">
          {locations.map((loc, i) => (
            <Link
              key={loc.name}
              to={`/${loc.slug}`}
              className={`relative flex-1 flex flex-col items-center justify-center text-center py-4 px-6 md:py-16 md:px-10 group cursor-pointer min-w-0
                ${i < locations.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
            >
              <div className="absolute inset-0 bg-[#d4a820]/0 group-hover:bg-[#d4a820]/8 transition-all duration-500" />
              <div className="relative z-10 flex flex-col items-center gap-1 md:gap-3 transition-transform duration-300 group-hover:-translate-y-1 w-full">
                <h2 className="font-['Rufina'] text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                  {loc.name}
                </h2>
                <p className="font-['Roboto_Slab'] text-[10px] md:text-xs text-white/35 tracking-wide">
                  {loc.address.split('—')[0].trim()}
                </p>
                <div className="mt-2 md:mt-4 flex flex-col items-center gap-1.5 w-full max-w-[200px]" onClick={e => e.preventDefault()}>
                  <a href={loc.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold text-center block w-full text-xs py-2" onClick={e => e.stopPropagation()}>
                    Reservar mesa
                  </a>
                  <a href={loc.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 font-['Roboto_Slab'] text-[10px] tracking-widest uppercase text-white/40 hover:text-[#d4a820] transition-colors py-1" onClick={e => e.stopPropagation()}>
                    <IgIcon className="w-3 h-3" />
                    Instagram
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>

      <TileDivider label="Historia" />

      {/* ── HISTORIA ── */}
      <section id="historia" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="section-title mb-8 text-center">
            Tres amigos, un sueño
          </h2>

          <div className="space-y-6 font-['Roboto_Slab'] text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              Las Tasquitas nace del proyecto personal de tres amigos — los hermanos Juan y Alfonso, junto a su amigo Salva — que han convertido un sueño en realidad.
            </p>
            <p>
              En Las Tasquitas combinamos lo mejor de la cocina de siempre con una energía joven, creando espacios donde cada plato se convierte en una excusa para compartir, brindar y disfrutar. Aquí no solo se come bien, se vive bien.
            </p>
            <p className="text-white/90 font-medium">
              Queremos que te sientas como en casa, porque Las Tasquitas no son solo lugares para comer o beber: son lugares para celebrar la vida, las amistades y los pequeños grandes momentos.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="font-['Rufina'] text-2xl text-[#d4a820] italic">
              "Tu segundo hogar en Madrid"
            </p>
          </div>
        </div>
      </section>

      <TileDivider label="Nuestros Valores" />

      {/* ── VALORES ── */}
      <section id="valores" className="py-12 md:py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">

          <h2 className="section-title mb-16 text-center">Lo que nos define</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-4 md:p-12 ${i < values.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <div className="h-px w-8 bg-[#d4a820] mb-6" />
                <h3 className="font-['Rufina'] text-2xl font-bold text-white mb-4">{v.title}</h3>
                <p className="font-['Roboto_Slab'] text-sm text-white/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TileDivider label="Nuestros Clientes" />

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">

          <h2 className="section-title mb-4 text-center">Lo que dicen de nosotros</h2>

          {/* Google rating summary */}
          <div className="flex justify-center mb-12 px-4">
            <div className="border border-white/10 px-5 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none sm:w-auto">
              <div>
                <p className="font-['Roboto_Slab'] text-sm text-white/50 mb-1">Manuel Becerra's Little Tavern</p>
                <div className="flex items-center gap-2">
                  <span className="font-['Rufina'] text-3xl font-bold text-white">4.7</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-[#d4a820]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-['Roboto_Slab'] text-xs text-white/30 mt-1">1.453 reseñas · powered by Google</p>
              </div>
              <a
                href="https://www.google.com/maps/search/La+Tasquita+de+Manuel+Becerra+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Déjanos una reseña
              </a>
            </div>
          </div>

          {/* Review cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="border border-white/10 p-6 flex flex-col gap-4 hover:border-[#d4a820]/40 transition-colors duration-300">
                {/* Stars + Google icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#d4a820]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <svg className="w-5 h-5 opacity-40" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Review text */}
                <p className="font-['Roboto_Slab'] text-sm text-white/65 leading-relaxed italic flex-1">
                  "{r.text}"
                </p>

                {/* Reviewer */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-['Roboto_Slab'] text-sm font-medium text-white">{r.name}</p>
                  <p className="font-['Roboto_Slab'] text-xs text-white/30 mt-0.5">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TileDivider label="Grupos y Eventos" />

      {/* ── EVENTOS ── */}
      <section id="eventos" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="section-title mb-6 text-center">Celebra con nosotros</h2>

          <p className="font-['Roboto_Slab'] text-base text-white/60 leading-relaxed text-center max-w-2xl mx-auto mb-6">
            Ofrecemos espacios únicos, versátiles y con personalidad, ideales para convertir cualquier ocasión en una experiencia memorable. Perfectos para celebraciones privadas, comidas y cenas de empresa o cualquier gran momento.
          </p>

          <p className="font-['Roboto_Slab'] text-base text-white/60 leading-relaxed text-center max-w-2xl mx-auto mb-14">
            Detrás de cada evento hay un equipo especializado que hace que todo funcione, con experiencia, criterio y atención al detalle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mb-10">
            {locations.map((loc) => (
              <div key={loc.name} className="border border-white/10 p-4 md:p-8 text-center flex flex-col items-center gap-2 md:gap-4 hover:border-[#d4a820]/50 transition-colors duration-300">
                <div className="h-px w-8 bg-[#d4a820] mx-auto" />
                <h3 className="font-['Rufina'] text-xl font-bold text-white">{loc.name}</h3>
                <a
                  href={loc.phone}
                  className="font-['Roboto_Slab'] text-lg font-bold text-white hover:text-[#d4a820] transition-colors tracking-wide"
                >
                  {loc.phone.replace('tel:+34', '+34 ').replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4')}
                </a>
                <a
                  href={loc.whatsapp.replace('quiero%20reservar', 'quiero%20informaci%C3%B3n%20sobre%20eventos')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center whitespace-nowrap"
                  style={{ padding: '0.2rem 0.5rem', fontSize: '0.6rem' }}
                >
                  Consultar disponibilidad
                </a>
              </div>
            ))}
          </div>

          <p className="font-['Roboto_Slab'] text-sm text-white/40 text-center">
            Nuestro equipo de Eventos se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.webp" alt="La Tasquita" className="w-36 object-contain mb-2" />
            <p className="font-['Roboto_Slab'] text-xs text-white/40 italic">Tu segundo hogar en Madrid</p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="font-['Inter'] text-xs tracking-widest uppercase text-white/60 mb-1">Locales</p>
            {locations.map(loc => (
              <a
                key={loc.name}
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Roboto_Slab'] text-sm text-white/80 hover:text-white transition-colors"
              >
                {loc.address}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-['Inter'] text-xs tracking-widest uppercase text-white/60">Síguenos</p>
            <div className="flex gap-4 items-end">
              {locations.map(loc => (
                <a
                  key={loc.slug}
                  href={loc.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 hover:text-[#d4a820] transition-all duration-200 text-white/60 group"
                  aria-label={`Instagram ${loc.name}`}
                >
                  <IgIcon className="w-6 h-6" />
                  <span className="font-['Roboto_Slab'] text-[9px] tracking-wide uppercase text-white/60 group-hover:text-[#d4a820] transition-colors">{loc.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center">
          <p className="font-['Inter'] text-xs text-white/20 tracking-widest">
            © {new Date().getFullYear()} La Tasquita · Madrid
          </p>
        </div>
      </footer>

    </div>
  )
}
