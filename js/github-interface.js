var GitHub = require('./../js/github.js').githubModule;

var displayGitHub = function(city, gitHubData) {
  $('.show-gh-user-info').text("The humidity in " + city + " is " + gitHubData + "%");
}

$(document).ready(function() {
  var currentGitHubObject = new GitHub();
  $('#gh-username-button').click(function() {
    var ghUser = $('#gh-username-input').val();
    $('#gh-username-input').val("");
    currentGitHubObject.getGitHub(ghUser, displayGitHub);
  });
});
