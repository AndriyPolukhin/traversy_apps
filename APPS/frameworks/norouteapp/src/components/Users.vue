<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter your name">
      <br>
      <input type="email" v-model="newUser.email" placeholder="Enter your email">
      <br>
      <input type="submit" value="Submit">
    </form>
    <ul>
      <li v-for="user in users">
        {{user.name}}: {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      newUser: {},
      users: [
        {
          name: 'Andriy Polukhin',
          email: 'andriy@gmail.com',
          contacted: false
        },
        {
          name: 'Owen Party',
          email: 'owens@gmail.com',
          contacted: false
        },
        {
          name: 'Roger That',
          email: 'roger@gmail.com',
          contacted: true
        }
      ]
    }
  },
  methods: {
    addUser: function(e) {
      e.preventDefault();
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
    }
  }
}
</script>

<style scoped>
</style>


