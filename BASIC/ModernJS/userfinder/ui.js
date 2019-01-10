class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display user profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" alt="avatar" class="img-fluid mb-3">
          <a href="${user.html_url}" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">User Followers: ${user.followers}</span>
          <span class="badge badge-info">Usre Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
   `;
  }

  // Show Repos
  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
          <div class="crad card-body mb-3">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forkers: ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        `;
    });

    // output
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    this.clearAlert();
    // Create the div
    const div = document.createElement('div');
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get a parent to insert the div
    const container = document.querySelector('.searchContainer');
    // get the search box
    const search = document.querySelector('.search');
    // insert the alert
    container.insertBefore(div, search);
    // time out  3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

  // clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}