"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_pessoa';
    }
    Dao.prototype.inserir = function (object) {
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        return true;
    };
    Dao.prototype.remover = function (id) {
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
