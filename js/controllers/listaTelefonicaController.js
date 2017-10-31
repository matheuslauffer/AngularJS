angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];
  $scope.operadoras = [];
  $scope.contato = {};  
  var carregarContatos = function(){
    contatosAPI.getContatos().then(function(data){
      data.forEach(function(item){
        item.serial = serialGenerator.generate();
      });
      $scope.contatos = data;
    }).catch(function(data, status){
        $scope.error = "Não foi possível carregar os dados!";
    });
  };
  var carregarOperadoras = function(){
  operadorasAPI.getOperadoras().then(function(res){
      $scope.operadoras = res.data;
    });
  };
  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    contatosAPI.saveContato(contato).then(function (data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };
  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if(!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  }
  carregarContatos();
  carregarOperadoras();
});
