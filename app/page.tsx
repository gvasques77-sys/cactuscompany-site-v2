import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";

export default function Home() {
  return (
    <div className="bg-[#0a1612] text-[#e8f0eb] min-h-screen">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="hero-bg relative min-h-[calc(100svh-65px)] overflow-hidden border-b border-[#7fd8a8]/12 flex items-center"
        data-animate="hero"
      >
        <div className="hero-dots" />
        <svg
          className="hero-horizon"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 210 Q 300 158 600 200 T 1200 178" stroke="rgba(127,216,168,0.20)" strokeWidth="1.5" />
          <path d="M0 250 Q 320 212 640 244 T 1200 232" stroke="rgba(127,216,168,0.12)" strokeWidth="1.5" />
          <path d="M0 292 Q 280 262 600 286 T 1200 280" stroke="rgba(127,216,168,0.07)" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 container-shell grid min-h-[calc(100svh-65px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl" data-animate="hero-item">
            <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8]">
              CACTUS COMPANY • PROPOSTA DE PRODUTO
            </p>
            <h1 className="mt-6 font-[var(--font-display)] text-5xl font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-7xl">
              Presença que a faculdade pode auditar.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#9fb8ab]">
              <strong className="text-[#e8f0eb] font-semibold">Frequência Internato</strong> é o app que registra a presença do interno de Medicina por geolocalização, horário e validação — com um painel de controle em tempo real para a coordenação.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/produtos"
                data-magnetic
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#7fd8a8] px-6 text-sm font-bold text-[#0a1612] transition hover:bg-[#9be7bf] shadow-[0_4px_20px_rgba(127,216,168,0.3)]"
              >
                Conhecer o protótipo &rarr;
              </Link>
              <Link
                href="#marca"
                data-magnetic
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                A marca Cactus
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-2.5">
              {["geolocalização", "check-in validado", "relatórios", "3 perfis de acesso"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#7fd8a8]/18 bg-[#132a23]/30 px-3.5 py-1.5 text-xs font-[var(--font-mono)] text-[#7fd8a8] uppercase tracking-[0.06em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* IPHONE MOCKUP RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end" data-animate="hero-media">
            <Link href="/produtos" className="group block relative focus:outline-none focus:ring-2 focus:ring-[#7fd8a8] rounded-[48px]">
              <div className="absolute -inset-1 rounded-[50px] bg-gradient-to-tr from-[#1f6e54] to-[#7fd8a8] opacity-35 blur-xl group-hover:opacity-60 transition duration-500" />
              
              <div className="iphone-case">
                <div className="iphone-notch" />
                <div className="iphone-status-bar dark-text">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    {/* Signal */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-1.2 0-2.4.2-3.6.7L12 18l3.6-14.3c-1.2-.5-2.4-.7-3.6-.7zm0 17c.6 0 1-.4 1-1v-1H11v1c0 .6.4 1 1 1z" /></svg>
                    {/* Wifi */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a7 7 0 0 0-7-7c1-.7 2.2-1 3.5-1A6.5 6.5 0 0 0 12 15zm0-4.5A4.5 4.5 0 0 1 12 15a4.5 4.5 0 0 1-4.5-4.5A4.5 4.5 0 0 1 12 6c1.2 0 2.3.4 3.2 1.2a4.5 4.5 0 0 1 .3 3.3z" /></svg>
                    {/* Battery */}
                    <svg className="w-4.5 h-3.5 fill-current" viewBox="0 0 24 24"><rect x="2" y="5" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="20" y="8" width="2" height="4" rx="1" /><rect x="4" y="7" width="12" height="6" rx="1" /></svg>
                  </div>
                </div>

                <div className="iphone-screen bg-[#f4f7f4]">
                  {/* Mock Screen Content */}
                  <div className="flex-1 flex flex-col p-5 pt-3">
                    <header className="flex justify-between items-center mt-2">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase">Quarta • 28 mai</span>
                        <h2 className="text-xl font-bold text-[#11201b] font-[var(--font-display)]">Olá, Marina</h2>
                      </div>
                      <div className="size-8 rounded-full bg-[#11201b] text-white flex items-center justify-center font-bold text-xs">
                        MA
                      </div>
                    </header>

                    {/* Frequency Card */}
                    <div className="bg-white rounded-2xl p-4 mt-4 shadow-sm border border-[#e2e9e4] flex items-center gap-4">
                      {/* Circle progress mockup */}
                      <div className="relative size-12 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="20" fill="transparent" stroke="#e2e9e4" strokeWidth="4" />
                          <circle cx="24" cy="24" r="20" fill="transparent" stroke="#1f6e54" strokeWidth="4" strokeDasharray="125.6" strokeDashoffset="7.5" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[10px] font-bold text-[#11201b]">94%</span>
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <h3 className="text-xs font-bold text-[#11201b] leading-tight">frequência</h3>
                        <p className="text-[9px] text-[#6f897d] mt-0.5">2 faltas • 1 justificada no mês</p>
                      </div>
                      <span className="bg-[#c8efd9] text-[#1f6e54] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shrink-0">
                        Em dia
                      </span>
                    </div>

                    {/* Activities Scale */}
                    <div className="mt-5 text-left flex-1 flex flex-col min-h-0">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-xs font-bold text-[#11201b]">Hoje • 3 atividades</h4>
                        <span className="text-[10px] text-[#1f6e54] font-bold">Ver escala</span>
                      </div>

                      {/* Scaled Activity Card */}
                      <div className="bg-white rounded-2xl p-4 border border-[#e2e9e4] shadow-sm flex flex-col gap-3 relative overflow-hidden pl-10">
                        {/* Vertical Timeline Marker */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#e2e9e4]" />
                        <div className="absolute left-3 top-5 size-2.5 rounded-full border-2 border-white bg-[#1f6e54] z-10" />

                        <div className="text-[9px] font-bold text-[#1f6e54] font-[var(--font-mono)] uppercase">07:00</div>
                        <div className="text-left">
                          <h5 className="text-xs font-bold text-[#11201b] font-[var(--font-display)]">Plantão • Clínica Médica</h5>
                          <p className="text-[10px] text-[#6f897d] mt-0.5">Hospital Universitário • Ala B</p>
                        </div>
                        <div className="w-full bg-[#1f6e54] text-white py-2 px-3 rounded-xl font-bold text-center text-xs shadow-sm mt-1 transition">
                          Fazer check-in
                        </div>
                      </div>

                      {/* Next Activity Card preview */}
                      <div className="bg-white/60 rounded-2xl p-4 border border-[#e2e9e4]/60 shadow-sm flex flex-col gap-1 relative overflow-hidden pl-10 mt-3 opacity-60">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#e2e9e4]" />
                        <div className="absolute left-3.5 top-5 size-1.5 rounded-full bg-[#9fb8ab] z-10" />

                        <div className="text-[9px] font-bold text-[#6f897d] font-[var(--font-mono)] uppercase">13:00</div>
                        <div className="text-left">
                          <h5 className="text-xs font-semibold text-[#11201b] font-[var(--font-display)]">Ambulatório • Cardiologia</h5>
                          <p className="text-[9px] text-[#6f897d] mt-0.5">Aguardando • check-in às 13:00</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Mockup */}
                    <div className="border-t border-[#e2e9e4] pt-2 mt-auto grid grid-cols-4 text-center">
                      <div className="flex flex-col items-center gap-0.5 text-[#1f6e54]">
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        <span className="text-[8px] font-bold">Início</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-[#6f897d]">
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        <span className="text-[8px] font-medium">Escala</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-[#6f897d]">
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        <span className="text-[8px] font-medium">Check-in</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-[#6f897d]">
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        <span className="text-[8px] font-medium">Perfil</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="iphone-home-indicator" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO SECTION */}
      <section id="marca" className="py-20 border-b border-white/5 bg-[#0a1612] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#132a23]/20 rounded-l-[400px] pointer-events-none blur-3xl" />
        
        <div className="container-shell relative z-10">
          <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-4">
            POSICIONAMENTO
          </p>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start mb-16">
            <div>
              <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl text-white">
                Software sob medida para operações que não podem falhar.
              </h2>
            </div>
            <div>
              <p className="text-base sm:text-lg leading-8 text-[#9fb8ab]">
                A Cactus Company desenvolve soluções digitais, automação e sistemas para instituições, negócios e operações que precisam de controle, dados e eficiência — onde a margem de erro é mínima.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Resiliência",
                text: "Como o cacto: sistemas que funcionam de forma confiável mesmo em ambientes difíceis e de alta exigência.",
              },
              {
                num: "02",
                title: "Precisão",
                text: "Dados corretos, no momento certo. Validação por local e horário, sem brechas para fraude.",
              },
              {
                num: "03",
                title: "Inteligência",
                text: "Problemas complexos resolvidos de forma simples — automação que reduz trabalho manual.",
              },
              {
                num: "04",
                title: "Crescimento",
                text: "Produtos que escalam com a instituição, de uma turma a toda a rede de hospitais-escola.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="quiet-border bg-[#0f1f1a]/60 rounded-2xl p-6 flex flex-col gap-6 hover:border-[#7fd8a8]/35 transition-all duration-300 group"
                data-animate="card"
              >
                <span className="text-xs font-[var(--font-mono)] text-[#7fd8a8] block tracking-widest">{card.num}</span>
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-3 group-hover:text-[#7fd8a8] transition-colors">{card.title}</h3>
                  <p className="text-sm leading-6 text-[#9fb8ab]">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTIDADE SECTION */}
      <section id="logo" className="py-20 border-b border-white/5 bg-[#071310] relative overflow-hidden">
        <div className="container-shell">
          <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-4">
            IDENTIDADE • 3 CONCEITOS
          </p>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl text-white mb-6">
            Logo Cactus Company
          </h2>
          <p className="text-base sm:text-lg leading-7 text-[#9fb8ab] max-w-2xl mb-12">
            Três direções para a marca-mãe. Todas funcionam em positivo/negativo, em ícone de app e em escala reduzida.
          </p>

          {/* 3 Logo Concepts Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {/* Concept 1 - Saguaro */}
            <div className="quiet-border bg-[#0f1f1a]/40 rounded-2xl p-6 flex flex-col gap-6 hover:border-[#7fd8a8]/30 transition duration-300">
              <div className="h-32 bg-[#0a1612] rounded-xl flex items-center justify-center border border-white/5">
                <div className="flex items-center gap-3 text-white">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#1f6e54]">
                    <CactusMark size={28} body="#c8efd9" showBase={false} />
                  </span>
                  <div className="flex flex-col leading-none text-left">
                    <span className="font-[var(--font-display)] text-lg font-bold tracking-[-0.01em]">Cactus</span>
                    <span className="text-[10px] font-[var(--font-mono)] uppercase tracking-[0.28em] text-[#7fd8a8]/70 mt-1">company</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-white font-[var(--font-display)] mb-2">01 • Saguaro</h3>
                <p className="text-sm leading-6 text-[#9fb8ab]">O cacto literal, geométrico. Crescimento vertical, braços abertos = capacidade. O conceito pedido.</p>
              </div>
            </div>

            {/* Concept 2 - Sinal */}
            <div className="quiet-border bg-[#0f1f1a]/40 rounded-2xl p-6 flex flex-col gap-6 hover:border-[#7fd8a8]/30 transition duration-300">
              <div className="h-32 bg-[#0a1612] rounded-xl flex items-center justify-center border border-white/5">
                <div className="flex items-center gap-3 text-white">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#1f6e54] text-[#c8efd9]">
                    {/* Signal bars cactus SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 17v-4" strokeLinecap="round" />
                      <circle cx="6" cy="10" r="1" fill="currentColor" />
                      <path d="M12 19V8" strokeLinecap="round" />
                      <circle cx="12" cy="5" r="1" fill="currentColor" />
                      <path d="M18 17v-6" strokeLinecap="round" />
                      <circle cx="18" cy="8" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="flex flex-col leading-none text-left">
                    <span className="font-[var(--font-display)] text-lg font-bold tracking-[-0.01em]">Cactus</span>
                    <span className="text-[10px] font-[var(--font-mono)] uppercase tracking-[0.28em] text-[#7fd8a8]/70 mt-1">company</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-white font-[var(--font-display)] mb-2">02 • Sinal</h3>
                <p className="text-sm leading-6 text-[#9fb8ab]">Cacto abstraído em barras de dados + nós de sinal. Tecnologia, métrica, conexão. Vivo e moderno.</p>
              </div>
            </div>

            {/* Concept 3 - Monograma */}
            <div className="quiet-border bg-[#0f1f1a]/40 rounded-2xl p-6 flex flex-col gap-6 hover:border-[#7fd8a8]/30 transition duration-300">
              <div className="h-32 bg-[#0a1612] rounded-xl flex items-center justify-center border border-white/5">
                <div className="flex items-center gap-3 text-white">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#1f6e54] text-[#c8efd9]">
                    {/* Monograma C cactus SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M17 7.5a6 6 0 1 0 0 9" strokeLinecap="round" />
                      <path d="M11 12h4" strokeLinecap="round" />
                      <path d="M15 12V8" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div className="flex flex-col leading-none text-left">
                    <span className="font-[var(--font-display)] text-lg font-bold tracking-[-0.01em]">Cactus</span>
                    <span className="text-[10px] font-[var(--font-mono)] uppercase tracking-[0.28em] text-[#7fd8a8]/70 mt-1">company</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-white font-[var(--font-display)] mb-2">03 • Monograma</h3>
                <p className="text-sm leading-6 text-[#9fb8ab]">Um &quot;C&quot; com um braço de cacto. Compacto, ideal para ícone de app e favicon. Institucional.</p>
              </div>
            </div>
          </div>

          <p className="text-xs font-[var(--font-mono)] text-[#6f897d] text-center border-t border-white/5 pt-6 max-w-lg mx-auto">
            Recomendação: <span className="text-[#7fd8a8]">Conceito 01 (Saguaro)</span> como marca principal • <span className="text-[#7fd8a8]">Conceito 03</span> como ícone de aplicativo.
          </p>

          {/* Three Treatments Grid */}
          <div className="mt-20">
            <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-4">
              SAGUARO • 3 APLICAÇÕES
            </p>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white mb-4">
              A marca escolhida, em três tratamentos
            </h3>
            <p className="text-base text-[#9fb8ab] mb-8 max-w-xl">
              Mesma forma, contextos diferentes — para que o Saguaro funcione do ícone de app à papelaria institucional.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="quiet-border bg-[#0f1f1a]/30 rounded-2xl p-6 text-left hover:border-[#7fd8a8]/20 transition">
                <div className="size-16 rounded-2xl bg-[#1f6e54] flex items-center justify-center mb-6 shadow-lg shadow-[#1f6e54]/20">
                  <CactusMark size={36} body="#7fd8a8" showBase={false} />
                </div>
                <h4 className="text-sm font-bold text-white font-[var(--font-display)] mb-2">A • Ícone de app</h4>
                <p className="text-xs leading-5 text-[#6f897d]">Tile sólido verde com cacto mint. Cantos contínuos no padrão iOS/Android.</p>
              </div>

              <div className="quiet-border bg-[#0f1f1a]/30 rounded-2xl p-6 text-left hover:border-[#7fd8a8]/20 transition">
                <div className="h-16 flex items-center mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <CactusMark size={28} body="#7fd8a8" showBase={false} />
                    <div className="flex flex-col leading-none text-left">
                      <span className="font-[var(--font-display)] text-sm font-bold tracking-[-0.01em]">Cactus</span>
                      <span className="text-[8px] font-[var(--font-mono)] uppercase tracking-[0.28em] text-[#7fd8a8]/70 mt-1">company</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white font-[var(--font-display)] mb-2">B • Duotone deitado</h4>
                <p className="text-xs leading-5 text-[#6f897d]">Tronco e braços em dois verdes. Lockup horizontal para cabeçalhos e assinaturas.</p>
              </div>

              <div className="quiet-border bg-[#0f1f1a]/30 rounded-2xl p-6 text-left hover:border-[#7fd8a8]/20 transition">
                <div className="size-16 rounded-2xl border-2 border-dashed border-[#7fd8a8]/40 flex items-center justify-center mb-6">
                  <CactusMark size={32} body="#7fd8a8" showBase={false} className="opacity-45" />
                </div>
                <h4 className="text-sm font-bold text-white font-[var(--font-display)] mb-2">C • Contorno</h4>
                <p className="text-xs leading-5 text-[#6f897d]">Versão monolinha para marca d&apos;água, gravação a seco, carimbo e fundos cheios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM SECTION */}
      <section id="design-system" className="py-20 border-b border-white/5 bg-[#0a1612] relative overflow-hidden">
        <div className="container-shell">
          <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-4">
            DESIGN SYSTEM
          </p>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl text-white mb-6">
            Componentes do produto
          </h2>
          <p className="text-base sm:text-lg leading-7 text-[#9fb8ab] max-w-2xl mb-16">
            Biblioteca enxuta e consistente: botões, campos, cards, badges de status, alertas e navegação. Tudo derivado dos tokens acima.
          </p>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Design system specs: colors, typography */}
            <div className="flex flex-col gap-8">
              {/* Colors panel */}
              <div className="quiet-border bg-[#0f1f1a]/35 rounded-2xl p-6 text-left">
                <h3 className="text-sm font-[var(--font-mono)] text-[#7fd8a8] uppercase tracking-wider mb-6">Paleta de cores</h3>
                
                {/* Brand colors row */}
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {[
                    { name: "Ink", hex: "#0A1612", color: "bg-[#0a1612]" },
                    { name: "Forest", hex: "#0F1F1A", color: "bg-[#0f1f1a]" },
                    { name: "Green", hex: "#1F6E54", color: "bg-[#1f6e54]" },
                    { name: "Green 400", hex: "#2F9A74", color: "bg-[#2f9a74]" },
                    { name: "Aloe", hex: "#7FD8A8", color: "bg-[#7fd8a8]" },
                    { name: "Aloe soft", hex: "#C8EFD9", color: "bg-[#c8efd9]" },
                  ].map((color) => (
                    <div key={color.name} className="flex flex-col gap-1.5 items-center">
                      <div className={`w-full aspect-square rounded-lg ${color.color} border border-white/10`} />
                      <span className="text-[9px] font-bold text-white block mt-1 truncate w-full text-center">{color.name}</span>
                      <span className="text-[8px] text-[#6f897d] font-[var(--font-mono)] block">{color.hex}</span>
                    </div>
                  ))}
                </div>

                {/* Neutrals (clara UI) & Semantics */}
                <div className="grid gap-6 sm:grid-cols-2 mt-6 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="text-[10px] font-bold text-[#6f897d] uppercase tracking-widest mb-3">Neutros (UI Clara)</h4>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#f4f7f4]" /><span className="text-[8px] font-medium block mt-1">Paper</span></div>
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#ffffff] border border-black/10" /><span className="text-[8px] font-medium block mt-1">Card</span></div>
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#e2e9e4]" /><span className="text-[8px] font-medium block mt-1">Line</span></div>
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#11201b]" /><span className="text-[8px] font-medium block mt-1">Text</span></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#6f897d] uppercase tracking-widest mb-3">Semânticas</h4>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#1f6e54]" /><span className="text-[8px] font-medium block mt-1 text-[#7fd8a8]">Pres.</span></div>
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#c9892b]" /><span className="text-[8px] font-medium block mt-1 text-[#f0d58e]">Atraso</span></div>
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#c0463c]" /><span className="text-[8px] font-medium block mt-1 text-[#ff8f8f]">Falta</span></div>
                      <div className="text-center"><div className="w-full aspect-square rounded bg-[#2f6db0]" /><span className="text-[8px] font-medium block mt-1 text-[#8fc3ff]">Just.</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typography specs panel */}
              <div className="quiet-border bg-[#0f1f1a]/35 rounded-2xl p-6 text-left">
                <h3 className="text-sm font-[var(--font-mono)] text-[#7fd8a8] uppercase tracking-wider mb-4">Tipografia</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="border-b border-white/5 pb-3">
                    <span className="text-[9px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase mb-1">Display (Space Grotesk)</span>
                    <p className="text-2xl font-bold font-[var(--font-display)] text-white">Aa Gg 94%</p>
                    <p className="text-xs text-[#9fb8ab] mt-1">Títulos, KPIs, números de destaque.</p>
                  </div>
                  <div className="border-b border-white/5 pb-3">
                    <span className="text-[9px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase mb-1">Texto (Manrope)</span>
                    <p className="text-sm font-medium text-white leading-relaxed">Manrope — corpo, descrições e interface.</p>
                    <p className="text-xs text-[#9fb8ab] mt-1">Superfícies de leitura densa e legibilidade humana.</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase mb-1">Mono (JetBrains Mono)</span>
                    <p className="text-xs font-medium text-[#7fd8a8] font-[var(--font-mono)]">-23.5505, -46.6333 • PROTOCOLO #FI-2026</p>
                    <p className="text-xs text-[#9fb8ab] mt-1">Dados brutos, coordenadas e informações técnicas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase of mocked UI elements */}
            <div className="quiet-border bg-white rounded-3xl p-6 sm:p-8 text-[#11201b]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e2e9e4]">
                <h3 className="text-lg font-bold font-[var(--font-display)]">Componentes do App</h3>
                <span className="text-[10px] font-bold bg-[#132a23] text-white px-2 py-0.5 rounded uppercase font-[var(--font-mono)]">UI Clara</span>
              </div>

              <div className="grid gap-6">
                {/* Buttons showcase */}
                <div>
                  <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest mb-3">Botões</h4>
                  <div className="flex flex-wrap gap-2.5">
                    <button className="bg-[#1f6e54] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm hover:bg-[#1b6149] transition">
                      Confirmar presença
                    </button>
                    <button className="bg-white border border-[#e2e9e4] text-[#11201b] font-bold text-xs px-4 py-2 rounded-xl shadow-sm hover:bg-[#f4f7f4] transition">
                      Justificar ausência
                    </button>
                    <button className="bg-[#7fd8a8] text-[#0a1612] font-bold text-xs px-3.5 py-1.5 rounded-lg hover:bg-[#6ec295] transition">
                      Validar
                    </button>
                    <button className="bg-white border border-[#e2e9e4] text-[#6f897d] font-bold text-xs px-3.5 py-1.5 rounded-lg hover:bg-[#f4f7f4] transition">
                      Cancelar
                    </button>
                  </div>
                </div>

                {/* Fields showcase */}
                <div>
                  <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest mb-3">Campos</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="text-left">
                      <label className="text-[10px] font-bold text-[#11201b] block mb-1">E-mail institucional</label>
                      <input
                        type="text"
                        disabled
                        value="aluno@faculdade.edu.br"
                        className="w-full bg-[#f4f7f4] border border-[#e2e9e4] rounded-xl px-3 py-2 text-xs font-medium text-[#11201b]"
                      />
                    </div>
                    <div className="text-left">
                      <label className="text-[10px] font-bold text-[#11201b] block mb-1">Senha</label>
                      <div className="relative">
                        <input
                          type="password"
                          disabled
                          value="••••••••"
                          className="w-full bg-[#f4f7f4] border border-[#e2e9e4] rounded-xl px-3 py-2 text-xs font-medium text-[#11201b]"
                        />
                        <span className="absolute right-3 top-2.5 size-2.5 rounded-full bg-[#1f6e54]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges showcase */}
                <div>
                  <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest mb-3">Badges de status</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 bg-[#c8efd9] text-[#1f6e54] text-xs font-bold px-3 py-1 rounded-full"><span className="size-1.5 rounded-full bg-[#1f6e54]" /> Presente</span>
                    <span className="inline-flex items-center gap-1 bg-[#fbf0da] text-[#c9892b] text-xs font-bold px-3 py-1 rounded-full"><span className="size-1.5 rounded-full bg-[#c9892b]" /> Atraso</span>
                    <span className="inline-flex items-center gap-1 bg-[#fadcd9] text-[#c0463c] text-xs font-bold px-3 py-1 rounded-full"><span className="size-1.5 rounded-full bg-[#c0463c]" /> Falta</span>
                    <span className="inline-flex items-center gap-1 bg-[#e0ecf8] text-[#2f6db0] text-xs font-bold px-3 py-1 rounded-full"><span className="size-1.5 rounded-full bg-[#2f6db0]" /> Justificada</span>
                    <span className="inline-flex items-center gap-1 bg-[#f4f7f4] text-[#6f897d] text-xs font-bold px-3 py-1 rounded-full"><span className="size-1.5 rounded-full bg-[#6f897d]" /> Pendente</span>
                  </div>
                </div>

                {/* Alerts showcase */}
                <div>
                  <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest mb-3">Alertas</h4>
                  <div className="grid gap-2">
                    <div className="bg-[#c8efd9] border border-[#1f6e54]/10 rounded-xl p-3 flex gap-2.5 items-start text-left">
                      <span className="text-[#1f6e54] font-bold text-xs bg-white rounded-full size-4 flex items-center justify-center shrink-0">✓</span>
                      <div>
                        <h5 className="text-xs font-bold text-[#11201b]">Presença registrada</h5>
                        <p className="text-[10px] text-[#6f897d] mt-0.5">Check-in validado às 07:02 • Hospital Universitário</p>
                      </div>
                    </div>
                    <div className="bg-[#fbf0da] border border-[#c9892b]/10 rounded-xl p-3 flex gap-2.5 items-start text-left">
                      <span className="text-[#c9892b] font-bold text-xs bg-white rounded-full size-4 flex items-center justify-center shrink-0">!</span>
                      <div>
                        <h5 className="text-xs font-bold text-[#11201b]">Você está fora do horário</h5>
                        <p className="text-[10px] text-[#6f897d] mt-0.5">A janela de check-in deste plantão começa às 07:00.</p>
                      </div>
                    </div>
                    <div className="bg-[#fadcd9] border border-[#c0463c]/10 rounded-xl p-3 flex gap-2.5 items-start text-left">
                      <span className="text-[#c0463c] font-bold text-xs bg-white rounded-full size-4 flex items-center justify-center shrink-0">✕</span>
                      <div>
                        <h5 className="text-xs font-bold text-[#11201b]">Fora da área permitida</h5>
                        <p className="text-[10px] text-[#6f897d] mt-0.5">Você está a 1,2 km do local. Aproxime-se para registrar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O APLICATIVO SECTION */}
      <section id="o-app" className="py-20 border-b border-white/5 bg-[#071310] relative overflow-hidden">
        <div className="container-shell text-center">
          <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-4">
            O APLICATIVO • BIBLIOTECA COMPLETA
          </p>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl text-white mb-6">
            Frequência Internato • 18 telas
          </h2>
          <p className="text-base sm:text-lg leading-7 text-[#9fb8ab] max-w-2xl mx-auto mb-16">
            Os três fluxos completos — aluno, coordenação e preceptor — na direção que você aprovou: Home em linha do tempo, Saguaro como marca, botões e cards claros.
          </p>

          <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto mb-16">
            <div className="bg-[#0f1f1a]/40 quiet-border rounded-2xl p-6 hover:border-[#7fd8a8]/20 transition flex flex-col gap-3 text-left">
              <span className="text-xs font-[var(--font-mono)] text-[#7fd8a8] block">FLUXO DO ALUNO</span>
              <h3 className="text-lg font-bold text-white font-[var(--font-display)]">Aluno</h3>
              <p className="text-sm text-[#6f897d] leading-6">Splash screen, tela de login, painel do aluno com progresso de presença, check-in por geolocalização e visualização de escala de atividades.</p>
            </div>
            <div className="bg-[#0f1f1a]/40 quiet-border rounded-2xl p-6 hover:border-[#7fd8a8]/20 transition flex flex-col gap-3 text-left">
              <span className="text-xs font-[var(--font-mono)] text-[#7fd8a8] block">FLUXO DO PRECEPTOR</span>
              <h3 className="text-lg font-bold text-white font-[var(--font-display)]">Preceptor</h3>
              <p className="text-sm text-[#6f897d] leading-6">Visualização de plantão atual, lista de alunos aguardando validação, interface rápida de validação de presença e registro de ocorrência integrado.</p>
            </div>
            <div className="bg-[#0f1f1a]/40 quiet-border rounded-2xl p-6 hover:border-[#7fd8a8]/20 transition flex flex-col gap-3 text-left">
              <span className="text-xs font-[var(--font-mono)] text-[#7fd8a8] block">FLUXO DA COORDENAÇÃO</span>
              <h3 className="text-lg font-bold text-white font-[var(--font-display)]">Coordenação</h3>
              <p className="text-sm text-[#6f897d] leading-6">Visão geral do hospital e turmas, gráficos de rosca para monitorar metas de presença diária, filtros avançados e tela de exportação de relatório PDF.</p>
            </div>
          </div>

          <div className="bg-[#0a1612] quiet-border rounded-2xl p-8 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h3 className="text-xl font-bold font-[var(--font-display)] text-white">Veja a simulação em tempo real</h3>
            <p className="text-sm text-[#9fb8ab] leading-6 text-center">
              Nós montamos um protótipo clicável rodando o app completo com os três papéis para você testar todas as interações e fluxos diretamente do navegador.
            </p>
            <Link
              href="/produtos"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#7fd8a8] px-6 text-sm font-bold text-[#0a1612] transition hover:bg-[#9be7bf] shadow-[0_4px_16px_rgba(127,216,168,0.2)]"
            >
              Testar Protótipo Clicável &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS SECTION */}
      <section className="py-20 bg-[#0a1612] relative overflow-hidden">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div>
              <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-4">
                PROJETO
              </p>
              <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl text-white">
                Próximos passos
              </h2>
              <p className="text-base text-[#9fb8ab] mt-4 leading-7">
                Como evoluir a proposta após o design e a prototipação clicável.
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                {
                  text: "Transformar a biblioteca em um protótipo clicável com navegação real e o check-in animado.",
                  done: true,
                },
                {
                  text: "Refinar microcopy, estados vazios e mensagens de erro com a coordenação do internato.",
                  done: false,
                },
                {
                  text: "Pacote de handoff para desenvolvimento: tokens, componentes e specs.",
                  done: false,
                },
              ].map((step, idx) => (
                <div key={idx} className="quiet-border bg-[#0f1f1a]/40 rounded-xl p-5 flex items-center gap-4 text-left">
                  <span className={`size-6 rounded-full flex items-center justify-center text-xs shrink-0 font-bold ${step.done ? "bg-[#1f6e54] text-white" : "bg-white/10 text-white/50"}`}>
                    {step.done ? "✓" : "→"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white leading-relaxed">{step.text}</p>
                    {step.done && (
                      <span className="text-[10px] text-[#7fd8a8] font-[var(--font-mono)] mt-1 block uppercase">Disponível no menu Produtos!</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
