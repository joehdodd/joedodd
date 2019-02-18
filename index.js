const USER = 'joehdodd';
const getContent = async function(e) {
  const reposContainer = document.getElementById('reposContainer');
  const repos = await fetch('https://api.github.com/users/joehdodd/repos').then(res => res.json());
  const recentlyUpdated = update => {
    const currentDate = new Date();
    const updatedTime = new Date(update).getTime();
    return updatedTime >= (currentDate.setDate(currentDate.getDate() - 7))
  };
  repos.forEach(repo => {

    if (!repo.fork && recentlyUpdated(repo.updated_at)) {
    // if (true) {
      const repoEl = document.createElement('div');
      repoEl.setAttribute('class', 'repoContainer');
      repoEl.setAttribute('id', `repo_${repo.id}`);
      repoEl.innerHTML = `
        <h3>${repo.name}</h3>
        <span>${repo.description}</span>
        <span>${!!repo.language ? repo.language : ''}</span>
      `;
      repoEl.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(repo.html_url, '_blank');
      });
      console.log(repo);
      return reposContainer.appendChild(repoEl);
    }
  });
};
document.addEventListener('DOMContentLoaded', getContent);
