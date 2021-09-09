let text = "Hola que tal, este es un ejemplo sobre como trabajar con tablas de hash. Este es un texto de ejemplo, tengo que contar cuantas veces se repite cada palabra de este texto.";
function normalize(word: string) {
    return word.toLocaleLowerCase().replace(/[.!,]/g, "");
}
function wordRepetitions(text: string) {
    let dict : {[key: string]: number} = {};
    let separatedWords = text.split(" ");
    for (let word of separatedWords) {
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        } else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(text);
    console.log(dict);
}


wordRepetitions(text);