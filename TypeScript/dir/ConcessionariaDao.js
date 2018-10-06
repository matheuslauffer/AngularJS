"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
