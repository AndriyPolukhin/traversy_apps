import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const input = $('#input');
const output = $('#output');
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
  function(e) {
    console.log(e.target.innerHTML);
  },
  function(err) {
    console.log(err);
  },
  function() {
    console.log('Completed');
  }
);

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
  function(e) {
    console.log(e.target.value);
    output.append(e.target.value);
  },
  function(err) {
    console.log(err);
  },
  function() {
    console.log('Completed');
  }
);

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
  function(e) {
    console.log(e.target.value);
    output.html('<h1>X: ' + e.clientX + ' Y: ' + e.clientY + '</h1>');
  },
  function(err) {
    console.log(err);
  },
  function() {
    console.log('Completed');
  }
);
