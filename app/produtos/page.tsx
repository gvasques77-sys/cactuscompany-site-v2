"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";

type Role = "aluno" | "preceptor" | "coordenador";

export default function ProdutosPage() {
  const [role, setRole] = useState<Role>("aluno");
  
  // Aluno Flow States
  const [alunoStep, setAlunoStep] = useState<"splash" | "login" | "home" | "escala" | "perfil">("splash");
  const [alunoCheckedIn, setAlunoCheckedIn] = useState(false);
  const [alunoActiveTab, setAlunoActiveTab] = useState<"inicio" | "escala" | "perfil">("inicio");
  const [alunoSwitches, setAlunoSwitches] = useState({
    notificacoes: true,
    geolocalizacao: true,
    biometria: false,
  });

  // Preceptor Flow States
  const [preceptorTab, setPreceptorTab] = useState<"inicio" | "validar" | "ocorr" | "perfil">("inicio");
  const [preceptorValidations, setPreceptorValidations] = useState<{
    [key: string]: "pending" | "approved" | "rejected";
  }>({
    marina: "pending",
    bruno: "pending",
    rafael: "pending",
  });
  const [preceptorShowSuccessAlert, setPreceptorShowSuccessAlert] = useState(false);
  const [preceptorOcorrType, setPreceptorOcorrType] = useState<"atraso" | "conduta" | "falta_epi" | "outro">("atraso");
  const [preceptorOcorrSeverity, setPreceptorOcorrSeverity] = useState<"leve" | "media" | "grave">("leve");
  const [preceptorOcorrDesc, setPreceptorOcorrDesc] = useState("Chegada 19 min após o início do plantão, sem aviso prévio. Terceira ocorrência no mês.");
  const [preceptorOcorrSubmitted, setPreceptorOcorrSubmitted] = useState(false);

  // Coordenador Flow States
  const [coordenadorScreen, setCoordenadorScreen] = useState<"home" | "dashboard" | "filtros" | "relatorios">("home");
  const [coordenadorFilters, setCoordenadorFilters] = useState({
    turma: "8A",
    hospital: "H. Universitário",
    disciplina: "Clínica",
    status: "Atraso",
  });
  const [coordenadorExported, setCoordenadorExported] = useState(false);

  // Auto-advance Splash to Login for Aluno
  useEffect(() => {
    if (role === "aluno" && alunoStep === "splash") {
      const timer = setTimeout(() => {
        setAlunoStep("login");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [role, alunoStep]);

  // Reset states on role change
  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    if (newRole === "aluno") {
      setAlunoStep("splash");
      setAlunoActiveTab("inicio");
    } else if (newRole === "preceptor") {
      setPreceptorTab("inicio");
      setPreceptorShowSuccessAlert(false);
      setPreceptorOcorrSubmitted(false);
    } else if (newRole === "coordenador") {
      setCoordenadorScreen("home");
      setCoordenadorExported(false);
    }
  };

  const handleValidation = (student: string, status: "approved" | "rejected") => {
    setPreceptorValidations((prev) => ({ ...prev, [student]: status }));
  };

  const submitValidations = () => {
    setPreceptorShowSuccessAlert(true);
    setTimeout(() => setPreceptorShowSuccessAlert(false), 4000);
  };

  const submitOcorrencia = (e: React.FormEvent) => {
    e.preventDefault();
    setPreceptorOcorrSubmitted(true);
    setTimeout(() => {
      setPreceptorOcorrSubmitted(false);
      setPreceptorTab("inicio");
    }, 3000);
  };

  const handleExportPDF = () => {
    setCoordenadorExported(true);
    setTimeout(() => setCoordenadorExported(false), 3000);
  };

  return (
    <div className="bg-[#0a1612] text-[#e8f0eb] min-h-screen py-16 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#132a23]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#1f6e54]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-shell relative z-10 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] mb-3">
            Protótipo Funcional
          </p>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-semibold leading-tight text-white mb-4">
            Frequência Internato
          </h1>
          <p className="text-sm sm:text-base text-[#9fb8ab] max-w-2xl mx-auto leading-relaxed">
            Experimente o aplicativo completo desenvolvido para internato de medicina. Selecione os perfis abaixo para testar as telas e fluxos de cada usuário diretamente no simulador do iPhone.
          </p>
        </div>

        {/* Role Tab Selector */}
        <div className="flex justify-center gap-1.5 p-1 bg-[#132a23]/40 border border-white/5 rounded-full max-w-md mx-auto mb-10">
          {(["aluno", "preceptor", "coordenador"] as Role[]).map((r) => (
            <button
              key={r}
              onClick={() => handleRoleChange(r)}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                role === r
                  ? "bg-[#7fd8a8] text-[#0a1612] shadow-md font-bold"
                  : "text-[#cdddd3] hover:bg-[#7fd8a8]/10"
              }`}
            >
              {r === "aluno" ? "Aluno" : r === "preceptor" ? "Preceptor" : "Coordenação"}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Instructions Column */}
          <div className="text-left space-y-6 lg:pr-6">
            <div className="quiet-border bg-[#0f1f1a]/50 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-[var(--font-mono)] text-[#7fd8a8] uppercase tracking-widest block">
                {role === "aluno" ? "PERFIL: ALUNO (INTERNO)" : role === "preceptor" ? "PERFIL: PRECEPTOR (MÉDICO)" : "PERFIL: COORDENADOR (FACULDADE)"}
              </span>
              
              {role === "aluno" && (
                <>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white">Fluxo do Aluno (Marina Alves)</h3>
                  <p className="text-sm leading-6 text-[#9fb8ab]">
                    Simule a jornada diária do interno de medicina ao registrar sua presença nos plantões e ambulatórios.
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#cdddd3] list-disc pl-4 font-medium">
                    <li>Aguarde o carregamento automático da tela de Splash.</li>
                    <li>Clique em <strong className="text-white">Entrar</strong> na tela de Login (dados já preenchidos).</li>
                    <li>No painel principal, clique no botão verde <strong className="text-white">Fazer check-in</strong>.</li>
                    <li>Veja o status alterar para <strong className="text-[#7fd8a8]">Presente</strong> e o alerta de sucesso aparecer.</li>
                    <li>Explore as abas <strong className="text-white">Escala</strong> e <strong className="text-white">Perfil</strong> na barra inferior.</li>
                  </ul>
                  <div className="bg-[#132a23]/60 p-4 rounded-xl text-xs text-[#7fd8a8] border border-[#7fd8a8]/10">
                    <strong>Tecnologia em jogo:</strong> Validação de presença baseada em geolocalização e raio de distância (1,2 km do Hospital Universitário).
                  </div>
                </>
              )}

              {role === "preceptor" && (
                <>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white">Fluxo do Preceptor (Dra. Ramos)</h3>
                  <p className="text-sm leading-6 text-[#9fb8ab]">
                    Gerencie a folha de presença dos internos alocados no seu plantão do dia e registre ocorrências de forma direta.
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#cdddd3] list-disc pl-4 font-medium">
                    <li>Veja os alunos pendentes de validação no plantão de Clínica Médica.</li>
                    <li>Na barra inferior ou no atalho, acesse <strong className="text-white">Validar</strong> para aprovar (✓) ou recusar (✗) a presença dos alunos.</li>
                    <li>Aprove o check-in de Marina e Bruno, e clique em <strong className="text-white">Confirmar validações • 3</strong>.</li>
                    <li>No menu inferior, clique em <strong className="text-white">Ocorr.</strong> para relatar um atraso ou falta de EPI de Rafael Teixeira.</li>
                  </ul>
                  <div className="bg-[#132a23]/60 p-4 rounded-xl text-xs text-[#7fd8a8] border border-[#7fd8a8]/10">
                    <strong>Tecnologia em jogo:</strong> Aprovação assíncrona que envia a confirmação de presença diretamente para a coordenação em tempo real.
                  </div>
                </>
              )}

              {role === "coordenador" && (
                <>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white">Fluxo da Coordenação (Dr. Souza)</h3>
                  <p className="text-sm leading-6 text-[#9fb8ab]">
                    Monitore a frequência agregada de todas as turmas e hospitais parceiros através de um painel analítico.
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#cdddd3] list-disc pl-4 font-medium">
                    <li>Visualize a visão geral dos alunos presentes no momento e os alertas emitidos no dia.</li>
                    <li>Clique em <strong className="text-white">Dashboard</strong> para ver o gráfico interativo de rosca com a presença geral.</li>
                    <li>Acesse <strong className="text-white">Filtros</strong> para filtrar a lista por turmas, hospitais ou status.</li>
                    <li>Abra a tela de <strong className="text-white">Relatórios</strong> para ver os alunos com mais faltas e clique em <strong className="text-white">Exportar PDF</strong>.</li>
                  </ul>
                  <div className="bg-[#132a23]/60 p-4 rounded-xl text-xs text-[#7fd8a8] border border-[#7fd8a8]/10">
                    <strong>Tecnologia em jogo:</strong> Gráficos e painel dinâmicos com análise estatística de dados de faltas agregadas por semana.
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-4 items-center">
              <Link href="/" className="text-sm font-semibold text-[#7fd8a8] hover:text-[#9be7bf] transition">
                &larr; Voltar para a Home do Site
              </Link>
              <span className="text-white/20">|</span>
              <span className="text-xs text-[#6f897d] font-[var(--font-mono)]">CACTUS COMPANY CONFIDENCIAL • 2026</span>
            </div>
          </div>

          {/* iPhone Simulator Frame Column */}
          <div className="flex justify-center lg:justify-end">
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

              {/* iPhone screen container */}
              <div className="iphone-screen">
                
                {/* 1. ALUNO ROLE SIMULATOR */}
                {role === "aluno" && (
                  <div className="flex-1 flex flex-col h-full bg-[#f4f7f4]">
                    {/* Splash Screen */}
                    {alunoStep === "splash" && (
                      <div className="flex-1 bg-[#1f6e54] flex flex-col items-center justify-center text-white p-6 animate-fade-in">
                        <CactusMark size={72} body="#c8efd9" showBase={false} />
                        <h2 className="mt-6 font-[var(--font-display)] text-xl font-bold tracking-tight">Frequência Internato</h2>
                        <span className="mt-2 text-[10px] font-[var(--font-mono)] text-[#7fd8a8] uppercase tracking-[0.25em]">Cactus Company</span>
                        <div className="mt-8 size-5 border-2 border-white/20 border-t-[#7fd8a8] rounded-full animate-spin" />
                      </div>
                    )}

                    {/* Login Screen */}
                    {alunoStep === "login" && (
                      <div className="flex-1 bg-white p-5 flex flex-col justify-between text-left">
                        <div className="mt-8 space-y-6">
                          <CactusMark size={40} body="#1f6e54" showBase={false} />
                          <div>
                            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#11201b]">Bem-vindo</h2>
                            <p className="text-xs text-[#6f897d] mt-1 font-semibold">Faculdade de Medicina • acesse com seu e-mail institucional</p>
                          </div>

                          {/* Role tabs in login page */}
                          <div className="flex border border-[#e2e9e4] rounded-lg p-0.5 text-center text-[10px] font-bold">
                            <span className="flex-1 bg-[#1f6e54] text-white py-1 rounded-md">Aluno</span>
                            <span className="flex-1 text-[#6f897d] py-1">Coordenador</span>
                            <span className="flex-1 text-[#6f897d] py-1">Professor</span>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <label className="text-[10px] font-bold text-[#11201b] block mb-1">E-mail</label>
                              <input
                                type="text"
                                readOnly
                                value="marina.alves@med.edu.br"
                                className="w-full bg-[#f4f7f4] border border-[#e2e9e4] rounded-xl px-3 py-2 text-xs font-semibold text-[#11201b]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-[#11201b] block mb-1">Senha</label>
                              <input
                                type="password"
                                readOnly
                                value="password123"
                                className="w-full bg-[#f4f7f4] border border-[#e2e9e4] rounded-xl px-3 py-2 text-xs font-semibold text-[#11201b]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 mb-4">
                          <button
                            onClick={() => setAlunoStep("home")}
                            className="w-full bg-[#1f6e54] text-white font-bold text-xs py-2.5 rounded-xl shadow-md hover:bg-[#1b6149] transition text-center"
                          >
                            Entrar
                          </button>
                          <span className="text-[10px] font-bold text-[#1f6e54] block text-center cursor-pointer">Esqueci minha senha</span>
                          <span className="text-[8px] font-[var(--font-mono)] text-[#6f897d]/70 text-center block mt-2">🔒 protegido por Cactus Company</span>
                        </div>
                      </div>
                    )}

                    {/* App Core Views (Home, Escala, Perfil) */}
                    {alunoStep !== "splash" && alunoStep !== "login" && (
                      <div className="flex-1 flex flex-col justify-between h-full">
                        {/* Core Subviews */}
                        <div className="flex-1 overflow-y-auto simulator-scroll p-4 text-left">
                          
                          {/* 1. Inicio tab */}
                          {alunoActiveTab === "inicio" && (
                            <div className="space-y-4">
                              <header className="flex justify-between items-center mt-2">
                                <div>
                                  <span className="text-[9px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase">Quarta • 28 mai</span>
                                  <h2 className="text-lg font-bold text-[#11201b] font-[var(--font-display)]">Olá, Marina</h2>
                                </div>
                                <div className="size-8 rounded-full bg-[#11201b] text-white flex items-center justify-center font-bold text-xs">MA</div>
                              </header>

                              {/* Alert Success when checked in */}
                              {alunoCheckedIn && (
                                <div className="bg-[#c8efd9] border border-[#1f6e54]/10 rounded-xl p-3 flex gap-2.5 items-start text-left animate-fade-in">
                                  <span className="text-[#1f6e54] font-bold text-xs bg-white rounded-full size-4 flex items-center justify-center shrink-0">✓</span>
                                  <div>
                                    <h5 className="text-[11px] font-bold text-[#11201b]">Presença registrada</h5>
                                    <p className="text-[9px] text-[#6f897d] mt-0.5">Check-in validado às 07:02 • Hospital Universitário</p>
                                  </div>
                                </div>
                              )}

                              {/* Frequency Progress Card */}
                              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e2e9e4] flex items-center gap-4">
                                <div className="relative size-12 shrink-0 flex items-center justify-center">
                                  <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="24" cy="24" r="20" fill="transparent" stroke="#e2e9e4" strokeWidth="4" />
                                    <circle cx="24" cy="24" r="20" fill="transparent" stroke="#1f6e54" strokeWidth="4" strokeDasharray="125.6" strokeDashoffset="7.5" strokeLinecap="round" />
                                  </svg>
                                  <span className="absolute text-[10px] font-bold text-[#11201b]">94%</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-xs font-bold text-[#11201b] leading-tight">frequência</h3>
                                  <p className="text-[9px] text-[#6f897d] mt-0.5">2 faltas • 1 justificada no mês</p>
                                </div>
                                <span className="bg-[#c8efd9] text-[#1f6e54] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shrink-0">Em dia</span>
                              </div>

                              {/* Today scale summary */}
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <h4 className="text-xs font-bold text-[#11201b]">Hoje • 3 atividades</h4>
                                  <button onClick={() => setAlunoActiveTab("escala")} className="text-[10px] text-[#1f6e54] font-bold">Ver escala</button>
                                </div>

                                {/* Activity 1 */}
                                <div className="bg-white rounded-xl p-4 border border-[#e2e9e4] shadow-sm flex flex-col gap-3 relative overflow-hidden pl-10">
                                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#e2e9e4]" />
                                  <div className={`absolute left-3 top-5 size-2.5 rounded-full border-2 border-white z-10 ${alunoCheckedIn ? "bg-[#1f6e54]" : "bg-[#c9892b]"}`} />

                                  <div className="text-[9px] font-bold text-[#1f6e54] font-[var(--font-mono)] uppercase">07:00</div>
                                  <div>
                                    <h5 className="text-xs font-bold text-[#11201b] font-[var(--font-display)]">Plantão • Clínica Médica</h5>
                                    <p className="text-[9px] text-[#6f897d] mt-0.5">Hospital Universitário • Ala B</p>
                                  </div>
                                  
                                  {alunoCheckedIn ? (
                                    <span className="bg-[#c8efd9] text-[#1f6e54] text-[10px] font-bold py-1.5 px-3 rounded-lg text-center block border border-[#1f6e54]/10">
                                      ✓ Presente
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => setAlunoCheckedIn(true)}
                                      className="w-full bg-[#1f6e54] text-white py-1.5 px-3 rounded-lg font-bold text-center text-xs shadow-sm hover:bg-[#1b6149] transition"
                                    >
                                      Fazer check-in
                                    </button>
                                  )}
                                </div>

                                {/* Activity 2 */}
                                <div className="bg-white/60 rounded-xl p-4 border border-[#e2e9e4]/60 shadow-sm flex flex-col gap-1 relative overflow-hidden pl-10 opacity-70">
                                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#e2e9e4]" />
                                  <div className="absolute left-3.5 top-5 size-1.5 rounded-full bg-[#9fb8ab] z-10" />

                                  <div className="text-[9px] font-bold text-[#6f897d] font-[var(--font-mono)] uppercase">13:00</div>
                                  <div>
                                    <h5 className="text-xs font-semibold text-[#11201b] font-[var(--font-display)]">Ambulatório • Cardiologia</h5>
                                    <p className="text-[9px] text-[#6f897d] mt-0.5">Aguardando • check-in às 13:00</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 2. Escala tab */}
                          {alunoActiveTab === "escala" && (
                            <div className="space-y-4">
                              <header className="mt-2 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-[#11201b] font-[var(--font-display)]">Minha escala</h2>
                                <span className="text-[10px] font-bold text-[#1f6e54]">Maio</span>
                              </header>

                              {/* Calendar row */}
                              <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                                {[{ d: "S", n: "26" }, { d: "T", n: "27" }, { d: "Q", n: "28", active: true }, { d: "Q", n: "29" }].map((day) => (
                                  <div
                                    key={day.n}
                                    className={`p-2 rounded-xl border transition ${
                                      day.active
                                        ? "bg-[#1f6e54] text-white border-[#1f6e54] shadow-sm font-bold"
                                        : "bg-white text-[#11201b] border-[#e2e9e4]"
                                    }`}
                                  >
                                    <span className="text-[8px] uppercase block opacity-70 mb-0.5">{day.d}</span>
                                    <span>{day.n}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="space-y-2 pt-2">
                                <span className="text-[9px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-wider font-bold">Quarta • 28 mai</span>
                                
                                {/* Scale list */}
                                {[
                                  { t: "07:00 – 13:00", title: "Plantão • Clínica Médica", loc: "Hospital Universitário • Ala B", color: "border-l-4 border-l-[#1f6e54]" },
                                  { t: "13:00 – 17:00", title: "Ambulatório • Cardiologia", loc: "Anexo II", color: "border-l-4 border-l-[#c9892b]" },
                                  { t: "18:00 – 19:30", title: "Discussão de casos", loc: "Sala 204", color: "border-l-4 border-l-[#2f6db0]" },
                                ].map((item, index) => (
                                  <div key={index} className={`bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm text-left flex flex-col gap-1 ${item.color}`}>
                                    <span className="text-[9px] font-bold text-[#6f897d] font-[var(--font-mono)]">{item.t}</span>
                                    <h4 className="text-xs font-bold text-[#11201b]">{item.title}</h4>
                                    <p className="text-[9px] text-[#6f897d]">{item.loc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 3. Perfil tab */}
                          {alunoActiveTab === "perfil" && (
                            <div className="space-y-4">
                              <header className="mt-2">
                                <h2 className="text-lg font-bold text-[#11201b] font-[var(--font-display)]">Meu Perfil</h2>
                              </header>

                              {/* Student Info Card */}
                              <div className="bg-white rounded-xl p-4 border border-[#e2e9e4] shadow-sm flex items-center gap-3">
                                <div className="size-10 rounded-full bg-[#1f6e54] text-white flex items-center justify-center font-bold text-sm">MA</div>
                                <div>
                                  <h3 className="text-xs font-bold text-[#11201b]">Marina Alves</h3>
                                  <p className="text-[9px] text-[#6f897d] mt-0.5">Interna • Turma 8A</p>
                                  <p className="text-[8px] font-[var(--font-mono)] text-[#1f6e54] mt-0.5 font-semibold">matrícula 2021.med.0934</p>
                                </div>
                              </div>

                              {/* Academic metadata list */}
                              <div className="bg-white rounded-xl border border-[#e2e9e4] shadow-sm text-xs divide-y divide-[#e2e9e4]">
                                <div className="p-3 flex justify-between"><span className="text-[#6f897d]">Hospital</span><span className="font-bold text-[#11201b]">Universitário</span></div>
                                <div className="p-3 flex justify-between"><span className="text-[#6f897d]">Período</span><span className="font-bold text-[#11201b]">9º semestre</span></div>
                                <div className="p-3 flex justify-between"><span className="text-[#6f897d]">Coordenação</span><span className="font-bold text-[#11201b]">Dr. Souza</span></div>
                              </div>

                              {/* Toggles */}
                              <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm space-y-3">
                                {[
                                  { key: "notificacoes", label: "Notificações", val: alunoSwitches.notificacoes },
                                  { key: "geolocalizacao", label: "Geolocalização", val: alunoSwitches.geolocalizacao },
                                  { key: "biometria", label: "Biometria no login", val: alunoSwitches.biometria },
                                ].map((sw) => (
                                  <div key={sw.key} className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-[#11201b]">{sw.label}</span>
                                    <button
                                      onClick={() => setAlunoSwitches(prev => ({ ...prev, [sw.key]: !sw.val }))}
                                      className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${sw.val ? "bg-[#1f6e54]" : "bg-[#e2e9e4]"}`}
                                    >
                                      <div className={`size-4 rounded-full bg-white transition-transform duration-200 ${sw.val ? "translate-x-4" : "translate-x-0"}`} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        {/* Aluno Bottom Navigation Bar */}
                        <div className="border-t border-[#e2e9e4] bg-white pt-2.5 pb-3 px-1 grid grid-cols-3 text-center">
                          <button
                            onClick={() => setAlunoActiveTab("inicio")}
                            className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${alunoActiveTab === "inicio" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                          >
                            <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            <span className="text-[8px] font-bold">Início</span>
                          </button>
                          <button
                            onClick={() => setAlunoActiveTab("escala")}
                            className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${alunoActiveTab === "escala" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                          >
                            <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            <span className="text-[8px] font-bold">Escala</span>
                          </button>
                          <button
                            onClick={() => setAlunoActiveTab("perfil")}
                            className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${alunoActiveTab === "perfil" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                          >
                            <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            <span className="text-[8px] font-bold">Perfil</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}


                {/* 2. PRECEPTOR ROLE SIMULATOR */}
                {role === "preceptor" && (
                  <div className="flex-1 flex flex-col h-full bg-[#f4f7f4]">
                    {/* Header */}
                    <header className="bg-white border-b border-[#e2e9e4] p-4 text-left flex justify-between items-center shrink-0">
                      <div>
                        <span className="text-[8px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase">Preceptor • Clínica Médica</span>
                        <h2 className="text-base font-bold text-[#11201b] font-[var(--font-display)]">Dra. Ramos</h2>
                      </div>
                      <div className="size-8 rounded-full bg-[#11201b] text-white flex items-center justify-center font-bold text-xs">LR</div>
                    </header>

                    {/* Validation success toast overlay */}
                    {preceptorShowSuccessAlert && (
                      <div className="absolute top-14 left-4 right-4 bg-[#c8efd9] border border-[#1f6e54]/10 rounded-xl p-3 flex gap-2 items-start text-left z-30 animate-fade-in shadow-md">
                        <span className="text-[#1f6e54] font-bold text-xs bg-white rounded-full size-4 flex items-center justify-center shrink-0">✓</span>
                        <div>
                          <h5 className="text-[10px] font-bold text-[#11201b]">Validações salvas</h5>
                          <p className="text-[8px] text-[#6f897d] mt-0.5">As presenças dos internos foram registradas com sucesso.</p>
                        </div>
                      </div>
                    )}

                    {/* Preceptor screen views */}
                    <div className="flex-1 overflow-y-auto simulator-scroll p-4 text-left">
                      
                      {/* PRECEPTOR TAB 1: INICIO */}
                      {preceptorTab === "inicio" && (
                        <div className="space-y-4">
                          {/* Shift Header Card */}
                          <div className="bg-[#0f1f1a] text-white rounded-xl p-4 shadow-md flex flex-col gap-1 relative overflow-hidden">
                            <span className="text-[8px] font-bold text-[#7fd8a8] font-[var(--font-mono)] uppercase tracking-wider">TURNO DE HOJE • 07:00</span>
                            <h3 className="text-sm font-bold font-[var(--font-display)]">Plantão • Clínica Médica</h3>
                            <p className="text-[10px] text-[#9fb8ab]">8 internos sob sua supervisão</p>
                          </div>

                          {/* Quick validation section */}
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <h4 className="text-xs font-bold text-[#11201b]">Aguardando validação</h4>
                              <span className="bg-[#fcf3d9] text-[#c9892b] text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0">3</span>
                            </div>

                            {/* Aluno 1: Marina */}
                            <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-[#e2e9e4] text-[#1f6e54] flex items-center justify-center font-bold text-xs">MA</div>
                                <div className="text-left">
                                  <h5 className="text-xs font-bold text-[#11201b]">Marina Alves</h5>
                                  <p className="text-[8px] text-[#6f897d] mt-0.5">check-in 07:02</p>
                                </div>
                              </div>
                              <button
                                onClick={() => setPreceptorTab("validar")}
                                className="bg-[#1f6e54] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#1b6149] transition shadow-sm"
                              >
                                Validar
                              </button>
                            </div>

                            {/* Aluno 2: Bruno */}
                            <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-[#e2e9e4] text-[#1f6e54] flex items-center justify-center font-bold text-xs">BC</div>
                                <div className="text-left">
                                  <h5 className="text-xs font-bold text-[#11201b]">Bruno Costa</h5>
                                  <p className="text-[8px] text-[#6f897d] mt-0.5">check-in 07:05</p>
                                </div>
                              </div>
                              <button
                                onClick={() => setPreceptorTab("validar")}
                                className="bg-[#1f6e54] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#1b6149] transition shadow-sm"
                              >
                                Validar
                              </button>
                            </div>

                            {/* Aluno 3: Rafael */}
                            <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-[#e2e9e4] text-[#1f6e54] flex items-center justify-center font-bold text-xs">RT</div>
                                <div className="text-left">
                                  <h5 className="text-xs font-bold text-[#11201b]">Rafael Teixeira</h5>
                                  <p className="text-[8px] text-[#6f897d] mt-0.5">check-in 07:19 (atrasado)</p>
                                </div>
                              </div>
                              <button
                                onClick={() => setPreceptorTab("validar")}
                                className="bg-[#1f6e54] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#1b6149] transition shadow-sm"
                              >
                                Validar
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PRECEPTOR TAB 2: VALIDAR PRESENCA */}
                      {preceptorTab === "validar" && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-1.5">
                            <button onClick={() => setPreceptorTab("inicio")} className="text-xs text-[#1f6e54] font-bold">&larr; Voltar</button>
                            <h3 className="text-sm font-bold text-[#11201b]">Validar presença</h3>
                          </div>
                          
                          <div className="bg-[#e2e9e4]/40 rounded-xl p-3 text-[10px] font-bold text-[#11201b] leading-tight text-left">
                            <span className="text-[#6f897d] block font-[var(--font-mono)] text-[8px] uppercase">PLANTÃO • 28/05 • 07:00</span>
                            Clínica Médica • Ala B
                          </div>

                          {/* Validator list */}
                          <div className="space-y-2.5">
                            {/* Marina row */}
                            <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-[#11201b]">Marina Alves</h4>
                                <span className="text-[8px] text-[#1f6e54] font-[var(--font-mono)] mt-0.5 block">07:02 • no local</span>
                              </div>
                              <div className="flex gap-1.5">
                                <button
                                  onClick={() => handleValidation("marina", "rejected")}
                                  className={`size-7 rounded-lg border flex items-center justify-center font-bold text-xs ${preceptorValidations.marina === "rejected" ? "bg-[#c0463c] text-white border-[#c0463c]" : "bg-white border-[#e2e9e4] text-[#c0463c] hover:bg-[#fadcd9]"}`}
                                >
                                  ✕
                                </button>
                                <button
                                  onClick={() => handleValidation("marina", "approved")}
                                  className={`size-7 rounded-lg border flex items-center justify-center font-bold text-xs ${preceptorValidations.marina === "approved" ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#1f6e54] hover:bg-[#c8efd9]"}`}
                                >
                                  ✓
                                </button>
                              </div>
                            </div>

                            {/* Bruno row */}
                            <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-[#11201b]">Bruno Costa</h4>
                                <span className="text-[8px] text-[#1f6e54] font-[var(--font-mono)] mt-0.5 block">07:05 • no local</span>
                              </div>
                              <div className="flex gap-1.5">
                                <button
                                  onClick={() => handleValidation("bruno", "rejected")}
                                  className={`size-7 rounded-lg border flex items-center justify-center font-bold text-xs ${preceptorValidations.bruno === "rejected" ? "bg-[#c0463c] text-white border-[#c0463c]" : "bg-white border-[#e2e9e4] text-[#c0463c] hover:bg-[#fadcd9]"}`}
                                >
                                  ✕
                                </button>
                                <button
                                  onClick={() => handleValidation("bruno", "approved")}
                                  className={`size-7 rounded-lg border flex items-center justify-center font-bold text-xs ${preceptorValidations.bruno === "approved" ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#1f6e54] hover:bg-[#c8efd9]"}`}
                                >
                                  ✓
                                </button>
                              </div>
                            </div>

                            {/* Rafael row */}
                            <div className="bg-white rounded-xl p-3 border border-[#e2e9e4] shadow-sm flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-[#11201b]">Rafael Teixeira</h4>
                                <span className="text-[8px] text-[#c9892b] font-[var(--font-mono)] mt-0.5 block">07:19 • atraso</span>
                              </div>
                              <div className="flex gap-1.5">
                                <button
                                  onClick={() => handleValidation("rafael", "rejected")}
                                  className={`size-7 rounded-lg border flex items-center justify-center font-bold text-xs ${preceptorValidations.rafael === "rejected" ? "bg-[#c0463c] text-white border-[#c0463c]" : "bg-white border-[#e2e9e4] text-[#c0463c] hover:bg-[#fadcd9]"}`}
                                >
                                  ✕
                                </button>
                                <button
                                  onClick={() => handleValidation("rafael", "approved")}
                                  className={`size-7 rounded-lg border flex items-center justify-center font-bold text-xs ${preceptorValidations.rafael === "approved" ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#1f6e54] hover:bg-[#c8efd9]"}`}
                                >
                                  ✓
                                </button>
                              </div>
                            </div>

                            {/* Julia row (absent) */}
                            <div className="bg-white/60 rounded-xl p-3 border border-[#e2e9e4]/60 shadow-sm flex items-center justify-between opacity-80">
                              <div>
                                <h4 className="text-xs font-medium text-[#6f897d]">Júlia Lima</h4>
                                <span className="text-[8px] text-[#6f897d] font-[var(--font-mono)] mt-0.5 block">sem check-in</span>
                              </div>
                              <span className="bg-[#fadcd9] text-[#c0463c] text-[8px] font-bold px-2 py-0.5 rounded uppercase">Ausente</span>
                            </div>
                          </div>

                          <button
                            onClick={submitValidations}
                            className="w-full bg-[#1f6e54] text-white text-xs font-bold py-2.5 rounded-xl mt-4 shadow hover:bg-[#1b6149] transition text-center"
                          >
                            Confirmar validações • 3
                          </button>
                        </div>
                      )}

                      {/* PRECEPTOR TAB 3: OCORRENCIA */}
                      {preceptorTab === "ocorr" && (
                        <div className="space-y-4">
                          <h3 className="text-sm font-bold text-[#11201b]">Registrar ocorrência</h3>
                          
                          {preceptorOcorrSubmitted ? (
                            <div className="bg-[#c8efd9] border border-[#1f6e54]/10 rounded-xl p-4 text-center space-y-2 py-8 animate-fade-in">
                              <span className="text-[#1f6e54] font-bold text-xl bg-white rounded-full size-8 flex items-center justify-center mx-auto shadow-sm">✓</span>
                              <h4 className="text-xs font-bold text-[#11201b] mt-3">Ocorrência registrada!</h4>
                              <p className="text-[9px] text-[#6f897d] max-w-xs mx-auto mt-1">A notificação foi anexada ao perfil acadêmico do aluno.</p>
                            </div>
                          ) : (
                            <form onSubmit={submitOcorrencia} className="space-y-3.5 text-xs text-left">
                              {/* Aluno selector */}
                              <div>
                                <label className="text-[10px] font-bold text-[#11201b] block mb-1">Aluno</label>
                                <div className="w-full bg-white border border-[#e2e9e4] rounded-xl p-3 font-semibold flex justify-between items-center shadow-sm">
                                  <div className="flex items-center gap-2">
                                    <div className="size-5 rounded-full bg-[#c9892b]/20 text-[#c9892b] flex items-center justify-center font-bold text-[9px]">RT</div>
                                    <span>Rafael Teixeira</span>
                                  </div>
                                  <span className="text-[9px] text-[#6f897d]">Turma 8A • Pediatria</span>
                                </div>
                              </div>

                              {/* Type selector */}
                              <div>
                                <label className="text-[10px] font-bold text-[#11201b] block mb-1">Tipo</label>
                                <div className="grid grid-cols-2 gap-1.5">
                                  {[
                                    { k: "atraso", l: "Atraso" },
                                    { k: "conduta", l: "Conduta" },
                                    { k: "falta_epi", l: "Falta de EPI" },
                                    { k: "outro", l: "Outro" }
                                  ].map((tp) => (
                                    <button
                                      key={tp.k}
                                      type="button"
                                      onClick={() => setPreceptorOcorrType(tp.k as any)}
                                      className={`py-1.5 px-3 rounded-lg border text-center font-bold text-[10px] transition ${preceptorOcorrType === tp.k ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#11201b] hover:bg-[#f4f7f4]"}`}
                                    >
                                      {tp.l}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Severity selector */}
                              <div>
                                <label className="text-[10px] font-bold text-[#11201b] block mb-1">Gravidade</label>
                                <div className="flex border border-[#e2e9e4] bg-white rounded-lg p-0.5 text-center font-bold">
                                  {[
                                    { k: "leve", l: "Leve" },
                                    { k: "media", l: "Média" },
                                    { k: "grave", l: "Grave" }
                                  ].map((sv) => (
                                    <button
                                      key={sv.k}
                                      type="button"
                                      onClick={() => setPreceptorOcorrSeverity(sv.k as any)}
                                      className={`flex-1 py-1 rounded-md text-[10px] transition-colors duration-200 ${preceptorOcorrSeverity === sv.k ? "bg-[#1f6e54] text-white" : "text-[#6f897d]"}`}
                                    >
                                      {sv.l}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Description textarea */}
                              <div>
                                <label className="text-[10px] font-bold text-[#11201b] block mb-1">Descrição</label>
                                <textarea
                                  value={preceptorOcorrDesc}
                                  onChange={(e) => setPreceptorOcorrDesc(e.target.value)}
                                  className="w-full bg-white border border-[#e2e9e4] rounded-xl px-3 py-2 text-xs font-medium text-[#11201b] min-h-16 focus:outline-none focus:ring-1 focus:ring-[#1f6e54]"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full bg-[#1f6e54] text-white font-bold text-xs py-2.5 rounded-xl shadow hover:bg-[#1b6149] transition text-center"
                              >
                                Registrar ocorrência
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                    </div>

                    {/* Preceptor Bottom Tab navigation bar */}
                    <div className="border-t border-[#e2e9e4] bg-white pt-2.5 pb-3 px-1 grid grid-cols-3 text-center shrink-0">
                      <button
                        onClick={() => setPreceptorTab("inicio")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${preceptorTab === "inicio" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                      >
                        <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        <span className="text-[8px] font-bold">Início</span>
                      </button>
                      <button
                        onClick={() => setPreceptorTab("validar")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${preceptorTab === "validar" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                      >
                        <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        <span className="text-[8px] font-bold">Validar</span>
                      </button>
                      <button
                        onClick={() => setPreceptorTab("ocorr")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${preceptorTab === "ocorr" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                      >
                        <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        <span className="text-[8px] font-bold">Ocorr.</span>
                      </button>
                    </div>
                  </div>
                )}


                {/* 3. COORDENADOR ROLE SIMULATOR */}
                {role === "coordenador" && (
                  <div className="flex-1 flex flex-col h-full bg-[#f4f7f4]">
                    {/* Header */}
                    <header className="bg-white border-b border-[#e2e9e4] p-4 text-left flex justify-between items-center shrink-0">
                      <div>
                        <span className="text-[8px] font-bold text-[#6f897d] block font-[var(--font-mono)] uppercase">Coordenação • Internato</span>
                        <h2 className="text-base font-bold text-[#11201b] font-[var(--font-display)]">Olá, Dr. Souza</h2>
                      </div>
                      <div className="size-8 rounded-full bg-[#11201b] text-white flex items-center justify-center font-bold text-xs">CS</div>
                    </header>

                    {/* PDF Toast Notification */}
                    {coordenadorExported && (
                      <div className="absolute top-14 left-4 right-4 bg-[#c8efd9] border border-[#1f6e54]/10 rounded-xl p-3 flex gap-2 items-start text-left z-30 animate-fade-in shadow-md">
                        <span className="text-[#1f6e54] font-bold text-xs bg-white rounded-full size-4 flex items-center justify-center shrink-0">✓</span>
                        <div>
                          <h5 className="text-[10px] font-bold text-[#11201b]">PDF Exportado</h5>
                          <p className="text-[8px] text-[#6f897d] mt-0.5">O relatório da Turma 8A foi salvo e baixado com sucesso.</p>
                        </div>
                      </div>
                    )}

                    {/* Coordenador Screen Panel */}
                    <div className="flex-1 overflow-y-auto simulator-scroll p-4 text-left relative">
                      
                      {/* COORDENADOR VIEW 1: HOME */}
                      {coordenadorScreen === "home" && (
                        <div className="space-y-4">
                          {/* Presentes stats cards */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm text-left">
                              <span className="text-[22px] font-bold font-[var(--font-display)] text-[#1f6e54]">48</span>
                              <span className="text-[9px] text-[#6f897d] font-bold block mt-0.5">Presentes agora</span>
                            </div>
                            <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm text-left">
                              <span className="text-[22px] font-bold font-[var(--font-display)] text-[#c0463c]">3</span>
                              <span className="text-[9px] text-[#6f897d] font-bold block mt-0.5">Alertas hoje</span>
                            </div>
                          </div>

                          {/* Shortcuts */}
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest font-bold">Atalhos</h4>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => setCoordenadorScreen("dashboard")}
                                className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm text-left flex items-center gap-2.5 hover:bg-[#f4f7f4] transition"
                              >
                                <span className="p-1.5 rounded-lg bg-[#c8efd9] text-[#1f6e54] shrink-0">
                                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                </span>
                                <span className="text-[10px] font-bold text-[#11201b]">Dashboard</span>
                              </button>

                              <button
                                onClick={() => setCoordenadorScreen("relatorios")}
                                className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm text-left flex items-center gap-2.5 hover:bg-[#f4f7f4] transition"
                              >
                                <span className="p-1.5 rounded-lg bg-[#e0ecf8] text-[#2f6db0] shrink-0">
                                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                </span>
                                <span className="text-[10px] font-bold text-[#11201b]">Relatórios</span>
                              </button>
                            </div>
                          </div>

                          {/* Recent Alerts */}
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest font-bold">Alertas recentes</h4>

                            <div className="space-y-2">
                              {/* Alert 1 */}
                              <div className="bg-[#fadcd9] border border-[#c0463c]/10 rounded-xl p-3 flex justify-between items-center text-left">
                                <div>
                                  <h5 className="text-[10px] font-bold text-[#c0463c]">Turma 9B abaixo da meta</h5>
                                  <p className="text-[8px] text-[#6f897d] mt-0.5">64% de presença • meta 85%</p>
                                </div>
                                <span className="text-xs text-[#6f897d]">&rsaquo;</span>
                              </div>

                              {/* Alert 2 */}
                              <div className="bg-[#fbf0da] border border-[#c9892b]/10 rounded-xl p-3 flex justify-between items-center text-left">
                                <div>
                                  <h5 className="text-[10px] font-bold text-[#c9892b]">Rafael Teixeira • 3 atrasos</h5>
                                  <p className="text-[8px] text-[#6f897d] mt-0.5">Ocorrências recorrentes no mesmo mês.</p>
                                </div>
                                <span className="text-xs text-[#6f897d]">&rsaquo;</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* COORDENADOR VIEW 2: DASHBOARD */}
                      {coordenadorScreen === "dashboard" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => setCoordenadorScreen("home")} className="text-xs text-[#1f6e54] font-bold">&larr; Voltar</button>
                              <h3 className="text-sm font-bold text-[#11201b]">Visão geral</h3>
                            </div>
                            <button
                              onClick={() => setCoordenadorScreen("filtros")}
                              className="text-[9px] font-bold text-[#1f6e54] bg-[#c8efd9] py-1 px-2.5 rounded-full"
                            >
                              Filtros ▾
                            </button>
                          </div>

                          {/* Doughnut presence chart */}
                          <div className="bg-white rounded-xl p-4 border border-[#e2e9e4] shadow-sm flex items-center justify-around gap-2 text-left">
                            <div className="relative size-20 shrink-0 flex items-center justify-center">
                              <svg className="w-full h-full transform -rotate-90">
                                <circle cx="40" cy="40" r="32" fill="transparent" stroke="#fadcd9" strokeWidth="7" />
                                <circle cx="40" cy="40" r="32" fill="transparent" stroke="#1f6e54" strokeWidth="7" strokeDasharray="201" strokeDashoffset="32" strokeLinecap="round" />
                                <circle cx="40" cy="40" r="32" fill="transparent" stroke="#fbf0da" strokeWidth="7" strokeDasharray="201" strokeDashoffset="180" strokeLinecap="round" />
                              </svg>
                              <div className="absolute text-center">
                                <span className="text-xs font-bold text-[#11201b] block">84%</span>
                                <span className="text-[7px] text-[#6f897d] uppercase tracking-wider block leading-none font-bold">presença</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[8px] font-bold text-[#11201b]">
                              <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#1f6e54]" /><span>Presentes: 48</span></div>
                              <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#c9892b]" /><span>Atrasos: 5</span></div>
                              <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#c0463c]" /><span>Faltas: 3</span></div>
                              <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#2f6db0]" /><span>Justific.: 2</span></div>
                            </div>
                          </div>

                          {/* Performance by class */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold text-[#6f897d]">
                              <span>Por turma</span>
                              <span>Ver todas</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-left">
                              <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs font-bold"><span className="text-[#11201b]">Turma 8A</span><span className="text-[#1f6e54]">92%</span></div>
                                <div className="w-full h-1 bg-[#e2e9e4] rounded-full overflow-hidden mt-1"><div className="h-full bg-[#1f6e54] rounded-full" style={{ width: "92%" }} /></div>
                              </div>
                              <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs font-bold"><span className="text-[#11201b]">Turma 8B</span><span className="text-[#c9892b]">78%</span></div>
                                <div className="w-full h-1 bg-[#e2e9e4] rounded-full overflow-hidden mt-1"><div className="h-full bg-[#c9892b] rounded-full" style={{ width: "78%" }} /></div>
                              </div>
                              <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs font-bold"><span className="text-[#11201b]">Turma 9A</span><span className="text-[#1f6e54]">96%</span></div>
                                <div className="w-full h-1 bg-[#e2e9e4] rounded-full overflow-hidden mt-1"><div className="h-full bg-[#1f6e54] rounded-full" style={{ width: "96%" }} /></div>
                              </div>
                              <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs font-bold"><span className="text-[#11201b]">Turma 9B</span><span className="text-[#c0463c]">64%</span></div>
                                <div className="w-full h-1 bg-[#e2e9e4] rounded-full overflow-hidden mt-1"><div className="h-full bg-[#c0463c] rounded-full" style={{ width: "64%" }} /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* COORDENADOR VIEW 3: FILTROS */}
                      {coordenadorScreen === "filtros" && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center border-b border-[#e2e9e4] pb-2">
                            <h3 className="text-sm font-bold text-[#11201b]">Filtros</h3>
                            <button
                              onClick={() => setCoordenadorFilters({ turma: "8A", hospital: "H. Universitário", disciplina: "Clínica", status: "Atraso" })}
                              className="text-[10px] text-[#6f897d] font-bold"
                            >
                              Limpar
                            </button>
                          </div>

                          <div className="space-y-3.5 text-xs text-left">
                            {/* Class */}
                            <div>
                              <span className="text-[10px] font-bold text-[#11201b] block mb-1.5">Turma</span>
                              <div className="flex flex-wrap gap-1.5">
                                {["8A", "8B", "9A", "9B", "10A"].map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setCoordenadorFilters(prev => ({ ...prev, turma: t }))}
                                    className={`px-3 py-1.5 rounded-lg border text-[9px] font-bold transition ${coordenadorFilters.turma === t ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#11201b]"}`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Hospital */}
                            <div>
                              <span className="text-[10px] font-bold text-[#11201b] block mb-1.5">Hospital</span>
                              <div className="flex flex-wrap gap-1.5">
                                {["H. Universitário", "Santa Casa", "H. das Clínicas"].map((h) => (
                                  <button
                                    key={h}
                                    type="button"
                                    onClick={() => setCoordenadorFilters(prev => ({ ...prev, hospital: h }))}
                                    className={`px-3 py-1.5 rounded-lg border text-[9px] font-bold transition ${coordenadorFilters.hospital === h ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#11201b]"}`}
                                  >
                                    {h}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Discipline */}
                            <div>
                              <span className="text-[10px] font-bold text-[#11201b] block mb-1.5">Disciplina</span>
                              <div className="flex flex-wrap gap-1.5">
                                {["Clínica", "Cirurgia", "Pediatria", "Cardiologia"].map((d) => (
                                  <button
                                    key={d}
                                    type="button"
                                    onClick={() => setCoordenadorFilters(prev => ({ ...prev, disciplina: d }))}
                                    className={`px-3 py-1.5 rounded-lg border text-[9px] font-bold transition ${coordenadorFilters.disciplina === d ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#11201b]"}`}
                                  >
                                    {d}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Status */}
                            <div>
                              <span className="text-[10px] font-bold text-[#11201b] block mb-1.5">Status</span>
                              <div className="flex flex-wrap gap-1.5">
                                {["Presente", "Atraso", "Falta", "Justificada"].map((s) => (
                                  <button
                                    key={s}
                                    type="button"
                                    onClick={() => setCoordenadorFilters(prev => ({ ...prev, status: s }))}
                                    className={`px-3 py-1.5 rounded-lg border text-[9px] font-bold transition ${coordenadorFilters.status === s ? "bg-[#1f6e54] text-white border-[#1f6e54]" : "bg-white border-[#e2e9e4] text-[#11201b]"}`}
                                  >
                                    {s}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => setCoordenadorScreen("dashboard")}
                            className="w-full bg-[#1f6e54] text-white text-xs font-bold py-2.5 rounded-xl mt-4 shadow hover:bg-[#1b6149] transition text-center"
                          >
                            Aplicar filtros • 48 alunos
                          </button>
                        </div>
                      )}

                      {/* COORDENADOR VIEW 4: RELATORIOS */}
                      {coordenadorScreen === "relatorios" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => setCoordenadorScreen("home")} className="text-xs text-[#1f6e54] font-bold">&larr; Voltar</button>
                              <h3 className="text-sm font-bold text-[#11201b]">Relatório</h3>
                            </div>
                            <span className="text-[8px] bg-[#1f6e54] text-white px-2 py-0.5 rounded uppercase font-bold font-[var(--font-mono)]">Maio • Turma 8A</span>
                          </div>

                          {/* Quick Summary row */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm text-left">
                              <span className="text-lg font-bold font-[var(--font-display)] text-[#c0463c]">11</span>
                              <span className="text-[8px] text-[#6f897d] font-bold block mt-0.5">Faltas</span>
                            </div>
                            <div className="bg-white border border-[#e2e9e4] rounded-xl p-3 shadow-sm text-left">
                              <span className="text-lg font-bold font-[var(--font-display)] text-[#c9892b]">18</span>
                              <span className="text-[8px] text-[#6f897d] font-bold block mt-0.5">Atrasos</span>
                            </div>
                          </div>

                          {/* Absences list */}
                          <div className="space-y-2 text-left">
                            <h4 className="text-[10px] font-[var(--font-mono)] text-[#6f897d] uppercase tracking-widest font-bold">Maiores ausências</h4>
                            
                            <div className="bg-white rounded-xl border border-[#e2e9e4] shadow-sm divide-y divide-[#e2e9e4]">
                              {/* student 1 */}
                              <div className="p-2.5 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="size-6 rounded-full bg-[#c0463c]/10 text-[#c0463c] flex items-center justify-center font-bold text-[9px]">JL</div>
                                  <span className="font-semibold text-[#11201b]">Júlia Lima</span>
                                </div>
                                <span className="text-[9px] text-[#6f897d] font-bold">4 faltas no mês</span>
                              </div>
                              
                              {/* student 2 */}
                              <div className="p-2.5 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="size-6 rounded-full bg-[#c9892b]/10 text-[#c9892b] flex items-center justify-center font-bold text-[9px]">RT</div>
                                  <span className="font-semibold text-[#11201b]">Rafael Teixeira</span>
                                </div>
                                <span className="text-[9px] text-[#6f897d] font-bold">2 faltas no mês</span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={handleExportPDF}
                            className="w-full bg-[#1f6e54] text-white text-xs font-bold py-2.5 rounded-xl shadow hover:bg-[#1b6149] transition text-center"
                          >
                            Exportar PDF
                          </button>
                        </div>
                      )}

                    </div>

                    {/* Coordenador Bottom Navigation */}
                    <div className="border-t border-[#e2e9e4] bg-white pt-2.5 pb-3 px-1 grid grid-cols-4 text-center shrink-0">
                      <button
                        onClick={() => setCoordenadorScreen("home")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${coordenadorScreen === "home" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                      >
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        <span className="text-[7.5px] font-bold">Painel</span>
                      </button>
                      <button
                        onClick={() => setCoordenadorScreen("dashboard")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${coordenadorScreen === "dashboard" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                      >
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                        <span className="text-[7.5px] font-bold">Alunos</span>
                      </button>
                      <button
                        onClick={() => setCoordenadorScreen("relatorios")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition ${coordenadorScreen === "relatorios" ? "text-[#1f6e54]" : "text-[#6f897d]"}`}
                      >
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        <span className="text-[7.5px] font-bold">Avisos</span>
                      </button>
                      <button
                        onClick={() => setCoordenadorScreen("home")}
                        className={`flex flex-col items-center gap-0.5 focus:outline-none transition text-[#6f897d]`}
                      >
                        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        <span className="text-[7.5px] font-bold">Perfil</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
