console.log("sanity check!!!");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function



$('.box').on('click', function(e) {

  if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 0) {
    $(e.currentTarget).text("X");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 1 ) {
    $(e.currentTarget).text("O");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 2 ) {
    $(e.currentTarget).text("X");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 3 ) {
    $(e.currentTarget).text("O");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 4 ) {
    $(e.currentTarget).text("X");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 5 ) {
    $(e.currentTarget).text("O");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 6 ) {
    $(e.currentTarget).text("X");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 7 ) {
    $(e.currentTarget).text("O");
  } else if ( (e.currentTarget.innerText) === "" &&  ( $('.box').text().length ) === 8 ) {
    $(e.currentTarget).text("X");
  }


});


/*

$('.box').text().length;

if total count = 0, put "x"
if total count = 1, put "o"
if total count = 2, put x
if total count = 3, pux o
if total count = 4, pux x
if total count = 5, pux o
if total count = 6, pux x
if total count = 7, pux o
if total count = 8, pux o
if total count = 3, pux o

*/










}); //don't change this line
