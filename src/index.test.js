var expect = require ('chai').expect;
var revamp = require ('./index.js');

describe('REVAMP',function(){
  describe('revamp',function(){


    it('hello how are you',function(){
      expect(revamp.tilde("hello how are you")).to.equal("hello how are you");
    });

    it('Hi ~~~',function(){
      expect(revamp.tilde("Hi fuck")).to.equal("Hi ~~~");
    });


  });

});
