/* eslint-disable no-undef */
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

const commitPostCreator = commit => {
  let $article = $("<article>").addClass("commit");
  let $title = $("<h1>").text(commit.commit.message);
  let $subtitle = $("<h2>").text(
    `By ${commit.commit.committer.name} on ${commit.commit.committer.date}`
  );

  return $article.append($title).append($subtitle);
};

const contributorPostCreator = contributor => {
  let $article = $("<article>").addClass("contributor");
  let $title = $("<h1>").text(contributor.name);
  let $subtitle = $("<h2>").text(contributor.taskDescription);

  return $article.append($title).append($subtitle);
};

const addContributor = event => {
  event.preventDefault();
  let name = $(event.target).find('input[name="name"]')[0].value;
  let taskDescription = $(event.target).find('input[name="task"]')[0].value;
  console.log(name);
  $(".contributors").append(contributorPostCreator({ name, taskDescription }));
};

$(document).ready(() => {
  for (const branch of branches) {
    $(".branches").append(branchPostCreator(branch));
  }

  for (const commit of masterBranch) {
    $(".commits").append(commitPostCreator(commit));
  }

  $(".contributors").on("submit", addContributor);
});
