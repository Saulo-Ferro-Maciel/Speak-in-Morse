let valor = 0;

const alfabetoMorse = {
    "A": "._",    "B": "_...",  "C": "_._.",  "D": "_..",   "E": ".",
    "F": ".._.",  "G": "__.",   "H": "....",  "I": "..",    "J": ".___",
    "K": "_._",   "L": "._..",  "M": "__",    "N": "_.",    "O": "___",
    "P": ".__.",  "Q": "__._",  "R": "._.",   "S": "...",   "T": "_",
    "U": ".._",   "V": "..._",  "W": ".__",   "X": "_.._",  "Y": "_.__",
    "Z": "__.."
};

// Criar um mapa reverso para decodificação
const morseParaTexto = Object.fromEntries(
    Object.entries(alfabetoMorse).map(([letra, morse]) => [morse, letra])
);

// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para converter para código Morse
function converterParaMorse(texto, sentido) {
    let textoSemAcento = removerAcentos(texto.toUpperCase());
    
    if (sentido === 0) { 
        // Texto → Morse
        return textoSemAcento.split('').map(caractere => alfabetoMorse[caractere] || caractere).join(' ');
    }

    if (sentido === 1) { 
        // Morse → Texto
        return textoSemAcento.split(' ').map(morse => morseParaTexto[morse] || morse).join(''); 
    }
}

//Teste para converter TEXTO para MORSE:
valor = prompt("Digite algo: "); alert(`"${valor.toUpperCase()}" em código morse é:\n`+converterParaMorse(valor,0));
// Tete para converter MORSE para TEXTO:
valor = prompt("Digite algo: "); alert(`"${valor.toUpperCase()}" em texto traduzido é:\n`+converterParaMorse(valor,1));