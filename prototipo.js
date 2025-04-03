let valor = 0;

const alfabetoMorse = {
    "A": "._",    "B": "_...",  "C": "_._.",  "D": "_..",   "E": ".",
    "F": ".._.",  "G": "__.",   "H": "....",  "I": "..",    "J": ".___",
    "K": "_._",   "L": "._..",  "M": "__",    "N": "_.",    "O": "___",
    "P": ".__.",  "Q": "__._",  "R": "._.",   "S": "...",   "T": "_",
    "U": ".._",   "V": "..._",  "W": ".__",   "X": "_.._",  "Y": "_.__",
    "Z": "__.."
};

// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para converter para código Morse
function converterParaMorse(texto) {
    let textoSemAcento = removerAcentos(texto.toUpperCase());
    return textoSemAcento.split('').map(caractere => 
        alfabetoMorse[caractere] || caractere // Mantém caracteres desconhecidos
    ).join(' ');
}

// Testando com acentos e caracteres desconhecidos
console.log(converterParaMorse("Olá, você está bem?"));


valor = prompt("Digite algo: "); alert(`"${valor.toUpperCase()}" em código morse é:\n`+converterParaMorse(valor));
