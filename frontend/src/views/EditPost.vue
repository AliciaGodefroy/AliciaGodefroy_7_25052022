<template>
  <div class="content">
    <home-header></home-header>
    <div class="container">
      <header class="header">
        <h3>Modifier votre publication</h3>
      </header>
      <div class="edit">
        <section class="edit__main">
          <textarea v-model="editedText" type="text" aria-label="titre du post" />
        </section>
        <section class="edit__file">
          <p>Modifier l'image :</p>
          <input type="file" @change="selectFile" ref="file" id="file" name="image"
          accept=".jpg, .jpeg, .gif, .png"  aria-label="modifier l'image"/>
          <img v-show="imageUrl" class="publication-photo" :src="imageUrl"
          alt="picture" />
        </section>
        <footer class="edit__footer">
          <button @click="updatePost">Modifier</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import HomeHeader from '../components/HomeHeader.vue';

export default {
  name: 'updatePost',
  components: {
    'home-header': HomeHeader,
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      pseudo: '',
      userId: '',
      editedText: '',
      imageUrl: '',
    };
  },
  mounted() {
    this.userId = localStorage.getItem('userId');
  },
  methods: {
    selectFile() {
      // eslint-disable-next-line prefer-destructuring
      this.file = this.$refs.file.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
    },
    updatePost() {
      const user = JSON.parse(localStorage.getItem('user'));
      const myForm = new FormData();
      const AccessToken = user.token;
      // eslint-disable-next-line prefer-template
      const header = { headers: { Authorization: 'Bearer ' + AccessToken } };
      myForm.append('text', this.editedText);
      myForm.append('image', this.file);

      console.log('what is this.file', this.file);

      Axios
        // eslint-disable-next-line prefer-template
        .put('http://localhost:3000/api/post/' + this.$route.params.id, myForm, header)
        .then((response) => {
          console.log('response to updatePost');
          console.log(response.data.message);
          // eslint-disable-next-line no-restricted-globals
          this.$router.push('/home');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

h3{
  color: white;
  display: flex;
  align-items: flex-start;
  margin: 20px 10px;
}

.edit{
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &__main {
    padding: 15px 15px 0 15px;
    textarea{
    width: 90%;
    border-radius: 10px;
    font-family: Lato, sans-serif;
    font-weight: 800;
    color: black;
    padding: 10px;
    text-align: left;
    }
  }
  &__file {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    p{
      font-family: Lato, sans-serif;
      color: black;
      font-size: 15px;
      text-align: left;
    }
    input{
      color: black;
    }
  }
  &__footer{
    padding: 15px;
    button{
      background-color: #FD2D01;
      font-family: Lato, Helvetica, Arial, sans-serif;
      font-weight: 800;
      border: #FD2D01;
      color: white;
      border-radius: 5px;
      height: 30px;
      width: 100px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}

.publication-photo{
  width: 100%;
  margin-top: 10px;
}

#file-upload-button{
  background-color: #FD2D01;
}
</style>
