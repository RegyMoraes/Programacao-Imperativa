function microondas (opcao,tempo) {
    var TempoPadrao ;
    var Prato
    switch (opcao) {
    case 1:
        TempoPadrao=10;
        Prato= 'PIPOCA';
        break;
        case 2:
        TempoPadrao=8;
        Prato= 'MACARRÃO';
        break;
        case 3:
        TempoPadrao=15;
        Prato= 'CARNE';
        break;
        case 4:
        TempoPadrao=12;
        Prato= 'FEIJÃO';
        break;
        case 5:
        TempoPadrao=8;
        Prato= 'BRIGADEIRO';
        break;
        default:
            TempoPadrão=0
            Prato= 'PRATO INEXISTENTE';
    }

    if (tempo>TempoPadrao*2) {
        console.log ('O PRATO:', Prato, 'QUEIMOU!');   
    }
    if (tempo<TempoPadrao) {
        console.log ('TEMPO INSUFICIENTE PARA FAZER', Prato );  
    }
    if (tempo>TempoPadrao*3) {
        console.log ('KABUUM ! ! !');
        
    }if (tempo==TempoPadrao) {
        console.log ('O PRATO:', Prato , 'ESTÁ PRONTO! BOM APETITE!');    
    }
}

//microondas (1,45);