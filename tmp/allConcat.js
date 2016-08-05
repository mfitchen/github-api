var GitHub = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var currentGitHubObject = new GitHub();
  $('#gh-username-button').click(function() {
    var ghUser = $('#gh-username-input').val();
    $('#gh-username-input').val("");
    currentGitHubObject.getRepos(ghUser);
  });
});
