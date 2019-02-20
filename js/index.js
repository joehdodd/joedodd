document.addEventListener('DOMContentLoaded', async function(e) {
  const USER = 'joehdodd';
  const reposContainer = document.getElementById('reposContainer');
  const repos = await fetch(`https://api.github.com/users/${USER}/repos?sort=updated`).then(
    res => res.json()
  );

  const recentlyUpdated = update => {
    const currentDate = new Date();
    const updatedTime = new Date(update).getTime();
    return updatedTime >= currentDate.setDate(currentDate.getDate() - 14);
  };

  return repos.forEach(repo => {
    console.log(repo);
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
        <div class="repo-stars-watchers">
          <span>Stars: ${repo.stargazers_count}</span>
          <span>Watchers: ${repo.watchers_count}</span>
        </div>
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
