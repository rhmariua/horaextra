/* =====================================================================
   CONFIGURAÇÃO DO SISTEMA DE HORA EXTRA – MARIUÁ
   Edite só este arquivo. Depois de salvar, publique a pasta de novo.

   Sem SUPABASE_URL/KEY o sistema abre em MODO DEMONSTRAÇÃO
   (dados ficam só no navegador de quem está testando).
   ===================================================================== */
window.HE_CONFIG = {
  // Supabase > Project Settings > API
  SUPABASE_URL: "https://kdyjlzgnahvhiypidfdy.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_LfX2llpOnq7D-gx43QZmjw_a5iPPKlH",   // chave pública (NUNCA use a secret)

  EMPRESA: "MARIUA CONSTRUCAO E ENERGIA LTDA",
  MUNICIPIO_PADRAO: "",

  // Bases: ao escolher a base, o município é preenchido sozinho
  BASES: [
    { nome: "Aracaju",          municipio: "Aracaju - SE" },
    { nome: "Congonhal",        municipio: "Congonhal - MG" },
    { nome: "Feira de Santana", municipio: "Feira de Santana - BA" },
    { nome: "Irecê",            municipio: "Irecê - BA" },
    { nome: "Itajubá",          municipio: "Itajubá - MG" },
    { nome: "Jacobina",         municipio: "Jacobina - BA" },
    { nome: "Serrinha",         municipio: "Serrinha - BA" }
  ],

  CONTRATOS: [
    "Energisa Aracaju",
    "Neoenergia Coelba",
    "Cemig",
    "Frota",
    "Administrativo",
    "Outro"
  ],

  MOTIVOS: [
    "Atendimento emergencial",
    "Conclusão de serviço programado",
    "Desligamento programado",
    "Recomposição de rede",
    "Demanda da concessionária",
    "Fechamento administrativo",
    "Outro"
  ],

  CARGOS: [
    "Eletricista de rede",
    "Eletricista líder",
    "Encarregado de turma",
    "Motorista operador",
    "Técnico de segurança",
    "Auxiliar administrativo"
  ]
};
