// Benutzereingabe

const inputPhrase = process.argv.slice(2).join(' ');                  // verkettet alle Inhalte aus dem Array in einem neuen String, slice sorgt hier dafür, das nur das Argument herauskommt  

// Ausgabe
    const translatedPhrase = translatePhraseToPigLatin(inputPhrase);  //Ergebnis ist der return von translatePhrasetoPigLatin
    console.log(translatedPhrase);



// Funktionen für den pigLatinTranslator

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());  //isVouwel gibt mir an ob ein Wert ein Vokal ist oder nicht
}

function translateWordToPigLatin(word) {
    if (isVowel(word[0])) {                                         //erste Indexstelle ein Vokal?
        return word + 'way';                                        
    } else if (!isVowel(word[0]) && isVowel(word[1])) {             //erste Stelle kein Vokal aber die 2.?
        return word.slice(1) + word[0] + 'ay';                      //nehme den 1. Indexeintrag weg und füge an das Wort hinten die 1 Stelle an + ay
    } else {
        return word.slice(2) + word.slice(0, 2) + 'ay';             //ansonsten nehme die ersten beiden Konsonanten und schiebe sie ans Ende +ay
    }
}

function translatePhraseToPigLatin(phrase) {
    const words = phrase.split(' ');                                //trennt die einzelnen Wörter an den Stellen an denen ein Leerzeichen steht
    const translatedWords = words.map(translateWordToPigLatin);     //wendet die obige Formel für jedes Wort an
    return translatedWords.join(' ');                               //bringt alle Ergebnisse von oben wieder zusammen in einen Satz
}



