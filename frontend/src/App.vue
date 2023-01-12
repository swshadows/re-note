<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/notes">Notas</router-link>
  </nav>

  <router-view />
</template>

<style src="" lang="scss">
@import "@/scss/_colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Sofia Sans", sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: $color;
}
</style>
