<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id"><SinglePost :post="post" /></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    // to check if the data is being passed
    // console.log(props.posts);

    // lifyecyclehooks inside setup
    // check if it works
    onMounted(() => console.log("components mounted"));
    onUnmounted(() => console.log("componend unmounted"));
    onUpdated(() => console.log("console updated"));
  },
  mounted() {
    console.log("mounted using options api");
  },
};
</script>

<style></style>
