<template>
  <nav>
    <router-link to="/">KOGPT(카카오)</router-link> |
    <router-link to="/gpt3">GPT3.5(OpenAI)</router-link>
  </nav>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
