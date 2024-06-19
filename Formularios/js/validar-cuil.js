export default function EsUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g,"");
    
    if(NumerosRepetidos(cuil)){
        // console.log('Valores repetidos');
        campo.setCustomValidity('Valores repetidos');
    }else{
        if( ValidarPrimerosDigitos(cuil) && ValidarDigitoVerificador(cuil)){
            // console.log('Cuil Valido');
        }else{
            // console.log('Cuil Invalido');
            campo.setCustomValidity('Cuil Invalido');
        }
    }

}

function NumerosRepetidos(cuil){
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    return numerosRepetidos.includes(cuil);
}

function ValidarPrimerosDigitos(cuil){
    let primerosDigitos = cuil.substring(0,2);
    
    let digitosValidos = [
        "20",
        "23",
        "24",
        "27",
        "30",
        "33",
        "34"
    ];

    return digitosValidos.includes(primerosDigitos);
}

function ValidarDigitoVerificador(cuil){
    let acomulado = 0;
    const factores = [5,4,3,2,7,6,5,4,3,2];

    for(let i = 0; i < 10; i++){
        acomulado += parseInt(cuil[i],10) * factores[i];
    }

    let validadorTeorico = 11 - (acomulado % 11);

    if(validadorTeorico === 11){
        validadorTeorico = 0;
    }else if(validadorTeorico === 10){
        validadorTeorico = 9;
    }

    const digitoVerificador = parseInt(cuil[10],10);

    return validadorTeorico === digitoVerificador;

}