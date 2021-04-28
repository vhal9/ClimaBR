/**
 * Remove acentos de strings
 * @param  {String} string acentuada
 * @return {String} string sem acento
 */

export function removeAcents(text){

    let textFormatted = JSON.parse(JSON.stringify(text)); 
    return textFormatted.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

}