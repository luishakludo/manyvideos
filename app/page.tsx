'use client'

import { useEffect, useRef, useState } from 'react'
import { BadgeCheck, Check, ChevronRight, Clock3, Copy, Heart, LockKeyhole, MessageCircle, Pause, Play, RotateCcw, Send, Share2, ShoppingBag, Sparkles, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

const creator = {
  name: 'Geovanna Fox',
  handle: '@geovannafox',
  avatar: '/geovanna-fox-avatar-2.jpg',
  bio: 'Aqui você pode comprar conteúdos únicos meus ou pedir o seu personalizado, do jeitinho que você mais gosta.',
  followers: '28,4 mil',
  videos: 42,
}

const videos = [
  { id: 1, title: 'PACKS', description: 'A coleção completa com 6 vídeos, cada um com uma experiência diferente. Duração: 6 vídeos de 2 a 5 min.', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20PACKS-7CvMKjQOScith390otKKiqISbZNkHL.mp4', duration: '6 vídeos', price: 'R$ 30,00' },
  { id: 2, title: 'Uma Aventura Minecraft', description: 'Tava minerando e acabei me masturbando com a picareta do Steve. Uma jornada bem molhada no universo Minecraft', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20VIDEO%201-zaEnXErQf6KxoZWFDbEBqqMsDrJ9Ap.mp4', duration: '29:42', price: 'R$ 125,00' },
  { id: 3, title: 'Noite do Pijama', description: 'Noite do pijama entre amigas… o que começou inocente terminou com todo mundo se tocando.', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20VIDEO%202-vQto4Jly6tMlkFvHmKSiCcRgcQRC8h.mp4', duration: '19:36', price: 'R$ 85,00' },
  { id: 4, title: 'De Quatro', description: 'Tava sozinha no quarto, me coloquei de quatro e fui me tocando bem devagar… não aguentei e me masturbei até gozar gostoso.', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIDEO%203-wooHMa78IUA9PnegRr8p3vqLrPpQwD.mp4', duration: '17:24', price: 'R$ 45,00' },
  { id: 5, title: 'Pós Balada', description: 'Saí da balada com a calcinha encharcada de tesão. Cheguei no quarto e não resisti… me masturbei bem gostoso.', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20VIDEO%204-AbZCWqsS7qRspdDn8e5fRfPvPUc4Wm.mp4', duration: '21:18', price: 'R$ 100,00' },
  { id: 6, title: 'Sozinha em casa', description: 'Quando meus pais saíram eu fiquei sozinha e decidi testar umas brincadeiras e brinquedos diferentes.', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20VIDEO%205-2vaSy5Od0QDf7LoVccFpSUVbV3b2ri.mp4', duration: '20:45', price: 'R$ 95,00' },
]

const customOptions = [
  { id: 'custom', title: 'Vídeo personalizado', description: 'Um vídeo feito especialmente para você, do seu jeito.', price: 'a partir de R$ 89', time: 'Entrega em até 5 dias', icon: Sparkles },
  { id: 'message', title: 'Mensagem em vídeo', description: 'Uma mensagem curta para celebrar uma data ou momento.', price: 'a partir de R$ 49', time: 'Entrega em até 3 dias', icon: MessageCircle },
  { id: 'special', title: 'Pedido especial', description: 'Tem uma ideia diferente? Vamos conversar sobre ela.', price: 'sob consulta', time: 'Vamos combinar', icon: Send },
]

export default function Page() {
  const [tab, setTab] = useState<'home' | 'custom'>('home')
  const [liked, setLiked] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  function toggleLike(id: number) {
    setLiked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  if (tab === 'home') return <HomeVideos onCustom={() => setTab('custom')} />

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff4f8] text-[#3b2932]">
      <section className="relative mx-auto max-w-5xl px-4 pb-7 pt-4 sm:px-8 sm:pt-8">
        <div className="relative h-40 overflow-hidden rounded-[28px] bg-[#ffc4dc] shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_8px_0_#efaccb] sm:h-52 sm:rounded-[34px]">
          <div className="absolute -right-8 -top-16 size-52 rounded-full bg-[#ff9fc3]/70 blur-2xl" />
          <Heart aria-hidden="true" className="absolute right-8 top-8 size-7 rotate-12 fill-white/70 text-white/70" />
          <Heart aria-hidden="true" className="absolute right-20 top-20 size-4 -rotate-12 fill-[#f28eb8] text-[#f28eb8]" />
          <div className="absolute inset-x-4 bottom-4 flex items-end gap-4 sm:inset-x-8 sm:bottom-5 sm:gap-5">
            <img src={creator.avatar} alt={`Foto de ${creator.name}`} className="relative z-[1] size-20 shrink-0 rounded-full object-cover ring-4 ring-white shadow-[0_5px_0_#eda8c7,0_12px_22px_rgba(198,83,132,0.18)] sm:size-28" />
            <div className="mb-1 min-w-0 flex-1 rounded-[18px] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_4px_0_rgba(205,103,145,0.12)] backdrop-blur-sm sm:mb-2 sm:px-5"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c45c88]">Geovanna Fox</p><p className="mt-1 text-sm font-semibold text-[#542d41] sm:text-base">Um cantinho leve, rosa e só nosso.</p></div>
          </div>
        </div>
        <div className="relative px-2 pt-4 sm:px-6 sm:pt-5">
          <div className="flex flex-wrap items-center gap-2"><h1 className="text-2xl font-bold tracking-tight text-[#432b38] sm:text-3xl">{creator.name}</h1><BadgeCheck className="size-5 fill-[#ff82b5] text-white drop-shadow-[0_2px_0_#d95b91]" aria-label="Perfil verificado" /></div>
          <p className="mt-1 text-sm text-[#a05c7b]">{creator.handle}</p>
          {tab === 'home' && <div className="mt-4 flex gap-6 text-sm text-[#936079]"><span><strong className="font-bold text-[#432b38]">214</strong> fotos</span><span><strong className="font-bold text-[#432b38]">{creator.videos}</strong> vídeos</span><span><strong className="font-bold text-[#432b38]">{creator.followers}</strong> fãs</span></div>}
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#704d5e]">{creator.bio}</p>
        </div>
      </section>

      <nav className="sticky top-0 z-10 flex justify-center px-4 py-4 sm:px-8"><div className="inline-flex rounded-[22px] border border-[#edb4cd] bg-[#fff7fb]/95 p-1.5 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),0_5px_0_#e8a8c5,0_12px_24px_rgba(219,98,134,0.12)] backdrop-blur-md"><button onClick={() => setTab('home')} className={`rounded-[16px] px-6 py-3 text-sm font-bold transition-all active:translate-y-0.5 ${tab === 'home' ? 'bg-[#ff92bd] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.45),0_4px_0_#e27da5]' : 'text-[#b26b83] hover:bg-[#ffe8f0]'}`}>Home</button><button onClick={() => setTab('custom')} className={`rounded-[16px] px-6 py-3 text-sm font-bold transition-all active:translate-y-0.5 ${tab === 'custom' ? 'bg-[#ff92bd] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.45),0_4px_0_#e27da5]' : 'text-[#b26b83] hover:bg-[#ffe8f0]'}`}>Personalizados</button></div></nav>

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-8 sm:pt-8">
        {tab === 'home' ? <section className="mx-auto flex max-w-2xl flex-col gap-6" aria-label="Publicações de Geovanna Fox">{posts.map((post) => <article key={post.id} className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_10px_30px_rgba(32,32,33,0.04)]"><div className="flex items-center justify-between px-4 py-3"><div className="flex items-center gap-3"><img src={creator.avatar} alt="" className="size-9 rounded-full object-cover" /><div><p className="text-sm font-semibold">{creator.name}</p><p className="text-xs text-[#999598]">{post.date}</p></div></div><button aria-label="Mais opções" className="grid size-8 place-items-center rounded-full text-lg text-[#999598] hover:bg-[#f8f7f5]">•••</button></div><div className="relative aspect-[4/5] overflow-hidden bg-[#eeeae8]"><img src={post.image} alt={post.title} loading="lazy" decoding="async" fetchPriority="low" className={`size-full object-cover ${post.locked ? 'brightness-[0.72]' : ''}`} />{post.locked ? <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"><div className="grid size-12 place-items-center rounded-full bg-white/20 backdrop-blur-sm"><LockKeyhole /></div><p className="text-sm font-medium">Conteúdo exclusivo</p><Button className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-[#202021] hover:bg-white/90">Desbloquear · {post.price}</Button></div> : <button aria-label={`Reproduzir ${post.title}`} className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-full bg-white/90 text-[#202021] shadow-lg backdrop-blur-sm transition-transform hover:scale-105"><Play className="ml-0.5 fill-current" /></button>}<span className="absolute bottom-4 right-4 rounded-lg bg-black/55 px-2 py-1 text-xs font-medium text-white">{post.duration}</span></div><div className="px-4 pb-4 pt-3"><p className="text-sm font-medium">{post.title}</p><div className="mt-3 flex items-center gap-1"><button onClick={() => toggleLike(post.id)} aria-label={liked.includes(post.id) ? 'Descurtir' : 'Curtir'} className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs transition-colors hover:bg-[#f8f7f5] ${liked.includes(post.id) ? 'text-[#db6286]' : 'text-[#777276]'}`}><Heart className={liked.includes(post.id) ? 'fill-current' : ''} /> {liked.includes(post.id) ? Number(post.likes.replace('.', '')) + 1 : post.likes}</button><button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-[#777276] hover:bg-[#f8f7f5]"><MessageCircle /> Comentar</button><button aria-label="Compartilhar vídeo" className="ml-auto grid size-8 place-items-center rounded-lg text-[#777276] hover:bg-[#f8f7f5]"><Share2 /></button></div></div></article>)}</section> : <CustomSection selectedOption={selectedOption} setSelectedOption={setSelectedOption} sent={sent} setSent={setSent} />}
      </div>
    </main>
  )
}

function CustomVideoPlayer({ video }: { video: (typeof videos)[number] }) {
  const playerRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [ended, setEnded] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setControlsVisible(false), 900)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true)
        observer.disconnect()
      }
    }, { rootMargin: '300px 0px' })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
  }, [])

  const togglePlayback = () => {
    setShouldLoad(true)
    if (!playerRef.current) return
    if (playerRef.current.paused) {
      if (ended) {
        playerRef.current.currentTime = 0
        setProgress(0)
        setEnded(false)
      }
      void playerRef.current.play()
      setPlaying(true)
      scheduleHide()
    } else {
      playerRef.current.pause()
      setPlaying(false)
      setControlsVisible(true)
    }
  }

  const restartVideo = () => {
    if (!playerRef.current) return
    playerRef.current.currentTime = 0
    setProgress(0)
    setEnded(false)
    void playerRef.current.play()
    setPlaying(true)
    scheduleHide()
  }

  const handlePointerActivity = () => {
    setControlsVisible(true)
    if (playing) scheduleHide()
  }

  return <div ref={containerRef} className="group relative aspect-[4/5] overflow-hidden bg-[#271c23]" onMouseMove={handlePointerActivity} onTouchStart={handlePointerActivity}>
    <video ref={playerRef} className="size-full object-cover" preload="metadata" playsInline src={shouldLoad ? video.url : undefined} onPlay={() => { setPlaying(true); setEnded(false); scheduleHide() }} onPause={() => { setPlaying(false); setControlsVisible(true) }} onEnded={() => { setPlaying(false); setEnded(true); setControlsVisible(true) }} onTimeUpdate={(event) => setProgress((event.currentTarget.currentTime / event.currentTarget.duration) * 100 || 0)} aria-label={`Trailer de ${video.title}`} />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
    {ended && <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/45 px-5 text-center text-white backdrop-blur-[2px]"><p className="text-sm font-semibold">Gostou do trailer?</p><button type="button" onClick={() => { setEnded(false); setProgress(0); }} className="inline-flex items-center gap-2 rounded-full bg-[#ff8fba] px-5 py-3 text-sm font-bold shadow-[inset_0_2px_0_rgba(255,255,255,.45),0_4px_0_#d96694] transition hover:scale-105"><ShoppingBag className="size-4" />Adquirir vídeo</button><button type="button" onClick={restartVideo} className="inline-flex items-center gap-2 text-xs font-semibold text-white/85 hover:text-white"><RotateCcw className="size-3.5" />Assistir novamente</button></div>}
    {!ended && <button type="button" onClick={togglePlayback} aria-label={playing ? `Pausar trailer de ${video.title}` : `Reproduzir trailer de ${video.title}`} className={`absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff8fba] text-white shadow-[inset_0_2px_0_rgba(255,255,255,.5),0_5px_0_#d96694] transition duration-300 hover:scale-105 ${controlsVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>{playing ? <Pause className="size-5 fill-current" /> : <Play className="ml-1 fill-current" />}</button>}
    <div className={`absolute inset-x-3 bottom-3 flex items-center gap-2 transition-opacity duration-300 ${controlsVisible && !ended ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><button type="button" onClick={togglePlayback} className="grid size-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm" aria-label={playing ? 'Pausar' : 'Reproduzir'}>{playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}</button><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/35"><div className="h-full rounded-full bg-[#ff9fc4] transition-[width]" style={{ width: `${progress}%` }} /></div><span className="rounded-md bg-black/50 px-2 py-1 text-[11px] font-bold text-white">{video.duration}</span></div>
  </div>
}

const testimonials = [
  { name: 'Mariana S.', meta: 'Comprou o PACKS', text: 'Comprei o pack e gostei muito. A entrega liberou certinho e o conteúdo vale demais pelo preço.', date: 'há 2 dias', initials: 'MS' },
  { name: 'Lucas R.', meta: 'Comprou Uma Aventura Minecraft', text: 'O vídeo tem bastante conteúdo e a qualidade ficou ótima. Foi exatamente como estava descrito na página.', date: 'há 5 dias', initials: 'LR' },
  { name: 'Bia M.', meta: 'Pedi um personalizado', text: 'Pedi um vídeo personalizado e ficou maravilhoso. Ela entendeu todos os detalhes e ainda entregou antes do prazo.', date: 'há 1 semana', initials: 'BM' },
  { name: 'Rafael C.', meta: 'Pedi um personalizado', text: 'Atendimento super tranquilo, caprichou no pedido e chegou bem antes do que eu esperava. Recomendo muito.', date: 'há 2 semanas', initials: 'RC' },
  { name: 'Camila A.', meta: 'Comprou Clima de Quarto', text: 'Gostei que a descrição era bem clara e a compra foi rápida. O vídeo entregou exatamente o que eu esperava.', date: 'há 3 semanas', initials: 'CA' },
  { name: 'João V.', meta: 'Comprou Entre Lençóis', text: 'Tudo organizado e sem enrolação. O acesso apareceu na hora e a qualidade do conteúdo me surpreendeu.', date: 'há 1 mês', initials: 'JV' },
  { name: 'Nath S.', meta: 'Pedi um personalizado', text: 'O personalizado ficou muito a minha cara. A comunicação foi fácil e ela ainda mandou antes do prazo combinado.', date: 'há 1 mês', initials: 'NS' },
  { name: 'Pedro M.', meta: 'Comprou o PACKS', text: 'Para quem quer conhecer o conteúdo, o pack compensa bastante. Comprei de noite e já consegui acessar.', date: 'há 1 mês', initials: 'PM' },
  ]

function SupportButton({ compact = false }: { compact?: boolean }) {
  return <a href="https://t.me/suportetg" target="_blank" rel="noreferrer" className={compact ? 'mt-4 inline-flex items-center gap-2 rounded-full border border-[#efbfd5] bg-[#fff4f8] px-3 py-2 text-xs font-bold text-[#c94d80] transition hover:bg-[#ffe6f0]' : 'mx-auto mt-10 mb-16 flex w-fit items-center gap-2 rounded-full border border-[#efbfd5] bg-white px-5 py-3 text-sm font-bold text-[#c94d80] shadow-[0_4px_0_#f1d4e1] transition hover:-translate-y-0.5 hover:bg-[#fff0f6]'} aria-label="Falar com o suporte no Telegram">
    <MessageCircle className="size-4" aria-hidden="true" />
    {compact ? 'Suporte' : 'Precisa de ajuda? Fale com o suporte'}
  </a>
}

function Testimonials() {
  return <section className="mt-10 overflow-hidden rounded-[32px] border border-[#edbfd3] bg-[linear-gradient(135deg,#fff_0%,#fff8fb_52%,#fff0f6_100%)] p-5 shadow-[0_10px_0_#f6dce8,0_20px_42px_rgba(211,92,139,0.1)] sm:p-7" aria-labelledby="reviews-title"><div className="flex items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c45c88]">Quem já comprou</p><h2 id="reviews-title" className="mt-1 text-2xl font-bold text-[#432b38]">Avaliações de quem recebeu</h2></div><span className="rounded-full bg-[#fff0f6] px-3 py-1.5 text-xs font-bold text-[#c94d80]">4,9 de 5</span></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{testimonials.map((review, index) => <article key={review.name + review.meta} className="relative flex min-h-[220px] flex-col rounded-[22px] border border-[#f1d5e1] bg-white/85 p-4 shadow-[0_4px_0_#f7e5ed] transition hover:-translate-y-1 hover:shadow-[0_7px_0_#f2cfdf]"><div className="absolute right-4 top-4 rounded-full bg-[#fff1f6] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#c75c87]">verificado</div><div className="flex items-center gap-3"><div className={`grid size-10 place-items-center rounded-full text-xs font-extrabold text-white ${index % 2 ? 'bg-[#d99ab6]' : 'bg-[#ef82ad]'}`}>{review.initials}</div><div className="min-w-0"><p className="font-bold text-[#583646]">{review.name}</p><p className="mt-0.5 truncate pr-16 text-[11px] text-[#b06c84]">{review.meta}</p></div></div><div className="mt-4 flex items-center justify-between border-t border-[#f8e8ef] pt-3"><span className="text-[13px] tracking-wide text-[#e77da7]" aria-label="5 estrelas">★★★★★</span><span className="text-[10px] text-[#bd91a2]">{review.date}</span></div><p className="mt-3 flex-1 text-sm leading-6 text-[#765264]">“{review.text}”</p><div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-[#a87589]"><BadgeCheck className="size-3.5 text-[#ed82ae]" />Compra confirmada</div></article>)}</div><p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[#a06f83]"><MessageCircle className="size-3.5 text-[#df78a2]" aria-hidden="true" />Avaliações de clientes reais após a entrega do conteúdo</p></section>
}

function PixModal({ video, onClose }: { video: (typeof videos)[number]; onClose: () => void }) {
  const customer = { name: 'Marcos Silva', document: '123.456.789-09', email: 'pagamento@geovannafox.com', phone: '(11) 99999-9999' }
  const [pix, setPix] = useState<{ code: string; image?: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const amount = Number(video.price.replace('R$ ', '').replace('.', '').replace(',', '.'))

  const createPix = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/pix/create', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...customer, amount, productId: String(video.id), productName: video.title }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Não foi possível gerar o Pix.')
      setPix(data.pix)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível gerar o Pix.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void createPix()
  }, [])

  const copyPix = async () => {
    if (!pix?.code) return
    await navigator.clipboard.writeText(pix.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return <div className="fixed inset-0 z-50 grid place-items-center bg-[#3b2432]/45 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="pix-title"><div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[28px] border border-[#f0bfd5] bg-[#fffafd] p-5 shadow-[0_18px_0_#e5b1c9,0_30px_60px_rgba(102,40,72,.22)] sm:p-7"><button type="button" onClick={onClose} className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-[#fff0f6] text-[#c94d80]" aria-label="Fechar pagamento"><X className="size-4" /></button><div className="pr-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c45c88]">Pagamento seguro na Home</p><h2 id="pix-title" className="mt-1 text-2xl font-bold text-[#432b38]">Pagar com Pix</h2><p className="mt-1 text-sm text-[#906479]">{video.title} · <strong className="text-[#d35688]">{video.price}</strong></p></div>{pix ? <div className="mt-5 text-center"><div className="mx-auto w-fit rounded-3xl border border-[#f0c8d9] bg-white p-3 shadow-[0_5px_0_#f4dce7]"><img src={pix.image || `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pix.code)}`} alt="QR Code para pagamento Pix" className="size-52 rounded-2xl" /></div><p className="mt-4 text-sm font-bold text-[#583646]">Escaneie o QR Code ou copie o código</p><button type="button" onClick={copyPix} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef83ad] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_0_#d96491]">{copied ? <Check className="size-4" /> : <Copy className="size-4" />}{copied ? 'Código copiado' : 'Copiar código Pix'}</button><p className="mt-3 break-all rounded-xl bg-[#fff0f6] p-3 text-left text-[10px] text-[#9a6a7d]">{pix.code}</p><SupportButton compact /></div> : <div className="mt-5 space-y-3">{loading && <div className="rounded-2xl bg-[#fff0f6] p-4 text-center text-sm font-semibold text-[#c94d80]">Gerando seu Pix seguro...</div>}{error && <p className="rounded-xl bg-[#fff0f0] p-3 text-sm text-[#b44f63]">{error}</p>}</div>}</div></div>
}

function HomeVideos({ onCustom }: { onCustom: () => void }) {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[number] | null>(null)
  return (
    <main className="min-h-screen bg-[#fff4f8] text-[#3b2932]">
      <section className="mx-auto max-w-5xl px-4 pb-5 pt-4 sm:px-8 sm:pt-8">
        <div className="relative h-40 overflow-hidden rounded-[28px] bg-[#ffc4dc] shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_8px_0_#efaccb] sm:h-52 sm:rounded-[34px]">
          <Heart aria-hidden="true" className="absolute right-8 top-8 size-7 rotate-12 fill-white/70 text-white/70" />
          <div className="absolute inset-x-4 bottom-4 flex items-end gap-4 sm:inset-x-8 sm:bottom-5 sm:gap-5">
            <img src={creator.avatar} alt={`Foto de ${creator.name}`} className="relative z-[1] size-20 shrink-0 rounded-full object-cover ring-4 ring-white shadow-[0_5px_0_#eda8c7,0_12px_22px_rgba(198,83,132,0.18)] sm:size-28" />
            <div className="mb-1 min-w-0 flex-1 rounded-[18px] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_4px_0_rgba(205,103,145,0.12)] backdrop-blur-sm sm:mb-2 sm:px-5"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c45c88]">Geovanna Fox</p><p className="mt-1 text-sm font-semibold text-[#542d41] sm:text-base">Um cantinho leve, rosa e só nosso.</p></div>
          </div>
        </div>
        <div className="px-2 pt-4 sm:px-6"><div className="flex items-center gap-2"><h1 className="text-2xl font-bold tracking-tight text-[#432b38] sm:text-3xl">{creator.name}</h1><BadgeCheck className="size-5 fill-[#ff82b5] text-white drop-shadow-[0_2px_0_#d95b91]" aria-label="Perfil verificado" /></div><p className="mt-1 text-sm text-[#a05c7b]">{creator.handle}</p><p className="mt-4 max-w-xl text-sm leading-6 text-[#704d5e]">{creator.bio}</p></div>
      </section>
      <nav className="sticky top-0 z-10 flex justify-center bg-[#fff4f8]/90 px-4 py-3 backdrop-blur-md"><div className="inline-flex rounded-[22px] border border-[#edb4cd] bg-[#fff7fb] p-1.5 shadow-[0_5px_0_#e8a8c5]"><button className="rounded-[16px] bg-[#ff92bd] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_0_#e27da5]">Home</button><button onClick={onCustom} className="rounded-[16px] px-6 py-3 text-sm font-bold text-[#b26b83] hover:bg-[#ffe8f0]">Personalizados</button></div></nav>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-5 sm:px-8" aria-labelledby="catalog-title"><div className="mb-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c45c88]">Conteúdos avulsos</p><h2 id="catalog-title" className="mt-1 text-2xl font-bold text-[#432b38]">Escolha o seu vídeo</h2><p className="mt-1 text-sm text-[#8f6678]">Assista ao trailer e compre apenas o conteúdo que quiser.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{videos.map((video) => <article key={video.id} className="overflow-hidden rounded-[24px] border border-[#f1c5d8] bg-white shadow-[0_8px_24px_rgba(211,92,139,0.1)]"><CustomVideoPlayer video={video} /><div className="p-4"><div className="text-center"><h3 className="text-lg font-bold text-[#583646]">{video.title}</h3><div className="mx-auto mt-3 max-w-[28rem] rounded-2xl border border-[#f4c4d8] bg-[#fff7fb] px-4 py-3 text-left shadow-[inset_0_1px_0_white,0_3px_0_#f9e1eb]"><p className="text-xs font-medium leading-5 text-[#85566b]">{video.description}</p></div><div className="mx-auto mt-3 inline-flex items-center gap-2 rounded-2xl border-2 border-[#f09abd] bg-[#fff0f6] px-4 py-2.5 text-[#c94d80] shadow-[inset_0_2px_0_white,0_3px_0_#f4d5e2]"><Clock3 className="size-4" aria-hidden="true" /><span className="text-sm font-extrabold">{video.id === 1 ? video.duration : `${video.duration} de conteúdo`}</span></div></div><div className="mt-4 flex items-end justify-between gap-3 border-t border-[#f6e2eb] pt-4"><div><p className="text-xs text-[#a77a8d]">Conteúdo completo</p><p className="mt-1 text-xl font-bold text-[#d35688]">{video.price}</p></div><Button type="button" onClick={() => setSelectedVideo(video)} className="rounded-xl bg-[#ef83ad] px-4 font-bold text-white shadow-[0_4px_0_#d96491] hover:bg-[#e875a2]">Comprar</Button></div></div></article>)}</div></section><Testimonials /><SupportButton />{selectedVideo && <PixModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </main>
  )
}

function InvictusModal({ amount, description, onClose }: { amount: number; description: string; onClose: () => void }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pix, setPix] = useState<{ code?: string; image?: string } | null>(null)
  const [copied, setCopied] = useState(false)
  const requestStarted = useRef(false)

  useEffect(() => {
    if (requestStarted.current) return
    requestStarted.current = true
    fetch('/api/invictus/create', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount, description }) }).then(async (response) => { const data = await response.json(); if (!response.ok) throw new Error(data.message); setPix(data.pix) }).catch((cause) => setError(cause instanceof Error ? cause.message : 'Não foi possível gerar o Pix.')).finally(() => setLoading(false))
  }, [amount, description])

  const copyPix = async () => { if (!pix?.code) return; await navigator.clipboard.writeText(pix.code); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <div className="fixed inset-0 z-50 grid place-items-center bg-[#3b2432]/45 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="invictus-title"><div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[28px] border border-[#f0bfd5] bg-[#fffafd] p-5 shadow-[0_18px_0_#e5b1c9,0_30px_60px_rgba(102,40,72,.22)] sm:p-7"><button type="button" onClick={onClose} className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-[#fff0f6] text-[#c94d80]" aria-label="Fechar pagamento"><X className="size-4" /></button><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c45c88]">Pagamento do personalizado</p><h2 id="invictus-title" className="mt-1 text-2xl font-bold text-[#432b38]">Pix do seu pedido</h2><p className="mt-1 text-sm text-[#906479]">{description} · <strong className="text-[#d35688]">R$ {amount.toFixed(2).replace('.', ',')}</strong></p>{loading && <div className="mt-6 rounded-2xl bg-[#fff0f6] p-4 text-center text-sm font-semibold text-[#c94d80]">Gerando seu Pix seguro...</div>}{error && <p className="mt-5 rounded-xl bg-[#fff0f0] p-3 text-sm text-[#b44f63]">{error}</p>}{pix && <div className="mt-5 text-center"><div className="mx-auto w-fit rounded-3xl border border-[#f0c8d9] bg-white p-3 shadow-[0_5px_0_#f4dce7]"><img src={pix.image && (pix.image.startsWith('data:image/') || pix.image.startsWith('https://') || pix.image.startsWith('http://')) ? pix.image : `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pix.code || '')}`} alt="QR Code para pagamento Pix" className="size-52 rounded-2xl" /></div><p className="mt-4 text-sm font-bold text-[#583646]">Escaneie o QR Code ou copie o código</p><button type="button" onClick={copyPix} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef83ad] px-4 py-3 font-bold text-white shadow-[0_4px_0_#d96491]">{copied ? <Check className="size-4" /> : <Copy className="size-4" />}{copied ? 'Código copiado' : 'Copiar código Pix'}</button>{pix.code && <p className="mt-3 break-all rounded-xl bg-[#fff0f6] p-3 text-left text-[10px] text-[#9a6a7d]">{pix.code}</p>}<SupportButton compact /></div>}</div></div>
}

function CustomSection({ selectedOption, setSelectedOption, sent, setSent }: { selectedOption: string | null; setSelectedOption: (value: string | null) => void; sent: boolean; setSent: (value: boolean) => void }) {
  const [request, setRequest] = useState('')
  const [durationOpen, setDurationOpen] = useState(false)
  const [extrasOpen, setExtrasOpen] = useState(false)
  const [packageId, setPackageId] = useState('five')
  const [quality, setQuality] = useState('standard')
  const [delivery, setDelivery] = useState('standard')
  const [extras, setExtras] = useState<string[]>([])
  const [exclusive, setExclusive] = useState(false)
  const [tip, setTip] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [showInvictus, setShowInvictus] = useState(false)

  const packages = [{ id: 'five', label: '5 minutos', price: 89 }, { id: 'ten', label: '10 minutos', price: 159 }, { id: 'fifteen', label: '15 minutos', price: 219 }]
  const extrasList = [{ id: 'name', label: 'Dizer seu nome', description: 'Um toque especial logo no começo', price: 12 }, { id: 'outfit', label: 'Escolha do look', description: 'Você escolhe entre duas opções', price: 18 }, { id: 'dedication', label: 'Mensagem dedicada', description: 'Uma frase pensada só para você', price: 15 }]
  const qualities = [{ id: 'standard', label: 'Padrão', price: 0 }, { id: 'hd', label: 'HD 720p', price: 8 }, { id: 'full', label: 'Full HD 1080p', price: 15 }, { id: '4k', label: '4K', price: 35 }]
  const deliveries = [{ id: 'standard', label: 'Padrão · 2 dias', description: 'Sem custo adicional', price: 0 }, { id: 'priority', label: 'Rápida · 24 horas', description: 'Mais R$ 35,00', price: 35 }, { id: 'express', label: 'Expressa · 12 horas', description: 'Mais R$ 70,00', price: 70 }]
  const base = packages.find((item) => item.id === packageId)?.price ?? 0
  const extrasTotal = extrasList.filter((item) => extras.includes(item.id)).reduce((sum, item) => sum + item.price, 0)
  const qualityTotal = qualities.find((item) => item.id === quality)?.price ?? 0
  const deliveryTotal = deliveries.find((item) => item.id === delivery)?.price ?? 0
  const tipTotal = Math.max(0, Number(tip) || 0)
  const total = base + extrasTotal + qualityTotal + deliveryTotal + (exclusive ? 29 : 0) + tipTotal
  const money = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`
  const toggleExtra = (id: string) => setExtras((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  const row = (label: string, value: number) => <div className="flex items-center justify-between border-b border-[#f4dce7] py-3 text-sm"><span className="text-[#8f6678]">{label}</span><span className="font-semibold text-[#583646]">{money(value)}</span></div>

  return <section className="mx-auto max-w-2xl pb-28" aria-label="Pedido de vídeo personalizado">
    <div className="mb-5 overflow-hidden rounded-[28px] border border-[#f3bfd5] bg-[#fffafd] shadow-[inset_0_2px_0_white,0_7px_0_#efb2cc,0_18px_35px_rgba(211,92,139,0.1)]">
      <div className="bg-[#ff9fc4] px-5 py-4 text-[#6e2948]"><p className="text-xs font-bold uppercase tracking-[0.16em]">Seu pedido, do seu jeitinho</p><h2 className="mt-1 text-2xl font-bold">Peça um vídeo personalizado</h2></div>
      <div className="p-5 sm:p-6"><p className={`text-sm leading-6 text-[#795567] ${expanded ? '' : 'line-clamp-2'}`}>Me conte a ideia, o clima e os detalhes que você gostaria de ver. Eu leio tudo com carinho antes de gravar.</p><button onClick={() => setExpanded(!expanded)} className="mt-2 text-sm font-bold text-[#d35688]">{expanded ? 'Ver menos' : 'Ver mais'}</button>
        <label className="mt-6 block text-base font-bold text-[#583646]" htmlFor="request">O que você imaginou?</label><textarea id="request" value={request} onChange={(event) => setRequest(event.target.value.slice(0, 3000))} placeholder="Conte a história, o tom e qualquer detalhe importante..." className="mt-2 min-h-32 w-full resize-y rounded-[20px] border-2 border-[#f0c9da] bg-[#fffafd] p-4 text-sm outline-none transition focus:border-[#e87ca8] focus:ring-4 focus:ring-[#f8cddd]" aria-describedby="request-help" /><div className="mt-2 flex justify-between text-xs text-[#a77a8d]"><span id="request-help">Respeite os limites e as regras da plataforma.</span><span>{request.length}/3000</span></div>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="rounded-[24px] border border-[#f3c9da] bg-white p-4 shadow-[inset_0_2px_0_white,0_4px_0_#f4dce7,0_10px_24px_rgba(211,92,139,0.08)]"><div className="flex items-center justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cf6b91]">Duração do vídeo</p><h3 className="mt-1 text-lg font-bold text-[#583646]">Escolha quanto tempo você quer</h3><p className="mt-1 text-xs text-[#a06f83]">{packages.find((item) => item.id === packageId)?.label} · {money(base)}</p></div><button type="button" onClick={() => setDurationOpen(!durationOpen)} aria-expanded={durationOpen} className="shrink-0 rounded-2xl border border-white/60 bg-[#f184ae] px-4 py-2.5 text-sm font-bold text-white shadow-[inset_0_2px_0_rgba(255,255,255,.55),0_3px_0_#d96794,0_8px_16px_rgba(211,92,139,.16)] transition hover:-translate-y-0.5 hover:bg-[#ea78a5]">{durationOpen ? 'Fechar' : 'Ver opções'}</button></div>{durationOpen && <div className="mt-4 grid gap-2 sm:grid-cols-3">{packages.map((item) => <button key={item.id} onClick={() => { setPackageId(item.id); setDurationOpen(false) }} className={`rounded-2xl border-2 p-3 text-left transition active:translate-y-0.5 ${packageId === item.id ? 'border-[#ed7eaa] bg-[#fff0f6] shadow-[inset_0_2px_0_white,0_3px_0_#f3c1d6]' : 'border-[#f4e3eb] bg-[#fffafd] hover:border-[#f0b4cd]'}`}><strong className="block text-sm text-[#583646]">{item.label}</strong><span className="mt-1 block text-sm font-bold text-[#d35688]">{money(item.price)}</span></button>)}</div>}</div>
      <div className="rounded-[24px] border border-[#f3c9da] bg-white p-4 shadow-[inset_0_2px_0_white,0_4px_0_#f4dce7,0_10px_24px_rgba(211,92,139,0.07)]"><button type="button" onClick={() => setExtrasOpen(!extrasOpen)} aria-expanded={extrasOpen} className="flex w-full items-center justify-between text-left"><span><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cf6b91]">Personalize</p><h3 className="mt-1 text-lg font-bold text-[#583646]">Adicionais</h3><p className="mt-1 text-xs text-[#a06f83]">{extras.length ? `${extras.length} selecionado${extras.length > 1 ? 's' : ''}` : 'Deixe o vídeo ainda mais especial'}</p></span><span className="rounded-2xl border border-white/80 bg-[#f184ae] px-3.5 py-2 text-sm font-bold text-white shadow-[inset_0_2px_0_rgba(255,255,255,.5),0_3px_0_#d96794,0_7px_14px_rgba(211,92,139,.14)] transition">{extrasOpen ? 'Fechar' : 'Adicionar'}</span></button>{extrasOpen && <div className="mt-4 grid gap-2">{extrasList.map((item) => <label key={item.id} className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-3 transition ${extras.includes(item.id) ? 'border-[#ed7eaa] bg-[#fff0f6]' : 'border-[#f4e3eb] hover:border-[#f0b4cd]'}`}><input type="checkbox" checked={extras.includes(item.id)} onChange={() => toggleExtra(item.id)} className="size-5 accent-[#e9689d]" /><span className="min-w-0 flex-1"><strong className="block text-sm text-[#583646]">{item.label}</strong><small className="text-xs text-[#a77a8d]">{item.description}</small></span><strong className="text-sm text-[#d35688]">+{money(item.price)}</strong></label>)}</div>}</div>
      <div className="rounded-[24px] border border-[#f3c9da] bg-white p-4 shadow-[inset_0_2px_0_white,0_4px_0_#f4dce7,0_10px_24px_rgba(211,92,139,0.07)]"><div className="mb-3"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cf6b91]">Acabamento</p><h3 className="mt-1 text-lg font-bold text-[#583646]">Qualidade do vídeo</h3></div><div className="grid grid-cols-2 gap-2.5">{qualities.map((item) => <label key={item.id} className={`flex cursor-pointer items-center gap-2 rounded-2xl border-2 p-3 text-sm transition ${quality === item.id ? 'border-[#ed7eaa] bg-[#fff0f6] shadow-[inset_0_2px_0_white]' : 'border-[#f4e3eb] hover:border-[#f0b4cd]'}`}><input type="radio" name="quality" checked={quality === item.id} onChange={() => setQuality(item.id)} className="accent-[#e9689d]" /><span className="flex-1 font-semibold text-[#583646]">{item.label}</span><span className={`rounded-full px-2 py-1 text-[11px] font-bold ${item.price ? 'bg-[#ffe4ef] text-[#c94d80]' : 'bg-[#e9faef] text-[#36845a]'}`}>{item.price ? `+${money(item.price)}` : 'Grátis'}</span></label>)}</div></div>
      <div className="rounded-[24px] border border-[#f3c9da] bg-white p-4 shadow-[inset_0_2px_0_white,0_4px_0_#f4dce7,0_10px_24px_rgba(211,92,139,0.07)]"><div className="mb-3"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cf6b91]">Quando você recebe</p><h3 className="mt-1 text-lg font-bold text-[#583646]">Prazo de entrega</h3></div><div className="grid gap-2.5">{deliveries.map((item) => <button key={item.id} onClick={() => setDelivery(item.id)} className={`flex items-center justify-between rounded-2xl border-2 p-3 text-left transition ${delivery === item.id ? 'border-[#ed7eaa] bg-[#fff0f6] shadow-[inset_0_2px_0_white]' : 'border-[#f4e3eb] hover:border-[#f0b4cd]'}`}><span><strong className="block text-sm text-[#583646]">{item.label}</strong><small className="text-xs text-[#a77a8d]">{item.description}</small></span><strong className="text-sm text-[#d35688]">{item.price ? `+${money(item.price)}` : 'Grátis'}</strong></button>)}</div></div>
      <div className="rounded-[24px] border border-[#f3c9da] bg-gradient-to-br from-white to-[#fff5fa] p-4 shadow-[inset_0_2px_0_white,0_5px_0_#f4dce7,0_12px_24px_rgba(211,92,139,.07)]"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cf6b91]">Privacidade</p><h3 className="mt-1 text-lg font-bold text-[#583646]">Exclusividade</h3></div><LockKeyhole className="size-5 text-[#d35688]" aria-hidden="true" /></div><p className="mt-2 text-sm leading-5 text-[#8f6678]">Deixe este vídeo disponível somente para você.</p><label className={`mt-3 flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-3 transition ${exclusive ? 'border-[#ed7eaa] bg-[#fff0f6] shadow-[inset_0_2px_0_white]' : 'border-[#f4e3eb] bg-white hover:border-[#f0b4cd]'}`}><input type="checkbox" checked={exclusive} onChange={(event) => setExclusive(event.target.checked)} className="size-5 accent-[#e9689d]" /><span className="flex-1 text-sm font-semibold">Somente para mim</span><strong className="text-sm text-[#d35688]">+{money(29)}</strong></label></div>
      <div className="rounded-[24px] border border-[#f3c9da] bg-gradient-to-br from-white to-[#fff5fa] p-4 shadow-[inset_0_2px_0_white,0_5px_0_#f4dce7,0_12px_24px_rgba(211,92,139,.07)]"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cf6b91]">Opcional</p><h3 className="mt-1 text-lg font-bold text-[#583646]">Gorjeta</h3></div><Heart className="size-5 fill-[#ff9fc4] text-[#d35688]" aria-hidden="true" /></div><p className="mt-1 text-sm text-[#a06f83]">Um carinho extra junto do pedido.</p><div className="mt-3 flex items-center rounded-2xl border-2 border-[#f0c9da] bg-white px-4 shadow-[inset_0_2px_0_white]"><span className="font-bold text-[#d35688]">R$</span><input type="number" min="0" value={tip} onChange={(event) => setTip(event.target.value)} placeholder="0,00" className="w-full bg-transparent p-3 outline-none" aria-label="Valor da gorjeta" /></div></div>
      <div className="rounded-[26px] border border-[#edafca] bg-[#fff5fa] p-5 shadow-[inset_0_2px_0_white,0_6px_0_#efbfd4]"><h3 className="text-lg font-bold">Resumo do pedido</h3>{row('Pacote', base)}{row('Adicionais', extrasTotal)}{row('Qualidade', qualityTotal)}{row('Entrega', deliveryTotal)}{row('Exclusividade', exclusive ? 29 : 0)}{row('Gorjeta', tipTotal)}<div className="mt-4 flex items-center justify-between border-t-2 border-[#f0c0d5] pt-4"><span className="font-bold">Total demonstrativo</span><strong className="text-2xl text-[#d35688]">{money(total)}</strong></div><Button onClick={() => { setSent(true); setShowInvictus(true) }} className="mt-5 h-12 w-full rounded-2xl bg-[#ef83ad] font-bold text-white shadow-[inset_0_2px_0_rgba(255,255,255,.5),0_5px_0_#d96491] hover:bg-[#e875a2]">{sent ? 'Pedido preparado' : 'Continuar com o pedido'}</Button>{sent && <p className="mt-3 text-center text-xs text-[#9b6179]">Pix gerado para confirmar seu pedido.</p>}{showInvictus && <InvictusModal amount={total} description={packages.find((item) => item.id === packageId)?.label || 'Vídeo personalizado'} onClose={() => setShowInvictus(false)} />}</div>
    </div><Testimonials /><SupportButton />
  </section>
}

