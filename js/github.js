var apiKey = require('./../.env').apiKey;

function GitHub(){
}

// GitHub.prototype.getGitHub = function(city, displayFunction) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     displayFunction(city, response.main.humidity);
//   }).fail(function(error) {
//     $('.show-gh-user-info').text(error.responseJSON.message);
//   });
// }

GitHub.prototype.getRepos = function(ghUser) {
  $.get('https://api.github.com/users/' + ghUser + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response[0].name);
    console.log(response[0].description);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
