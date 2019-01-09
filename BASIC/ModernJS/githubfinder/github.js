/**
 * FETCHES
 */
class Github {
  constructor() {
    this.client_id = '355ed67ba0a89616e289';
    this.client_secret = 'baa6bc25164bb1037de52e5fc3ee971586544f52';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }


  /*
  https://api.github.com/users
  https://api.github.com/orgs/octokit/repos
  */
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}