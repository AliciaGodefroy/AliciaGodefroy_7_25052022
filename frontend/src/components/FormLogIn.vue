<template>
  <div class="form-content">
    <form class="form" action="/ma-page-de-traitement" method="post">
      <div>
          <label htmlFor="mail">Adresse email
            <input type="email" id="email" name="user_mail" v-model="email">
          </label>
      </div>
      <div>
          <label htmlFor="password">Mot de passe
            <input type="password" id="password" name="user_password" v-model="password">
          </label>
      </div>
      <button type="submit" class="form__button">Se connecter</button>
    </form>
  </div>
</template>

<style lang='scss' scoped>

$color-primary : #FD2D01;
$color-secondary : #FFD7D7;
$color-tertiary : #4E5166;

.form-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 0 30px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  div{
    display: flex;
    flex-direction: column;
    label{
      color: $color-primary;
      font-weight: 700;
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }
    input{
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #9E9E9E;
    }
  }
  &__button{
    background: $color-primary;
    border: $color-primary;
    border-radius: 5px;
    padding: 10px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
  }
}
</style>
