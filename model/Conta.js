export {Conta}

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

    }
    cobrarTaxa(){

    }
}