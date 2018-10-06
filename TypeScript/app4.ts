//import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
//import {PessoaDao} from './PessoaDao'
import Pessoa from './Pessoa';
import { Dao } from './Dao';

//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

//dao.inserir(concessionaria)

//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('','')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()


