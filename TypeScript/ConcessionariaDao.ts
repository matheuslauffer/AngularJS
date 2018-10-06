import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: any): boolean{
        return true
    }
    atualizar(object: Concessionaria): boolean{
        return true
    }
    remover(id: number): Concessionaria{
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria{
        return new Concessionaria('', [])
    }
    selecionarTodos(): Array<Concessionaria>{
        return [new Concessionaria('',[])]
    }
}