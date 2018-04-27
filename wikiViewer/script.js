
const output = document.querySelector('.output');
const endpoint = "https://en.wikipedia.org/w/api.php";
const mainPage = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2";


const li = document.createElement('li');


output.innerHTML = mainPage;


//  Example 
//  https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch


var myPage = new Request(endpoint);

fetch(myPage).then(function(response) {
  return response.blob();
}).then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myPage.src = objectURL;
});