import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: T): boolean{
        return true
    }
    atualizar(object: T): boolean{
        return true
    }
    remover(id: number): T{
        return Object()
    }
    selecionar(id: number): T{
        return Object()
    }
    selecionarTodos(): Array<T>{
        return [Object()]
    }
}