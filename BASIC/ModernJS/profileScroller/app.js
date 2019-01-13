// 1. Create the data
const data = [
  {
    name: 'John Doe',
    age: 33,
    gender: 'Male',
    lookingFor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/14.jpg'
  },
  {
    name: 'Jen Smith',
    age: 23,
    gender: 'female',
    lookingFor: 'female',
    location: 'Maiami FL',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'John Down',
    age: 43,
    gender: 'Male',
    lookingFor: 'female',
    location: 'Washington D.C.',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    name: 'Jen Smith',
    age: 23,
    gender: 'female',
    lookingFor: 'female',
    location: 'Maiami FL',
    image: 'https://randomuser.me/api/portraits/women/16.jpg'
  },
  {
    name: 'Jen Smith',
    age: 23,
    gender: 'female',
    lookingFor: 'female',
    location: 'Maiami FL',
    image: 'https://randomuser.me/api/portraits/women/41.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preferences: ${currentProfile.gender}: looking for ${currentProfile.lookingFor}</li>
    </ul>
  `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// 2. Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}