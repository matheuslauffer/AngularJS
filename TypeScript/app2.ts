import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

let cliente = new Pessoa('Matheus', 'Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerQueCarroTem())