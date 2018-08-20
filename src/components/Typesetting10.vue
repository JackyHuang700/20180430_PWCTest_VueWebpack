<template>
  <div class="myContainer-fluid">
    <nav class="navbar top">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
    <header>
      <h2>Header</h2>
    </header>
    <section class="orange">
      <h2>Section</h2>
    </section>
    <section class="yellow">
      <h2>Section</h2>
    </section>
    <section class="blur">
      <h2>Section</h2>
    </section>
    <section class="red">
      <h2>Section</h2>
    </section>
    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'typesetting10'
}
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 22px;
}

.myContainer-fluid {
  height: auto;
  width: 100%;
}

nav {
  border: 1px solid red;
}

footer {
  border: 1px solid blue;
}
</style>
