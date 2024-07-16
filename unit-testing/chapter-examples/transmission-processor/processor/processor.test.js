describe("transmission processor", function() {

  const processor = require('./processor.js');

  describe("transmission-process", function(){
      test("takes a string returns an object", function(){
              let result = processor("9701::<489584872710>");
              expect(typeof result).toBe("object");
      });

      test("returns -1 if '::' not found", function () {
        let result = processor("9701<489584872710>");
        expect(result).toBe(-1);
      });
  }); 
 });