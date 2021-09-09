let text = "Hola que tal, bienvenidos a BettaTech. Si os está gustando este video, suscribiros y darle a like y a la campanita para ver los nuevos videos que vaya subiendo!";
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