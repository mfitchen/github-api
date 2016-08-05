var GitHub = require('./../js/github.js').githubModule;

var displayGitHubUser = function(ghUser) {
  $('.show-gh-user-info').text("The GitHub username you entered is " + ghUser + ".");
}

$(document).ready(function() {
  var currentGitHubObject = new GitHub();
  $('#gh-username-button').click(function() {
    var ghUser = $('#gh-username-input').val();
    $('#gh-username-input').val("");
    currentGitHubObject.getRepos(ghUser, displayGitHubUser);
    // currentGitHubObject.getGitHub(ghUser, displayGitHubUser);
  });
});
