var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getGitHub = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.show-gh-user-info').text(error.responseJSON.message);
  });
}

exports.githubModule = GitHub;
