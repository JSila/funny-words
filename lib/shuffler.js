var punctuation = '.,?!;:';

var shuffle = function (text) {
    var a = text.split(''),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}

var reorderWordCharacters = function(word) {
    var punctuations = '';
    for (var i = word.length - 1; i >= 0; i--) {
        if (punctuation.indexOf(word[i]) > -1) {
            punctuations = word[i] + punctuations;
            continue;
        }
        word = word.slice(0, i + 1);
        break;
    }

    var start = word[0],
        middle = shuffle(word.slice(1, -1)),
        end = word.length > 1 ? word[word.length - 1] : '';
    
    return start + middle + end + punctuations;
}

module.exports = function(text) {
    return text
        .split(' ')
        .map(reorderWordCharacters)
        .join(' ');
}
