// ==========================================
// ALLOHA HUB - INTELIGÊNCIA DE CONTEÚDO EDITORIAL
// ==========================================

// 1. BASE DE DADOS DO ACERVO DIGITAL (Dividido em PF e PJ para adequação fiscal)
const acervoDigital = [
    {
        id: 1,
        titulo: "Manual Prático de Direitos Humanos no Século XXI",
        publico: "PF",
        tipo: "Livro Digital Interativo",
        duracaoLeitura: "12h de leitura",
        progresso: 45,
        imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
        sinopse: "Compilado de estudos, jurisprudências e análises fundamentadas sobre a evolução dos direitos civis e garantias fundamentais do cidadão."
    },
    {
        id: 2,
        titulo: "Dossiê História e Cultura Afro-Brasileira",
        publico: "PF",
        tipo: "Edição Especial / Acervo",
        duracaoLeitura: "20h de leitura",
        progresso: 90,
        imagem: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400",
        sinopse: "Resgate histórico documental com artigos analíticos sobre a ancestralidade, movimentos artísticos e resistência cultural."
    },
    {
        id: 3,
        titulo: "Coletânea de Saúde Coletiva e Bem-Estar Pessoal",
        publico: "PF",
        tipo: "Manual Prático",
        duracaoLeitura: "6h de leitura",
        progresso: 0,
        imagem: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
        sinopse: "Artigos e diretrizes de especialistas sobre saúde preventiva, saúde mental e equilíbrio no cotidiano."
    },
    {
        id: 4,
        titulo: "Guia Corporativo de Introdução às Tecnologias Exponenciais",
        publico: "PJ",
        tipo: "Guia de Estudo Empresarial",
        duracaoLeitura: "8h de leitura",
        progresso: 0,
        imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
        sinopse: "Relatório técnico focado em empresas sobre o impacto da inteligência artificial, automação e transformação digital nos negócios."
    },
    {
        id: 5,
        titulo: "Relatório Econômico B2B: Trabalho, Renda e Sustentabilidade",
        publico: "PJ",
        tipo: "Estudo de Caso Avançado",
        duracaoLeitura: "10h de leitura",
        progresso: 15,
        imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
        sinopse: "Análise de dados macroeconômicos e estruturação de engenharia de processos para otimização de margem e resultados."
    }
];

// 2. BASE DE DADOS DA BIBLIOTECA DIGITAL (Revista Global - Conteúdo Imune)
const bibliotecaGlobal = {
    revistasPeriodicas: [
        { id: 101, titulo: "Revista Global - Edição Junho 2026", mes: "Junho/2026", paginas: 64, downloadUrl: "#" },
        { id: 102, titulo: "Revista Global - Edição Maio 2026", mes: "Maio/2026", paginas: 58, downloadUrl: "#" }
    ],
    ebooks: [
        { id: 201, titulo: "O Guia do Empreendedor Periférico", autor: "Equipe Revista Global", formato: "PDF / EPUB", capa: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300" },
        { id: 202, titulo: "Letramento Racial e Comunicação Positiva", autor: "Instituto GEN", formato: "PDF", capa: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300" }
    ],
    videosFeed: [
        { id: "v1", titulo: "Painel Global: O Futuro da Educação Híbrida em SP", data: "15/06/2026", duracao: "45 min", url: "https://www.youtube.com/@RevistaGlobal_BR" }
    ]
};

// 3. AGENDA DE EVENTOS E WORKSHOPS
const agendaEventos = [
    { id: 1, data: "20/06/2026", titulo: "Fórum Presencial de Empreendedorismo - Polo Mooca", horario: "09:00 - 13:00", tipo: "Presencial" },
    { id: 2, data: "24/06/2026", titulo: "Live Editorial: Análise do Novo Relatório de Trabalho & Renda", horario: "19:30", tipo: "Online" }
];

// 4. ESTADO DO USUÁRIO
let usuarioLogado = {
    nome: "Geraldo Santiago",
    email: "geraldo@tugb.com.br",
    plano: "Assinatura Híbrida Acervo Global & SVA",
    iniciais: "GS"
};

let filtroPublicoAtual = "Todos";

// ==========================================
// OPERAÇÃO DA INTERFACE (MUDANÇA DE ABAS E FILTROS)
// ==========================================

function mudarAba(abaId) {
    document.querySelectorAll('.aba-conteudo').forEach(aba => aba.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(abaId).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function filtrarPublico(publico, botao) {
    document.querySelectorAll('.filter-btn-publico').forEach(btn => btn.classList.remove('active'));
    botao.classList.add('active');
    
    filtroPublicoAtual = publico;
    carregarAcervo();
}

function carregarAcervo() {
    const container = document.getElementById("container-acervo");
    if (!container) return;
    container.innerHTML = "";

    const itensFiltrados = filtroPublicoAtual === "Todos" 
        ? acervoDigital 
        : acervoDigital.filter(item => item.publico === filtroPublicoAtual);

    if(itensFiltrados.length === 0) {
        container.innerHTML = `<p class="aviso-vazio">Nenhum manual disponível para este segmento.</p>`;
        return;
    }

    itensFiltrados.forEach(item => {
        container.innerHTML += `
            <div class="card-acervo">
                <img src="${item.imagem}" alt="${item.titulo}" class="capa-card">
                <div class="conteudo-card">
                    <span class="tag-publico ${item.publico.toLowerCase()}">${item.publico === 'PF' ? '👨‍💼 Pessoa Física' : '🏢 Pessoa Jurídica'}</span>
                    <span class="tag-tipo">${item.tipo}</span>
                    <h3>${item.titulo}</h3>
                    <p>${item.sinopse}</p>
                    <div class="meta-card">
                        <span>⏱️ ${item.duracaoLeitura}</span>
                    </div>
                    ${item.progresso > 0 ? `
                        <div class="barra-progresso-container">
                            <div class="barra" style="width: ${item.progresso}%"></div>
                            <span class="texto-progresso">${item.progresso}% lido</span>
                        </div>
                    ` : ''}
                    <button class="btn-acessar" onclick="abrirLeitura(${item.id})">Acessar Conteúdo</button>
                </div>
            </div>
        `;
    });
}

function carregarBibliotecaGlobal() {
    const secRevistas = document.getElementById("secao-revistas");
    const secEbooks = document.getElementById("secao-ebooks");
    const secVideos = document.getElementById("secao-videos");

    if (secRevistas) {
        secRevistas.innerHTML = bibliotecaGlobal.revistasPeriodicas.map(rev => `
            <div class="item-revista">
                <span class="icone-pdf">📰</span>
                <div>
                    <h4>${rev.titulo}</h4>
                    <small>Competência: ${rev.mes} • ${rev.paginas} páginas</small>
                </div>
                <a href="${rev.downloadUrl}" class="btn-download">Ler Online</a>
            </div>
        `).join('');
    }

    if (secEbooks) {
        secEbooks.innerHTML = bibliotecaGlobal.ebooks.map(eb => `
            <div class="card-ebook">
                <img src="${eb.capa}" alt="${eb.titulo}">
                <h5>${eb.titulo}</h5>
                <small>${eb.autor}</small>
                <span class="formato-tag">${eb.formato}</span>
            </div>
        `).join('');
    }

    if (secVideos) {
        secVideos.innerHTML = bibliotecaGlobal.videosFeed.map(vid => `
            <div class="item-video">
                <span class="play-thumb">▶️</span>
                <div>
                    <h4>${vid.titulo}</h4>
                    <small>Data: ${vid.data} • Duração: ${vid.duracao}</small>
                </div>
                <a href="${vid.url}" target="_blank" class="btn-assistir">Assistir</a>
            </div>
        `).join('');
    }
}

function carregarAgenda() {
    const container = document.getElementById("container-agenda");
    if (!container) return;
    
    container.innerHTML = agendaEventos.map(ev => `
        <div class="item-agenda">
            <div class="data-badge">
                <span>${ev.data.split('/')[0]}</span>
                <small>${ev.data.split('/')[1] === '06' ? 'JUN' : 'OUT'}</small>
            </div>
            <div class="info-evento">
                <h4>${ev.titulo}</h4>
                <p>⏰ ${ev.horario} | Tipo: <strong>${ev.tipo}</strong></p>
            </div>
        </div>
    `).join('');
}

function togglePerfil() {
    document.getElementById("painel-perfil").classList.toggle("hidden");
}

function abrirLeitura(id) {
    const item = acervoDigital.find(i => i.id === id);
    alert(`Abrindo interface de leitura do acervo: "${item.titulo}"\nSegmento: ${item.publico}`);
}

document.addEventListener("DOMContentLoaded", () => {
    carregarAcervo();
    carregarBibliotecaGlobal();
    carregarAgenda();
    
    document.getElementById("user-avatar").innerText = usuarioLogado.iniciais;
    document.getElementById("user-name").innerText = usuarioLogado.nome;
    document.getElementById("user-plano").innerText = `Plano: ${usuarioLogado.plano}`;
});
