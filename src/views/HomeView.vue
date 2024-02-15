<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchName" :key="name">{{ name }}</div>
    <p>{{ name }}</p>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref(["eirol", "czed", "jayson", "doms"]);

    // stop watch
    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    // for run once and run right away
    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    // for search
    const matchName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      // for stop watching
      stopWatch();
      stopEffect();
    };

    return { names, search, matchName, handleClick };
  },
};
</script>
