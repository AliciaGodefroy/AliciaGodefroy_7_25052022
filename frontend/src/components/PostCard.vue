<template>
  <div class="container">
    <article class="card" v-for="post in posts" :key="post.id">
      <header>
        <div class="card__title">{{ post.pseudo }}</div>
        <time class="card-date">
          {{ "Publié le " + post.createdAt.slice(0, 10).split("-").reverse().join("/")
          + " à " + post.createdAt.slice(11, 16) }}
        </time>
      </header>
      <section class="card__content">
      </section>
    </article>
  </div>
</template>
