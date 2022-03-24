/*
    Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".

    Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni
    necessarie per stampare la relativa card: Nome, Ruolo e Foto.

    Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli
    di ciascun componente.

    Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico,
    creando per ciascun membro del team un elemento che conterrà i suoi dati.

    BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
*/

let membri = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Carrol',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
];

// Milestone 1: stampa dei membri in console
for (let i = 0; i < membri.length; i++) {
    for (let key in membri[i]) {
        console.log(`${key}: ${membri[i][key]}`);
    }
    console.log('\n');
}

// Milestone 2: stampa su pagina html con stile
const members = document.getElementById("members-container");

for (let i = 0; i < membri.length; i++) {
    members.innerHTML += `<div class="col">
                            <div class="members-item">
                                <img src="img/${membri[i].foto}"></img>
                                <div class="member-text">
                                    <div class="text-name">${membri[i].nome}</div>
                                    <div class="text-role">${membri[i].ruolo}</div>
                                </div>
                            </div>
                        </div>
    `;
}

