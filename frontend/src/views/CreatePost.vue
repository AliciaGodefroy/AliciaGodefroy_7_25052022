<template>
  <div class="content">
    <home-header></home-header>
    <h3>Ajouter une publication</h3>
    <div class="post">
      <textarea
        aria-label="titre de la publication"
        type="title"
        id="title"
        name="title"
        placeholder="Titre"
        v-model="text"
        maxlength="150"
        @input="check"
      />
      <input
        aria-label="Ajoutez votre image"
        ref="fileInput"
        style="display: none"
        type="file"
        name="image"
        @change="onFileSelected"
        accept="image/*"
      />
      <button id="add-file-button" @click="$refs.fileInput.click()">
        + Ajouter une image
      </button>
      {{ selectedFile.name }}
    </div>
    <div id="form-validate-button">
        <button
          id="form-validate-button"
          @click="createPost"
          type="submit"
          :disabled="isDisabled">
          Publier
        </button>
      </div>
  </div>
</template>

<script>
import Axios from 'axios';
import HomeHeader from '../components/HomeHeader.vue';

export default {
  name: 'createPost',
  components: {
    'home-header': HomeHeader,
  },
  data() {
    return {
      text: '',
      selectedFile: '',
      isDisabled: true,
    };
  },
  mounted() {},
  methods: {
    createPost() {
      const user = JSON.parse(localStorage.getItem('user'));
      const myForm = new FormData();
      const AccessToken = user.token;
      // eslint-disable-next-line prefer-template
      const header = { headers: { Authorization: 'Bearer ' + AccessToken } };
      myForm.append('userId', user.userId);
      myForm.append('text', this.text);
      myForm.append('imageUrl', this.selectedFile);
      Axios
        .post('http://localhost:3000/api/post', myForm, header)
        .then(() => {
          // eslint-disable-next-line no-restricted-globals
          this.$router.push('/home');
        })
        .catch((error) => console.log(error));
    },
    onFileSelected(event) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedFile = event.target.files[0];
    },
    check() {
      if (this.text.length >= 1) {
        this.isDisabled = false;
      }
      if (this.text.length < 1) {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

h3{
  color: #FD2D01;
  display: flex;
  align-items: flex-start;
}

.post{
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  textarea{
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
    font-family: Lato, sans-serif;
    font-weight: 800;
    color: black;
  }
  #add-file-button{
    width: 159px;
    height: 23px;
    margin: 10px 20px 20px 20px;
    color: white;
    background-color: #FD2D01;
  }
  #form-validate-button{
    margin: 10px;
  }
}

button{
  background-color: #FD2D01;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: 800;
  border: #FD2D01;
  color: white;
  border-radius: 5px;
  height: 30px;
  width: 100px;
}

</style>
