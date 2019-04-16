document.addEventListener('DOMContentLoaded', async function(e) {
  const USER = 'joehdodd';
  const userContainer = document.getElementById('userContainer');
  const reposContainer = document.getElementById('reposContainer');
  const user = await fetch(`https://api.github.com/users/${USER}`).then(res =>
    res.json()
  );
  if (!!user) {
    const userEl = document.createElement('div');
    userEl.innerHTML = `
      <div class="avatar-wrapper">
        <img class="avatar" src=${user.avatar_url} alt="Photo of Joe Dodd">
      </div>
    `;
    userContainer.appendChild(userEl);
  }
  const repos = await fetch(
    `https://api.github.com/users/${USER}/repos?sort=updated`
  ).then(res => res.json());

  const recentlyUpdated = update => {
    const currentDate = new Date();
    const updatedTime = new Date(update).getTime();
    return updatedTime >= currentDate.setDate(currentDate.getDate() - 14);
  };

  repos.forEach(repo => {
    if (!repo.fork && recentlyUpdated(repo.updated_at)) {
      const repoEl = document.createElement('div');
      const iconEl = getIcon(repo.language);
      repoEl.setAttribute('class', 'repoContainer');
      repoEl.setAttribute('id', `repo_${repo.id}`);
      repoEl.innerHTML = `
        <div class="language-icon">${iconEl}</div>
        <div class="repo-info">
          <h3>${repo.name}</h3>
          <span>${repo.description}</span>
        </div>
        <!-- <div class="repo-stars-watchers">
          <span>Stars: ${repo.stargazers_count}</span>
          <span>Watchers: ${repo.watchers_count}</span>
        </div> -->
      `;
      repoEl.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(repo.html_url, '_blank');
      });
      // console.log(repo);
      return reposContainer.appendChild(repoEl);
    }
  });
});
