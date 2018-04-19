// Write code here to communicate with Github
var url = "https://api.github.com/users/azadi11/repos";
fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(repos) {
    var repoList = document.querySelector("#repos-list");
    var reposCount = document.querySelector("#repos-count");
    reposCount.innerText = repos.length;
    repos.forEach(function(repo) {
      var itemLink = document.createElement("a");
      itemLink.setAttribute("href", repo.html - url);
      itemLink.innerText = repo.name;
      var listItems = document.createElement("li");
      listItems.appendChild(itemLink);
      repoList.appendChild(listItems);
    });
  });
