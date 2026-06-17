// DATA INJETADA CONFORME DIRETRIZ CORPORATIVA
const DIARIO_CONTEXTO = {
    dataHoje: "17 de Junho de 2026",
    fatoHistorico: "Em 17 de junho de 1909, nascia Maria Lenk, primeira mulher sul-americana a disputar os Jogos Olímpicos e ícone do esporte nacional."
};

// ACERVO DE MANUAIS (TESE TRIBUTÁRIA EDITORIAL SVA)
const acervoManuais = [
    { id: 1, titulo: "Manual Prático de Direitos Civis no Século XXI", publico: "PF", tipo: "Livro Digital", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400", desc: "Análise de garantias fundamentais do cidadão." },
    { id: 2, titulo: "Dossiê Cultura e Identidade Afro-Brasileira", publico: "PF", tipo: "Edição Especial", img: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400", desc: "Artigos analíticos e resgate histórico cultural." },
    { id: 3, titulo: "Guia Corporativo de Tecnologias Exponenciais B2B", publico: "PJ", tipo: "Relatório Empresarial", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", desc: "O impacto da Inteligência Artificial nos modelos de negócios." },
    { id: 4, titulo: "Relatório Econômico: Engenharia de Processos e Margem", publico: "PJ", tipo: "Estudo de Caso", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400", desc: "Otimização de resultados para médias e grandes empresas." }
];

// ACERVO DE CURSOS (BENEFÍCIO COMPLEMENTAR)
const acervoCursos = [
    { id: 101, titulo: "Estratégia de Alavancagem e Posicionamento de Mercado", horas: "20h", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400", desc: "Aprenda a mapear oportunidades e conquistar espaço no mercado competitivo." },
    { id: 102, titulo: "Liderança de Impacto e Comunicação Positiva", horas: "15h", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400", desc: "Desenvolva times de alta performance focados em resultados sustentáveis." }
];

// FEED REVISTA GLOBAL
const feedRevista = [
    { id: 1, tipo: "Revista Digital (PDF)", titulo: "Revista Global - Edição Especial Junho 2026", meta: "64 páginas • Conteúdo Didático Editorial" },
    { id: 2, tipo: "Vídeo / Painel", titulo: "Painel Global: O Futuro da Educação Híbrida e Desenvolvimento", meta: "YouTube @RevistaGlobal_BR" }
];

let usuarioLogado = { nome: "Geraldo Santiago", plano: "Assinatura Acervo Global & Hub Conteúdo SVA", iniciais: "GS" };

// CONTROLE DE INTERFACE
function ativarSecao(secaoId) {
    fecharSecoes();
    const secao = document.getElementById(secaoId);
    if(secao) {
        secao.classList.remove('hidden');
        secao.scrollIntoView({ behavior: 'smooth' });
    }
    
    if(secaoId === 'secao-noticias') carregarNoticias();
    if(secaoId === 'secao-cursos') carregarCursos();
    if(secaoId === 'secao-manuais') filtrarManuais('Todos');
}

function fecharSecoes() {
    document.querySelectorAll('.sub-secao').forEach(s => s.classList.add('hidden'));
}

function filtrarManuais(segmento) {
    document.getElementById('secao-manuais').classList.remove('hidden');
    const container = document.getElementById('container-manuais');
    const titulo = document.getElementById('titulo-segmento');
    container.innerHTML = "";

    titulo.innerText = segmento === 'Todos' ? "Manuais e Guias Práticos" : `Manuais Práticos — Perfil ${segmento}`;

    const filtrados = segmento === 'Todos' ? acervoManuais : acervoManuais.filter(m => m.publico === segmento);

    filtrados.forEach(m => {
        container.innerHTML += `
            <div class="card-item">
                <img src="${m.img}" alt="${m.titulo}">
                <div class="card-info">
                    <span class="badge-card">${m.tipo} • ${m.publico}</span>
                    <h4>${m.titulo}</h4>
                    <p>${m.desc}</p>
                    <button class="btn-ver" onclick="alert('Acessando acervo digital imune.')">Ler Conteúdo</button>
                </div>
            </div>
        `;
    });
    document.getElementById('secao-manuais').scrollIntoView({ behavior: 'smooth' });
}

function carregarNoticias() {
    const container = document.getElementById('container-noticias');
    container.innerHTML = feedRevista.map(n => `
        <div class="card-news-editorial">
            <div class="news-icon">📰</div>
            <div>
                <span class="news-tag">${n.tipo}</span>
                <h4>${n.titulo}</h4>
                <small>${n.meta}</small>
            </div>
        </div>
    `).join('');
}

function carregarCursos() {
    const container = document.getElementById('container-cursos');
    container.innerHTML = acervoCursos.map(c => `
        <div class="card-item">
            <img src="${c.img}" alt="${c.titulo}">
            <div class="card-info">
                <span class="badge-card">Curso • ${c.horas}</span>
                <h4>${c.titulo}</h4>
                <p>${c.desc}</p>
                <button class="btn-ver" onclick="alert('Iniciando trilha de desenvolvimento.')">Acessar Aula</button>
            </div>
        </div>
    `).join('');
}

function togglePerfil() { document.getElementById("painel-perfil").classList.toggle("hidden"); }

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("user-avatar").innerText = usuarioLogado.iniciais;
    document.getElementById("user-name").innerText = usuarioLogado.nome;
    document.getElementById("user-plano").innerText = usuarioLogado.plano;
    
    // Injeta os dados diários históricos
    document.getElementById("widget-data").innerText = DIARIO_CONTEXTO.dataHoje;
    document.getElementById("widget-fato").innerHTML = `<strong>Hoje na História:</strong> ${DIARIO_CONTEXTO.fatoHistorico}`;
});
