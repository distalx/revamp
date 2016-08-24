import censored_words from './censored-words.json';

var tilde = function(text){


  if ( censored_words.some(function(rx){ return RegExp(rx,"i").test(text); }) ) {
    censored_words.forEach(function(rx){
      text = text.replace(RegExp(rx,"i"), '~~~');
    });
  }

  return text;

}


module.exports = {
  tilde: tilde
}
