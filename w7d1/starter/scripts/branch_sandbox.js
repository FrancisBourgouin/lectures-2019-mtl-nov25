const branchObject = {
  name: "Secret"
};

const branchPostCreator = branch => {
  let $article = $("<article>").addClass("branch");
  let $title = $("<h1>").text(branch.name);
  let $sha = $("<h2>").text(branch.commit.sha);
  let $url = $("<a>")
    .text(branch.commit.url)
    .attr("href", branch.commit.url);

  return $article
    .append($title)
    .append($sha)
    .append($url);
};
