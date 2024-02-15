<template>
  <div class="home">
    <h1>Home</h1>
    <!-- show only when data is not ok -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    // fetching the data from json server to this view
    // const load = async () => {
    //   try {
    //     let data = await fetch("http://localhost:3000/posts");
    // check if the response is good
    // console.log(data);
    // if (!data.ok) {
    //   throw Error("no data available");
    // }
    // parse the json into a js
    //     posts.value = await data.json();
    //   } catch (err) {
    //     error.value = err.message;
    //     console.log(error.value);
    //   }
    // };

    // to use in template
    // load();

    // calling the getPosts function and run
    // on the {} call the necessary variables
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
