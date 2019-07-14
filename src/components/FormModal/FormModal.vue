<template>
  <div class="form-modal-mask" v-if="isVisible">
    <div class="form-modal-mask__container">
      <i
        class="fas fa-times icons icons close-icon"
        title="Close modal"
        @click="closeFormModal()"
      >
      </i>
      <h2 class="form-modal-mask__container__title">{{data.formModalTitle}}</h2>
      <form class="form-modal-mask__container__form">
        <fieldset class="fieldset-perso">
          <legend class="fieldset-legend-perso">{{data.gendersTitle}}</legend>
          <label><input type="radio" name="gender" value="Male" :checked="data.gender === 'Male'"> Male</label>
          <label><input type="radio" name="gender" value="Female" :checked="data.gender === 'Female'"> Female</label>
        </fieldset>
        <label class="labels-4-inputs">{{data.firstNameTitle}}</label>
        <input class="main-inputs" type="text" :value="data.firstName">
        <label class="labels-4-inputs">{{data.lastNameTitle}}</label>
        <input class="main-inputs" type="text" :value="data.lastName">
        <label class="labels-4-inputs">{{data.emailTitle}}</label>
        <input class="main-inputs" type="email" :value="data.email">
        <!-- <div class="gnalFormErrorMessage" v-if="!$v.photoToShowInPhotosContainer.title.maxLength">
          Le titre ne peut pas avoir plus de 50 characteres.
        </div>
        <div class="gnalFormErrorMessage" v-if="!$v.photoToShowInPhotosContainer.title.required">
          Le titre est obligatoire.
        </div>
       <div class="gnalFormErrorMessage" v-if="!$v.photoToShowInPhotosContainer.description.maxLength">
          La description ne peut pas avoir plus de 200 characteres.
        </div>-->
        <button
          class="main-submit-button"
          type="submit"
        >
          Edit items
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormModal',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeFormModal () {
      this.$emit('clickOnCloseModalEvent')
    }
  }
}
</script>

<style src="./formModal.scss" scoped lang="scss"></style>
