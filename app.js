// T A S K  1
console.log('T A S K  1');

const ipsBetween = (start, end) => {
    const calc = (n, m = 1) => (end.split`.`[n] - start.split`.`[n]) * m;
  
    return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3);
};
console.log(ipsBetween('20.0.0.10', '20.0.1.0'));

// T A S K  2
console.log('T A S K  2');

function decodeMorse (morseCode) {
    let REF = { 
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    };
    let revREF = Object.fromEntries(Object.entries(REF).map(([key, value]) => [value, key]));
    return morseCode.trim().split('   ').map(a => a.split(' ').map(b => revREF[b]).join('')).join(' ');
};

let decoded = decodeMorse(".... . -.--   .--- ..- -.. .");

console.log(decoded);

// T A S K  3
console.log('T A S K  3');
