var text = "Hola que tal, bienvenidos a BettaTech. Si os está gustando este video, suscribiros y darle a like y a la campanita para ver los nuevos videos que vaya subiendo!";
function normalize(word) {
    return word.toLocaleLowerCase().replace(/[.!,]/g, "");
}
function wordRepetitions(text) {
    var dict = {};
    var separatedWords = text.split(" ");
    for (var _i = 0, separatedWords_1 = separatedWords; _i < separatedWords_1.length; _i++) {
        var word = separatedWords_1[_i];
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        }
        else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(text);
    console.log(dict);
}
wordRepetitions(text);
