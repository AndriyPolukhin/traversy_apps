// Search input
const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get the input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make a http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // @todo: Show Alert that user is not found
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // @todo: Show the profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // @todo: Clear the profile
    ui.clearProfile();
  }
});