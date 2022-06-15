<template>
  <div class="container">
    <article class="card" v-for="post in posts" :key="post.id">
      <header>
        <div class="card__title">{{ post.pseudo }}</div>
        <time class="card__date">
          {{ "Publié le " + post.createdAt.slice(0, 10).split("-").reverse().join("/")
          + " à " + post.createdAt.slice(11, 16) }}
        </time>
      </header>
      <div class="card__content">
        <p v-show="post.message">
            {{ post.message }}
        </p>
        <div v-if="post.imageUrl">
          <img :src="post.imageUrl" alt="Image publiée" />
        </div>
      </div>
      <footer>

      </footer>
    </article>
  </div>
</template>

<script>
// import Axios from 'axios';

// import Like from '../assets/heart-solid.svg';

export default ({
  name: 'PostCard',
  // components: { Like },
  data() {
    return {
      posts: [],
    };
  },
});
</script>
