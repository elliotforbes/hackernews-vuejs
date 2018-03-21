<template>
    <div class="pure-menu pure-menu-horizontal">
        <div class="container">
        <a href="#" class="pure-menu-heading pure-menu-link">Home</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">News</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sports</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Finance</a></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.pure-menu {
    background-color: #E17842;
}
.pure-menu a {
    color: white;
}
</style>
