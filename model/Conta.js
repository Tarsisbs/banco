import { Titular, buscarTitulares } from "./Titular"

class Conta{
    constructor(saldo, senha, agencia, numero_conta, Titular){
        this.saldo = saldo
        this.senha = senha
        this.agencia = agencia
        this.numero_conta = numero_conta
        this.Titular = Titular 
    }
    transferir(ContaOrigem, contaDestino){

    }
    saque(valor){
        
    }
    depositar(valor){

    }
    visualizarSaldo(valor){

    }
    autenticar(agencia, numero_conta, senha){
        let contas = pegarContas(buscarTitulares())
        console.log(contas)
    }
    cobrarTaxa(){

    }
}

function pegarContas(titulares){
    let c1 = new Conta(300, 156234, 123, 225, titulares[0])
    let c2 = new Conta(2000, 151451, 114, 157, titulares[1])
    let c3 = new Conta(1000000, 205748, 666, 222, titulares[2])
    
    let contas = [c1, c2, c3]
    return contas
}

export {Conta, pegarContas}