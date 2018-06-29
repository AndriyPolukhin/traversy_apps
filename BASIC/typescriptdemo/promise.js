let promise = new Promise(function (resolve, reject) {

});

let promise = Q.Promise(function (resolve, reject) {

});

let promise = $q(function (resolve, reject) {

});

// Ajax request in jQuery:
let promise = $.get('/foo/bar/common');

// AJax request in AngularJS:
let promise = $http.get('/foo/bar/common');

// $timeout service in AngularJS
let promise = $timeout(function () {
  console.log('test');
}, 1000);