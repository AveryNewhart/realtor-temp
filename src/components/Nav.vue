<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="full-width-header">
    <div class="header-content">
      <div class="logo">Yonna <span>Realty</span></div>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/properties">Properties</RouterLink></li>
          <li><RouterLink to="/#about">About</RouterLink></li>
          <li><RouterLink to="/#contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.full-width-header {
  background: #2c3e50;
  color: white;
  padding: 20px 0;
  margin-bottom: 30px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 28px;
  font-weight: bold;
}

.logo span {
  color: #3498db;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  nav ul {
    margin-top: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  nav ul li {
    margin: 5px 10px;
  }
}
</style>