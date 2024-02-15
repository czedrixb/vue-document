import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  // fetching the data from json server
  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      // check if the response is good
      // console.log(data);
      if (!data.ok) {
        throw Error("no data available");
      }
      // parse the json into a js
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load }
}

export default getPosts