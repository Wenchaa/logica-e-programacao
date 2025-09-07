const { somarDoisNumeros } = require ('../src/calculadora');
const {expect} = require('chai');

describe('Teste da Função de Soma', function() {
    it('A função deve ser capaz de somar dois números positivos', function() {
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);

    });

    it('A função deve ser capaz de somar um numero positivo e um numero negativo', function(){
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (50, -15);

        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);

    });

});

    it('A função deve ser capaz de somar dois números que tenham valor igual a zero', function (){
    //Coletar produto da Soma
        const resultadoDaSoma = somarDoisNumeros (0, 0);

    //Comparar com o resultado que você espera
        expect(resultadoDaSoma).to.equal(0);

        
    });
  
    it ('A função deve ser capaz de somar dois números negativos', function() {
//coletar o produto da soma, verificando se os dois valores são negativos
        const resultadoDaSoma = somarDoisNumeros (-12, -20);

//Comparar com o resultado que você espera
        expect(resultadoDaSoma).to.equal (-32);

    });


