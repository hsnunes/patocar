/** Geral JS */

/** Array de Objetos dos dados da aplicação - Geral */
const data_base = [
    {
        id: 1,
        artista: 'Verequete',
        imagem: 'verequete.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Chama Verequete',
                genero: 'Carimbó',
                tom: 'Bb',
                created_at: '2025-02-10'
            },
            {
                id: 2,
                titulo: 'Sereia do mar',
                genero: 'Carimbó',
                tom: 'Gm',
                created_at: '2025-02-10'
            },
            {
                id: 3,
                titulo: 'O Carimbó não morreu',
                genero: 'Carimbó',
                tom: 'C',
                created_at: '2025-02-10'
            },
            {
                id: 4,
                titulo: 'Morena penteia o cabelo',
                genero: 'Carimbó',
                tom: 'F',
                created_at: '2025-02-10'
            },
            {
                id: 5,
                titulo: 'Eu vou só',
                genero: 'Carimbó',
                tom: 'Gm',
                created_at: '2025-02-10'
            },
            {
                id: 6,
                titulo: 'Ilha do Marajó',
                genero: 'Carimbó',
                tom: 'F',
                created_at: '2025-02-10'
            },
            {
                id: 7,
                titulo: 'Corre Garotinho',
                genero: 'Carimbó',
                tom: 'B',
                created_at: '2025-02-10'
            },
            {
                id: 8,
                titulo: 'Apresentando Belém do Pará',
                genero: 'Carimbó',
                tom: 'Bb',
                created_at: '2025-02-10'
            },
            {
                id: 9,
                titulo: 'O pescador',
                genero: 'Carimbó',
                tom: 'Gm',
                created_at: '2025-02-10'
            },
            {
                id: 10,
                titulo: 'Verequete da coluna',
                genero: 'Carimbó',
                tom: 'E',
                created_at: '2025-02-10'
            },
            {
                id: 11,
                titulo: 'A camisa de murim',
                genero: 'Carimbó',
                tom: 'F',
                created_at: '2025-03-25'
            },
            {
                id: 12,
                titulo: 'Boa noite senhores e senhoras',
                genero: 'Carimbó',
                tom: 'Fm',
                created_at: '2025-03-25'
            },
            {
                id: 13,
                titulo: 'Lembrando o Limoeiro',
                genero: 'Carimbó',
                tom: 'F',
                created_at: '2025-03-25'
            },
            {
                id: 14,
                titulo: 'Cachorro caçador',
                genero: 'Carimbó',
                tom: 'F',
                created_at: '2025-03-25'
            },
            {
                id: 14,
                titulo: 'Borboleta da asa amarela',
                genero: 'Carimbó',
                tom: 'Fm',
                created_at: '2025-03-25'
            }
        ]
    },
    {
        id: 2,
        artista: 'Pinduca',
        imagem: 'pinduca.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Carimbó do macaco',
                genero: 'Carimbó',
                tom: 'G',
                created_at: '2025-02-10'
            },
            { 
                id: 2,
                titulo: 'Sinhá Pureza',
                genero: 'Carimbó',
                tom: 'Cm',
                created_at: '2025-02-10'
            },
            { 
                id: 3,
                titulo: 'Dança do carimbó',
                genero: 'Carimbó',
                tom: 'G',
                created_at: '2025-02-10'
            },
            { 
                id: 4,
                titulo: 'Garota do tacacá',
                genero: 'Carimbó',
                tom: 'D',
                created_at: '2025-02-10'
            },
            { 
                id: 5,
                titulo: 'Quem Vai ao Pará, Parou',
                genero: 'Carimbó',
                tom: 'D',
                created_at: '2025-02-10'
            }
        ]
    },
    {
        id: 3,
        artista: 'Dona Onete',
        imagem: 'dona-onete.jpg',
        musicas: [
            { 
                id: 2,
                titulo: 'Carimbó chamegado',
                genero: 'Carimbó',
                tom: 'C',
                created_at: '2025-02-10'
            },
            { 
                id: 3,
                titulo: 'Jamburana',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-10'
            },
            { 
                id: 4,
                titulo: 'Mistura Pai D`égua',
                genero: 'Carimbó',
                tom: 'C',
                created_at: '2025-02-10'
            },
            { 
                id: 5,
                titulo: 'Moreno Morenado',
                genero: 'Carimbó',
                tom: 'C',
                created_at: '2025-02-10'
            },
            { 
                id: 1,
                titulo: 'No meio do pitiú',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-10'
            }
        ]
    },
    {
        id: 4,
        artista: 'Mestre Lucindo',
        imagem: 'mestre-lucindo.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Lua luar',
                genero: 'Carimbó',
                tom: 'Gm',
                created_at: '2025-02-10'
            },
            { 
                id: 2,
                titulo: 'Menina bonita',
                genero: 'Carimbó',
                tom: 'Bb',
                created_at: '2025-02-10'
            },
            { 
                id: 3,
                titulo: 'Fita verde',
                genero: 'Carimbó',
                tom: 'A',
                created_at: '2025-02-10'
            },
            { 
                id: 5,
                titulo: 'Roda pião',
                genero: 'Carimbó',
                tom: 'A',
                created_at: '2025-02-10'
            },
            { 
                id: 4,
                titulo: 'Pescador, pescador',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-02-10'
            }
        ]
    },
    {
        id: 5,
        artista: 'Muxinga',
        imagem: 'muxinga.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Carimbolando com Juliana',
                genero: 'Carimbó',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 2,
                titulo: 'Bela',
                genero: 'Carimbó',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 3,
                titulo: 'Rosas de carimbó',
                genero: 'Carimbó',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 4,
                titulo: 'Minha Ilha',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-02-21'
            },
            { 
                id: 5,
                titulo: 'Cantando esse boi',
                genero: 'Boi bumbá',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 6,
                titulo: 'Farra dos Boiadeiros',
                genero: 'Boi bumbá',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 7,
                titulo: 'Toque de Mestre',
                genero: 'Boi bumbá',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 8,
                titulo: 'Feitiço',
                genero: 'Carimbó',
                tom: 'Dm',
                created_at: '2025-02-21'
            },
            { 
                id: 9,
                titulo: 'Sem pitiú',
                genero: 'Carimbó',
                tom: 'Fm',
                created_at: '2025-02-21'
            }
        ]
    },
    {
        id: 6,
        artista: 'Canto Caboclo',
        imagem: 'canto-caboclo.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Água no pote',
                genero: 'Merengue',
                tom: 'F',
                created_at: '2025-02-21'
            },
            { 
                id: 2,
                titulo: 'Amor de Tambor',
                genero: 'Carimbó',
                tom: 'E',
                created_at: '2025-02-21'
            },
            { 
                id: 3,
                titulo: 'Aninga',
                genero: 'Coco',
                tom: 'C',
                created_at: '2025-02-21'
            },
            { 
                id: 4,
                titulo: 'Batelo',
                genero: 'Marabaixo',
                tom: 'E',
                created_at: '2025-02-21'
            },
            { 
                id: 5,
                titulo: 'Banzeiro',
                genero: 'Ciranda',
                tom: 'C',
                created_at: '2025-02-21'
            },
            { 
                id: 6,
                titulo: 'Beata',
                genero: 'Boi bumbá',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 7,
                titulo: 'Benzedeira',
                genero: 'Coco',
                tom: 'D',
                created_at: '2025-02-21'
            },
            { 
                id: 8,
                titulo: 'Matinta',
                genero: 'Samba Reggae',
                tom: 'A',
                created_at: '2025-02-21'
            },
            { 
                id: 9,
                titulo: 'Tambor',
                genero: 'Marabaixo',
                tom: 'C',
                created_at: '2025-02-21'
            },
            { 
                id: 10,
                titulo: 'Utensílios caboclos',
                genero: 'Carimbó',
                tom: 'Gm',
                created_at: '2025-02-21'
            },
            { 
                id: 11,
                titulo: 'Tia Dilce',
                genero: 'Samba',
                tom: 'Dm',
                created_at: '2025-02-21'
            },
            { 
                id: 12,
                titulo: 'Vamos?',
                genero: 'Ijexá',
                tom: 'F',
                created_at: '2025-02-21'
            },
            { 
                id: 138,
                titulo: 'Cotijuba',
                genero: 'Cumbia',
                tom: 'Em',
                created_at: '2025-02-21'
            }
        ]
    },
    {
        id: 7,
        artista: 'Cuité Marambaia',
        imagem: 'cuite-marambaia.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Batuque da praça',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 2,
                titulo: 'Tubarão Vegano',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 3,
                titulo: 'Carimbó manifesto',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 4,
                titulo: 'Urubú xique',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            }
        ]
    },
    {
        id: 8,
        artista: 'Lourival Igarapé',
        imagem: 'lourival-igarape.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Chuva de sapos',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 2,
                titulo: 'Velório do caranguejo',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 3,
                titulo: 'Flores pra Yemanjá',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 4,
                titulo: 'Pajezinho',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 5,
                titulo: 'Primeiro vento',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-02-21'
            },
            { 
                id: 6,
                titulo: 'Queimadas',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-02-21'
            },
            { 
                id: 7,
                titulo: 'Aroma e fé',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-03-31'
            },
            { 
                id: 8,
                titulo: 'Gaiola',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-03-31'
            },
            { 
                id: 9,
                titulo: 'Raio de luz',
                genero: 'Mantra',
                tom: 'Cm',
                created_at: '2025-03-31'
            },
            { 
                id: 10,
                titulo: 'Mistura de terreiro',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-03-31'
            }
        ]
    },
    {
        id: 9,
        artista: 'Mestre Pedrinho',
        imagem: 'mestre-pedrinho.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Briguei com tubarão',
                genero: 'Carimbó',
                tom: 'E',
                created_at: '2025-03-26'
            },
            { 
                id: 2,
                titulo: 'Floresta Encantada',
                genero: 'Carimbó',
                tom: 'G',
                created_at: '2025-03-26'
            },
            { 
                id: 3,
                titulo: 'Gavião ou Condor',
                genero: 'Carimbó',
                tom: 'Dm',
                created_at: '2025-03-26'
            },
            { 
                id: 4,
                titulo: 'Pescador de Sereia',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-03-26'
            },
            { 
                id: 5,
                titulo: 'Xibante',
                genero: 'Carimbó',
                tom: 'A',
                created_at: '2025-03-26'
            }
        ]
    },
    {
        id: 10,
        artista: 'Mestre Ginja',
        imagem: 'mestre-ginja.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Toque de Amor',
                genero: 'Merengue',
                tom: 'D',
                created_at: '2025-03-26'
            },
            { 
                id: 2,
                titulo: 'Zabumba na praia',
                genero: 'Coco',
                tom: 'D',
                created_at: '2025-03-26'
            },
            { 
                id: 3,
                titulo: 'Onça comendo bode',
                genero: 'Guitarrada',
                tom: 'C',
                created_at: '2025-03-26'
            },
            { 
                id: 5,
                titulo: 'O canto do boto',
                genero: 'Carimbó',
                tom: 'Em',
                created_at: '2025-03-26'
            },
            { 
                id: 6,
                titulo: 'Viagem Marajoara',
                genero: 'Carimbó',
                tom: 'E',
                created_at: '2025-03-26'
            },
            { 
                id: 7,
                titulo: 'Nativos da ilha',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-03-26'
            },
            { 
                id: 8,
                titulo: 'Moreninha Faceira',
                genero: 'Carimbó',
                tom: 'Bm',
                created_at: '2025-03-26'
            },
            { 
                id: 9,
                titulo: 'Rastro de Sereia',
                genero: 'Carimbó',
                tom: 'Am',
                created_at: '2025-03-26'
            },
            { 
                id: 10,
                titulo: 'Menina bonita de Cametá',
                genero: 'Carimbó',
                tom: 'F',
                created_at: '2025-03-26'
            },
            { 
                id: 11,
                titulo: 'Belém, Belém',
                genero: 'Xote',
                tom: 'Cm',
                created_at: '2025-03-26'
            },
            { 
                id: 12,
                titulo: 'Neguinha do sertão',
                genero: 'Xote',
                tom: 'Em',
                created_at: '2025-03-26'
            },
            { 
                id: 13,
                titulo: 'Só sei que vou te amar',
                genero: 'Xote',
                tom: 'Dm',
                created_at: '2025-03-26'
            },
            { 
                id: 14,
                titulo: 'Túnel da Mangueira',
                genero: 'Samba-reggae',
                tom: 'E',
                created_at: '2025-03-26'
            },
            { 
                id: 4,
                titulo: 'Canoa me leva',
                genero: 'Carimbó',
                tom: 'Dm',
                created_at: '2025-03-26'
            }
        ]
    },
    {
        id: 11,
        artista: 'Boi Vagalume',
        imagem: 'boi-vagalume.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Lá vem meu boi',
                genero: 'Boi-bumbá',
                tom: 'D',
                created_at: '2025-03-31'
            },
            { 
                id: 2,
                titulo: 'Levantou a poeira',
                genero: 'Boi-bumbá',
                tom: 'Dm',
                created_at: '2025-03-31'
            },
            { 
                id: 3,
                titulo: 'Vagalume rompe a porteira',
                genero: 'boi-bumbá',
                tom: 'Fm',
                created_at: '2025-03-31'
            },
            { 
                id: 4,
                titulo: 'Pra brilhar pro mundo inteiro',
                genero: 'boi-bumbá',
                tom: 'Em',
                created_at: '2025-03-31'
            },
            { 
                id: 5,
                titulo: 'Vagalume mantém tradição',
                genero: 'boi-bumbá',
                tom: 'Em',
                created_at: '2025-03-26'
            },
            { 
                id: 6,
                titulo: 'Marambaia um país',
                genero: 'boi-bumbá',
                tom: 'Fm',
                created_at: '2025-03-26'
            }
        ]
    },
    {
        id: 12,
        artista: 'Carimbó Selvagem',
        imagem: 'carimbo-selvagem.jpg',
        musicas: [
            { 
                id: 1,
                titulo: 'Carimbó de rua',
                genero: 'Carimbó',
                tom: 'G',
                created_at: '2025-04-01'
            },
            { 
                id: 2,
                titulo: 'Na pressão',
                genero: 'Carimbó',
                tom: 'G',
                created_at: '2025-04-01'
            },
            { 
                id: 3,
                titulo: 'O couro come',
                genero: 'Carimbó',
                tom: 'G',
                created_at: '2025-04-01'
            },
            { 
                id: 4,
                titulo: 'Mangueio no veropa',
                genero: 'Carimbó',
                tom: 'Bb',
                created_at: '2025-04-01'
            }
        ]
    }
];

const generos = [
    'Carimbó',
    'Boi bumbá',
    'Ijexá',
    'Merengue',
    'Cúmbia',
    'Marabaixo',
    'Samba',
    'Samba Reggae',
    'Ciranda',
    'Coco'
];

function renderIndex (base) {
    renderTitlePage();
    renderTotal(base, generos);
    renderNavArtistas(base);
    renderArtistasRecentes (base);
    renderMusicasRecentes(base);
}

function renderPageArtist(base, artista) {
    const baseArtist = getBaseArtista(base, artista);
    const artist = baseArtist.artista;
    const titlePage = artist;
    renderTitlePage(titlePage);
    renderNavArtistas(base, false);
    breadcrumbPages([artist]);
    renderMusicasOrdemAlpha(baseArtist);
}

function renderPageMusicArtist (base, data = []) {
    const baseArtist = getBaseArtista(base, data[0]);
    const musicArtist = getMusicaBaseArtista(baseArtist, data[1]);
    const titleArtista = `${baseArtist.artista} - ${musicArtist.titulo}`;
    renderTitlePage(titleArtista);
    renderNavArtistas(base, false);
    breadcrumbPages([baseArtist.artista, musicArtist.titulo]);
    renderInfoMusica(baseArtist, musicArtist);
}

function renderTitlePage (title = 'PAtocar o Pará!') {
    let elemTitle = document.querySelector('title');
    elemTitle.innerHTML = 'PAtocar | '+title;
}

function renderNavArtistas(base, pageIndex = true) {
    baseOrdemAlpha(base);
    let listArtists = '';
    pathPointer = pageIndex == true ? '' : '.';
    let dropWrapper = document.querySelector('#dropArtistas');
    base.forEach(el => {
        listArtists += `<li><a class="dropdown-item" href=".${pathPointer}/${cleanSlug(el.artista)}">${el.artista}</a></li>`;
    });
    dropWrapper.innerHTML = listArtists;
}

function renderTotal (base, generos) {
    let totais = document.querySelector('#countTotal');
    let totalGeneros = generos.length;
    let totalArtistas = data_base.length;
    let totalMusicas = 0;
    base.forEach(el => {
        totalMusicas += el.musicas.length;
    });
    totais.innerHTML = `
    <li>Artistas <span class="badge bg-danger count fs-5" data-number="${totalArtistas}">0</span></li>
    <li>Músicas <span class="badge bg-danger count fs-5" data-number="${totalMusicas}">0</span></li>
    <li>Gêneros <span class="badge bg-danger count fs-5" data-number="${totalGeneros}">0</span></li>
    `;
}

function renderArtistasRecentes (base) {
    baseOrdemNumber(base);
    // const novaBase = base.slice(0, 12);
    listArtist = '';
    let listRecentArtists = document.querySelector('#wrapperRecentArtists');
    base.forEach(el => {
        listArtist += `
        <div class="col-6 col-md-3">
            <div class="card">
                <a href="./${cleanSlug(el.artista)}">
                    <img class="img-fluid" src="./img/${cleanSlug(el.artista)}.jpg" alt="Artista: ${el.artista}">
                </a>
                <div class="card-body text-center p-1">
                    <a href="./${cleanSlug(el.artista)}" class="text-decoration-none fw-bold link-dark">${el.artista}</a>
                </div>
            </div>
        </div>
        `;
    });
    listRecentArtists.innerHTML = '<h6>Artistas Recentes:</h6>' + listArtist;
};

function renderMusicasRecentes (base) {
    baseOrdemNumber(base);
    const novaBase = base.slice(0, 8);
    let list = '';
    let listRecentMusics = document.querySelector('#wrapperRecentMusics');
    novaBase.forEach(el => {
        let artista = el.artista;
        let musica = el.musicas[el.musicas.length -1].titulo;
        list += `
        <div class="col d-flex">
            <a href="./${cleanSlug(artista)}/${cleanSlug(musica)}.html">
                <img height="54" class="rounded-circle" alt="avatar1" src="./img/${cleanSlug(artista)}.jpg" />
            </a>
            <div class="pb-3 mb-0 mx-2 small lh-sm w-100">
                <div class="d-flex justify-content-between">
                <a href="./${cleanSlug(artista)}/${cleanSlug(musica)}.html" class="text-decoration-none link-primary fw-bold">${artista}</a>
                </div>
                <a href="./${cleanSlug(artista)}/${cleanSlug(musica)}.html" class="text-decoration-none link-dark">${musica}</a>
            </div>
        </div>
        `;
    });
    listRecentMusics.innerHTML = list;
}

function breadcrumbPages (bread = []) {
    bread.unshift('index.html');
    let li = '';
    let total = bread.length;
    for (let i = 0; i < total; i++) {
        let text = bread[i] === 'index.html' ? 'Início' : bread[i];
        let path = bread[i] === 'index.html' ? 'index.html' : cleanSlug(bread[i]);
        let link = i < total - 1 ? `<a href="../${path}">${text}</a>` : bread[i];
        let active = i == total - 1 ? ' active" aria-current="page' : '';
        li += `<li class="breadcrumb-item${active}">${link}</li>`;
    }
    let liBread = document.querySelector('#breadcrumbPages');
    liBread.innerHTML = li;
}

function cleanSlug(str) {
    str = str.toLowerCase();
    str = str.normalize("NFD");
    str = str.replace(/[^a-zA-Z\s]/g, '');
    return str.replace(/ /g, '-');
}

function renderInfoMusicArtist (id) {}

function renderMusicasOrdemAlpha (base) {
    // console.log('REsult: ', base.musicas);
    let wrapperMusica = document.querySelector('#musicasArtista');
    let imgArtista = document.querySelector('#musicasArtista img');
    let tituloArtista = document.querySelector('#musicasArtista h4');
    let artistaPath = cleanSlug(base.artista);
    let listMusicas = '';
    let musicas = baseOrdemAlpha(base.musicas, 'titulo');
    // console.log(base);
    musicas.forEach(el => {
        listMusicas += `
            <li class="list-group-item p-2">
              <a href="../${artistaPath}/${ cleanSlug(el.titulo) }.html" class="text-decoration-none link-primary fw-bold">${el.titulo}</a>
            </li>
        `;
    });
    imgArtista.setAttribute('src', '../img/' + base.imagem);
    imgArtista.setAttribute('alt', 'Artista Paraense ' + base.artista);
    tituloArtista.textContent = base.artista;
    document.querySelector('#musicasArtista ul').innerHTML = listMusicas;
}

function renderInfoMusica (artista, musica) {
    let wrapperMusica = document.querySelector('#musicasArtista');
    let imgArtista = document.querySelector('#musicasArtista .imgArtista');
    let tituloArtista = document.querySelector('#musicasArtista h4');
    let infoMusica = document.querySelector('#musicasArtista .infoMusica');
    imgArtista.setAttribute('src', '../img/' + artista.imagem);
    imgArtista.setAttribute('alt', 'Artista Paraense ' + artista.artista);
    tituloArtista.textContent = artista.artista;
    infoMusica.innerHTML = `${musica.titulo}<span class="d-block font-monospace p-0 m-0">Tom: <b class="pa_cifra">${musica.tom}</b></span>`;
}

function getMusicaBaseArtista (base, musica) {
    getMusica = '';
    base.musicas.forEach(el => {
        if (cleanSlug(el.titulo) === cleanSlug(musica)) {
            getMusica = el;
            return;
        }
    });
    return getMusica;
}

function getBaseArtista (base, artista) {
    getBase = '';
    base.forEach(el => {
        if (el.artista.toLowerCase() === artista.toLowerCase()) {
            getBase = el;
            return;
        }
    });
    return getBase;
}

function baseOrdemAlpha (base, field = 'artista') {
    base.sort(function (a, b) {
        if ( field == 'artista') { return a.artista.localeCompare(b.artista); }
        if ( field == 'titulo') { return a.titulo.localeCompare(b.titulo); }
    });
    return base;
}

function baseOrdemNumber(base) {
    base.sort(function (a, b) {
        return b.id - a.id;
    });
}
