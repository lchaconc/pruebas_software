var c = new Calculadora();



QUnit.test( "Sumar Test", function( assert ) {
  for (var i = 0; i < 200; i++) {
      assert.ok( i + i  == c.sumar(i,i), "Passed!", "failed" );
  }


});
