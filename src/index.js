var dictionary = {
    "A":[],
    "B":[],
    "C":[],
    "D":[],
    "E":[],
    "F":[],
    "G":[],
    "H":[],
    "I":[],
    "J":[],
    "K":[],
    "L":[],
    "M":[],
    "N":[],
    "O":[],
    "P":[],
    "Q":[],
    "R":[],
    "S":[],
    "T":[],
    "U":[],
    "V":[],
    "W":[],
    "X":[],
    "Y":[],
    "Z":[]
}

function inDictionary(word_input, letter){
    var word_input = word_input.toLowerCase();
    var key = dictionary[letter];
    return key.includes(word_input);
}

