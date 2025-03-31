export {Titular, buscarTitulares}

class Titular{
    constructor(nome, cpf, endereco, telefone, email, dataNasc){
    this.nome = nome
    this.cpf = cpf 
    this.endereco = endereco 
    this. telefone = telefone
    this.emali = email 
    this.dataNasc = dataNasc
    }
}

function buscarTitulares(){
    let titular1 = new Titular (
        'Mark',
        '123456789-10',
        'Terra',
        '40028922',
        'markgrayson@gmail.com',
        '01.06.45'
    )
    
    let titular2 = new Titular (
        'Nolan',
        '123456788-10',
        'Viutrum',
        '11966666666',
        'omni-man@gmail.com',
        '01.06.300a.c'
    )
    
    let titular3 = new Titular (
        'Allen',
        '123456769-10',
        'Unopia',
        '11969696969',
        'allen@gmail.com',
        '01.06.38'
    )

    let titulares = [titular1, titular2, titular3]
    return titulares
}