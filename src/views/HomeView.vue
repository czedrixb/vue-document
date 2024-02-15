<template>
  <div class="home">
    home
    <!-- uses ref -->
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->

    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ guyOne.name }} - {{ guyOne.age }}</p>
    <button @click="updateGuyOne">Update Guy One</button>
    <h2>Reactive</h2>
    <p>{{ guyTwo.name }} - {{ guyTwo.age }}</p>
    <button @click="updateGuyTwo">Update Guy Two</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  // always run first, create values, create functions
  setup() {
    // ref vs reactive
    const guyOne = ref({ name: "mario", age: 10 });
    const guyTwo = reactive({ name: "luigi", age: 15 });

    const updateGuyOne = () => {
      guyOne.value.age = 20;
    };

    const updateGuyTwo = () => {
      guyTwo.age = 25;
    };
    return { guyOne, updateGuyOne, guyTwo, updateGuyTwo };
  },
};
</script>
