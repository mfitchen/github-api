var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(ghUser) {
  $.get('https://api.github.com/users/' + ghUser + '?access_token=' + apiKey).then(function(response){
    $('#show-gh-user-profile-pic').empty();
    $('#show-gh-user-profile-pic').append("<img src=" + response.avatar_url + ">");
    $('#show-gh-user-username').empty();
    $('#show-gh-user-username').append("<h3 class='key'>Username: <span class='value'>" + response.login + "</span></h3>");
    $('#show-gh-user-full-name').empty();
    $('#show-gh-user-full-name').append("<h3 class='key'>Name: <span class='value'>" + response.name + "</span></h3>");
    $('#show-gh-user-location').empty();
    $('#show-gh-user-location').append("<h3 class='key'>Location: <span class='value'>" + response.location + "</span></h3>");
    $('#show-gh-user-url').empty();
    $('#show-gh-user-url').append("<h3 class='key'>GitHub URL: <span class='value'><a class='link' href='" + response.html_url + "'>" + response.html_url + "</span></h3>");
    $('#show-gh-user-repository-count').empty();
    $('#show-gh-user-repository-count').append("<h3 class='key'>Total Public Repositories: <span class='value'>" + response.public_repos + "</span></h3>");

    // console.log(response);
    // <!--returns JSON Object from API call and shows you the JSON Object's Key:Value pair-->

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + ghUser + '/repos?&per_page=300&access_token=' + apiKey).then(function(response){
    $('#show-gh-user-repos').empty();
    for(var i = 0; i < response.length; i++) {
      $('#show-gh-user-repos').append("<h4><a class='repo-link' href='" + response[i].html_url + "' target='_blank'>Repo</a>: &nbsp;<span class='repo-name-value'>" + response[i].name + "</span></h4><p>" + response[i].description + "</p>");
    };

    // console.log(response);
    // <!--returns JSON Object from API call and shows you the JSON Object's Key:Value pair specific to a GitHub user's repositories-->

    // console.log(response[0].name);
    // <!--returns JSON Object from API call and shows you the repository name in the zeroth (0th) position of the array-->

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
