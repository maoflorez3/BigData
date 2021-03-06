/**
 * Created by DarkKlitos on 19/11/16.
 */

(function () {
  angular.module('big.services', [])
    .factory('motosService', ['$firebaseArray', '$q',
      function ($firebaseArray, $q) {
        return {
          all: all,
          filtroPorAnio: filtroPorAnio,
          filtroAllAnio: filtroAllAnio
        };

        function all() {
          var deferred = $q.defer();
          deferred.resolve($firebaseArray(firebase.database().ref('importaciones')));
          return deferred.promise;
        }


        function filtroPorAnio(anio) {
          // filtrar
          var deferred = $q.defer();
          var ref = firebase.database().ref();
          var messagesRef = ref.child("importaciones/").limitToFirst(500);
          var query = messagesRef.orderByChild("Ano").equalTo(anio);
          deferred.resolve($firebaseArray(query).$loaded());
          return deferred.promise;
        }

        function filtroAllAnio(anio) {
          // filtrar
          var deferred = $q.defer();
          var ref = firebase.database().ref();
          var messagesRef = ref.child("importaciones/")
          var query = messagesRef.orderByChild("Ano").equalTo(anio);
          deferred.resolve($firebaseArray(query).$loaded());
          return deferred.promise;
        }


      }
    ])
})()
