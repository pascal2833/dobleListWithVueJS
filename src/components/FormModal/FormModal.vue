<template>
  <div class="form-modal-mask" v-if="isVisible">
    <div class="form-modal-mask__container">
      <i
        class="fas fa-times icons icons close-icon"
        title="Close modal"
        @click="closeFormModal()"
      >
      </i>
      <h2 class="form-modal-mask__container__title" id="formModal_title">{{data.formModalTitle}}</h2>
      <form class="form-modal-mask__container__form" @submit.prevent="doWhenSubmit(formType, data)">
        <fieldset class="fieldset-perso">
          <legend class="fieldset-legend-perso" id="formModal_gendersTitle">{{data.gendersTitle}}</legend>
          <label>
            <input type="radio" name="gender" value="Male" :checked="data.gender === 'Male'" @click="data.gender=$event.target.value" id="formModal_maleInputRadio"> Male</label>
          <label>
            <input type="radio" name="gender" value="Female" :checked="data.gender === 'Female'" @click="data.gender=$event.target.value" id="formModal_femaleInputRadio"> Female</label>
        </fieldset>
        <label class="labels-4-inputs" id="formModal_firstNameTitle">{{data.firstNameTitle}}</label>
        <input class="main-inputs" type="text" :value="data.firstName" @keyup="data.firstName=$event.target.value" id="formModal_firstNameInputValue">
        <label class="labels-4-inputs" id="formModal_lastNameTitle">{{data.lastNameTitle}}</label>
        <input class="main-inputs" type="text" :value="data.lastName" @keyup="data.lastName=$event.target.value" id="formModal_lastNameInputValue">
        <label class="labels-4-inputs" id="formModal_emailTitle">{{data.emailTitle}}</label>
        <input class="main-inputs" type="email" :value="data.email" @keyup="data.email=$event.target.value" id="formModal_emailInputValue">
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
          id="formModal_submitButtonTitle"
        >
          {{data.titleSubmitButton}}
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
    formType: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    doWhenSubmit: {
      type: Function
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
