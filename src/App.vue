<template>
<div>
<nav>
    <router-link to="/"> Додому </router-link>
    <router-link to="/zavd1">Завдання 1</router-link>
    <router-link to="/zavd2">Завдання 2</router-link>
    <router-link to="/zavd3">Завдання 3</router-link>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>


export default {
  name:"App", 
    data(){
      return {

    }
    }
}
</script>

<style>

</style>
