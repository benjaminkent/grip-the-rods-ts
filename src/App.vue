<template lang="pug">
  .app-container
    .image-container
      .background-image
        img.background(src="./assets/foos.png" alt="foosball table")
    router-view
</template>


<style lang="scss">
body {
  margin: 0;
}

.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #222;
  min-height: 100vh;
}

.background-image {
  display: flex;
  justify-content: center;
}

.background {
  position: absolute;
  top: 100px;
  opacity: 0.05;
  height: 500px;
  z-index: -1;
}

@media (max-width: 505px) {
  .background {
    height: 300px;
  }
}

@media (min-width: 1000px) {
  .background {
    height: 800px;
  }
}
</style>
