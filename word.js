var Letter = require("./letter.js");

var Word = function(input) {
    var letterArr = [];
    for (var letter in input){
      letterArr.push(new Letter(input[letter].toLowerCase()));
    };
    this.word = letterArr;
    this.string = function(){
        var word = "";
        for (var i = 0; i < this.word.length; i++){
          word += this.word[i].display() + " ";
        };
        return word;
    }
    this.check = function(char){
      for (var i = 0; i < this.word.length; i++){
          this.word[i].compare(char);
      };
      return this.string();
    };
    // this.winningState = function(){
    //   for(var i  = 0; i < this.word.length; i++){
    //     if(this.word[i].beenGuessed === true){
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   };
    // };

    this.notFinished = function() {
      var stillNeedsGuessing = false;
      for (var i = 0; i < this.word.length; i++) {
        if (this.word[i].display() == "_") {
          stillNeedsGuessing = true;
          break;
        };
      };
      return stillNeedsGuessing;
    };
};

module.exports = Word;

// var Ozzy = new Word("RAGE AGAINST THE MACHINE");
// // console.log(Ozzy.word)
// console.log(Ozzy.string());
// console.log("-----------------")
// console.log(Ozzy.check("a"));
