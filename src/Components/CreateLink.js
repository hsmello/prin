export function trimString(str) {
    let trimValue = str
    trimValue = trimValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "") //replace multiple spaces to 1
    trimValue = trimValue.replace(/\s/g, '-') //replace 1 space to -
    trimValue = trimValue.toLowerCase()
    return trimValue
}

export function removeAccents(str) {
    var accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž/';
    var accentsOut = "AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz ";
    str = str.split('');
    var strLen = str.length;
    var i, x;
    for (i = 0; i < strLen; i++) {
        if ((x = accents.indexOf(str[i])) != -1) {
            str[i] = accentsOut[x];
        }
    }
    return str.join('');
}