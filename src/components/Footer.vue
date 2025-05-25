<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="full-width-footer">
    <div class="footer-content">
      <p>Yonna Realty - Professional Real Estate Services</p>
      <div class="social-links">
        <a href="#">FB</a>
        <a href="#">IG</a>
        <a href="#">LI</a>
      </div>
      <p>&copy; {{ currentYear }} All Rights Reserved</p>
    </div>
  </footer>
</template>

<style scoped>
.full-width-footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 30px 0;
  margin-top: 50px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content p {
  margin-bottom: 15px;
}

.social-links a {
  color: white;
  margin: 0 10px;
  font-size: 20px;
}
</style>