import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from './LanguageContext'
import { translations } from './translations'

const IgIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="igGradLoc" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75"/>
        <stop offset="25%" stopColor="#fa7e1e"/>
        <stop offset="50%" stopColor="#d62976"/>
        <stop offset="75%" stopColor="#962fbf"/>
        <stop offset="100%" stopColor="#4f5bd5"/>
      </linearGradient>
    </defs>
    <path fill="url(#igGradLoc)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const locationData = {
  'manuel-becerra': {
    name: 'Manuel Becerra',
    subtitle: 'La Tasquita de Manuel Becerra',
    address: 'Pl. de Manuel Becerra, 3, Local 2',
    city: 'Madrid',
    phone: 'tel:+34655157337',
    phoneDisplay: '+34 655 15 73 37',
    whatsapp: 'https://wa.me/34655157337?text=Hola%2C%20quiero%20reservar%20en%20La%20Tasquita%20de%20Manuel%20Becerra',
    instagram: 'https://www.instagram.com/latasquitademanuelbecerra_/',
    menuUrl: '#',
    maps: 'https://maps.google.com/?q=La+Tasquita+de+Manuel+Becerra+Madrid',
    description_es: 'Nuestro local de Manuel Becerra es el rincón original de Las Tasquitas. Un espacio con alma castiza, barra de toda la vida y una carta que mezcla los mejores productos de temporada con los clásicos de siempre.',
    description_en: 'Our Manuel Becerra venue is the original home of Las Tasquitas. A space with true Madrid soul, a classic bar and a menu that blends the finest seasonal produce with timeless classics.',
    features_es: ['Terraza exterior', 'Barra clásica', 'Reservas para grupos'],
    features_en: ['Outdoor terrace', 'Classic bar', 'Group bookings'],
  },
  'salamanca': {
    name: 'Salamanca',
    subtitle: 'La Tasquita de Salamanca',
    address: 'Calle Padilla, 61',
    city: 'Madrid',
    phone: 'tel:+34625011348',
    phoneDisplay: '+34 625 01 13 48',
    whatsapp: 'https://wa.me/34625011348?text=Hola%2C%20quiero%20reservar%20en%20La%20Tasquita%20de%20Salamanca',
    instagram: 'https://www.instagram.com/latasquitadesalamanca_/',
    menuUrl: '#',
    maps: 'https://maps.google.com/?q=La+Tasquita+de+Salamanca+Calle+Padilla+61+Madrid',
    description_es: 'En el corazón del Barrio de Salamanca, nuestra tasca combina la elegancia del barrio con el espíritu auténtico y desenfadado de Las Tasquitas. El sitio perfecto para un vermut, una comida o una cena con amigos.',
    description_en: 'In the heart of the Salamanca neighbourhood, our tavern blends the elegance of the area with the authentic, laid-back spirit of Las Tasquitas. The perfect spot for a vermouth, lunch or dinner with friends.',
    features_es: ['Barrio de Salamanca', 'Ambiente íntimo', 'Vinos seleccionados', 'Carta de tapas'],
    features_en: ['Salamanca district', 'Intimate atmosphere', 'Curated wine list', 'Tapas menu'],
  },
  'diego-de-leon': {
    name: 'Diego de León',
    subtitle: 'La Tasquita de Diego de León',
    address: 'Calle Diego de León, 42',
    city: 'Madrid',
    phone: 'tel:+34639520687',
    phoneDisplay: '+34 639 52 06 87',
    whatsapp: 'https://wa.me/34639520687?text=Hola%2C%20quiero%20reservar%20en%20La%20Tasquita%20de%20Diego%20De%20Le%C3%B3n',
    instagram: 'https://www.instagram.com/latasquitadediegodeleon_/',
    menuUrl: '#',
    maps: 'https://maps.google.com/?q=La+Tasquita+Diego+de+Leon+42+Madrid',
    description_es: 'El más nuevo de nuestros locales, con el mismo espíritu de siempre. Diego de León trae la esencia de Las Tasquitas a uno de los barrios más vibrantes de Madrid, con una propuesta gastronómica que enamora desde el primer bocado.',
    description_en: 'Our newest venue, with the same spirit as always. Diego de León brings the essence of Las Tasquitas to one of Madrid\'s most vibrant neighbourhoods, with food that wins you over from the very first bite.',
    features_es: ['Local moderno', 'Cocina de mercado', 'Eventos privados', 'Amplia carta de vinos'],
    features_en: ['Modern space', 'Market cuisine', 'Private events', 'Extensive wine list'],
  },
}

interface Props {
  slug: 'manuel-becerra' | 'salamanca' | 'diego-de-leon'
}

export default function LocationPage({ slug }: Props) {
  const loc = locationData[slug]
  const { lang, toggleLang } = useLang()
  const tr = translations[lang]

  const description = lang === 'es' ? loc.description_es : loc.description_en
  const features = lang === 'es' ? loc.features_es : loc.features_en

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${loc.subtitle} — La Tasquita`
  }, [slug])

  return (
    <div className="bg-black text-white min-h-screen">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="h-16 flex items-center">
            <img src="/logo.webp" alt="La Tasquita" className="h-full w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 border border-white/20 hover:border-white/50 transition-colors px-2.5 py-1.5"
              aria-label="Toggle language"
            >
              <span className="text-sm leading-none">{lang === 'es' ? '🇪🇸' : '🇬🇧'}</span>
              <span className="font-['Roboto_Slab'] text-[10px] tracking-widest uppercase text-white/70">
                {lang === 'es' ? 'ES' : 'EN'}
              </span>
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 font-['Roboto_Slab'] text-sm tracking-widest uppercase text-white hover:text-[#d4a820] transition-colors border border-white/30 hover:border-[#d4a820] px-4 py-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tr.location.back}
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="pt-28 pb-20 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Roboto_Slab'] text-sm tracking-[0.3em] uppercase text-[#d4a820] mb-4">
            Las Tasquitas · Madrid
          </p>
          <h1 className="font-['Rufina'] text-5xl md:text-7xl font-bold text-white mb-4">
            {loc.name}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-white/20" />
            <div className="flex gap-1">
              {[0,1,2,3].map(i => <span key={i} className="w-1 h-1 rounded-full bg-white/30" />)}
            </div>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <p className="font-['Roboto_Slab'] text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={loc.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
              {tr.location.reserve}
            </a>
            <a href={loc.menuUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              {tr.location.menu}
            </a>
            <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="btn-outline">
              {tr.location.directions}
            </a>
          </div>
        </div>
      </div>

      {/* Tile divider */}
      <div
        style={{
          height: '48px',
          backgroundImage: 'url(/tiles.webp)',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          filter: 'invert(1) opacity(0.4)',
        }}
      />

      {/* ── INFO ── */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact */}
          <div>
            <div className="h-px w-8 bg-[#d4a820] mb-6" />
            <h2 className="font-['Rufina'] text-2xl font-bold text-white mb-6">{tr.location.contact}</h2>
            <div className="space-y-4 font-['Roboto_Slab'] text-sm text-white/60">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#d4a820] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a820] transition-colors underline underline-offset-2 decoration-white/20">
                  {loc.address}, {loc.city}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#d4a820] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={loc.phone} className="hover:text-[#d4a820] transition-colors">
                  {loc.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href={loc.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a820] transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <IgIcon className="w-4 h-4 shrink-0" />
                <a href={loc.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a820] transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="h-px w-8 bg-[#d4a820] mb-6" />
            <h2 className="font-['Rufina'] text-2xl font-bold text-white mb-6">{tr.location.venue}</h2>
            <div className="grid grid-cols-2 gap-3">
              {features.map(f => (
                <div key={f} className="border border-white/10 px-4 py-3 font-['Roboto_Slab'] text-sm text-white/60">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── OTHER LOCATIONS ── */}
      <div className="py-16 px-6 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Roboto_Slab'] text-sm tracking-widest uppercase text-white/30 text-center mb-8">
            {tr.location.alsoVisit}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(locationData)
              .filter(([s]) => s !== slug)
              .map(([s, l]) => (
                <Link
                  key={s}
                  to={`/${s}`}
                  className="border border-white/10 p-6 flex items-center justify-between group hover:border-[#d4a820]/50 transition-colors"
                >
                  <div>
                    <h3 className="font-['Rufina'] text-xl font-bold text-white group-hover:text-[#d4a820] transition-colors">{l.name}</h3>
                    <p className="font-['Roboto_Slab'] text-xs text-white/40 mt-1">{l.address}</p>
                  </div>
                  <svg className="w-5 h-5 text-white/20 group-hover:text-[#d4a820] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
          </div>
        </div>
      </div>

    </div>
  )
}
