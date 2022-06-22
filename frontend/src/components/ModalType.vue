<template>
  <div class="modal">
    <div class="modal-content">
      <p><a href="">Déconnexion</a></p>
      <button class="button--disabled" @click="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -1px;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal .modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 300px;
  padding: 40px 30px;
  background-color: #fff;
}
.modal .modal-content p {
  text-align: center;
}
.modal .modal-content button {
  align-self: center;
}
</style>
