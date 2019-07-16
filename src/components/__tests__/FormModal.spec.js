import { shallowMount } from '@vue/test-utils'
import FormModal from '../../../src/components/FormModal/FormModal'

const propsToPass = {
  isVisible: true,
  formType: 'huhu',
  data: {
    formModalTitle: 'gdegyd',
    gendersTitle: 'fftft',
    firstNameTitle: 'pppp',
    lastNameTitle: 'qaqa',
    emailTitle: 'llplp',
    titleSubmitButton: 'wdwdw',
    firstName: 'lplpm',
    lastName: 'xcxc',
    email: 'wswsws',
    gender: 'uu'
  },
  doWhenSubmit: function () { console.log('rrrr') }
}
const wrapper = shallowMount(FormModal, {
  propsData: propsToPass
})

describe('FormModal.vue: check if texts and values passed by props match', () => {
  test('When it\'s visible, FormModal Component show titles which are related with its props', () => {
    expect(wrapper.find('#formModal_title').text()).toBe(propsToPass.data.formModalTitle)
    expect(wrapper.find('#formModal_gendersTitle').text()).toBe(propsToPass.data.gendersTitle)
    expect(wrapper.find('#formModal_firstNameTitle').text()).toBe(propsToPass.data.firstNameTitle)
    expect(wrapper.find('#formModal_lastNameTitle').text()).toBe(propsToPass.data.lastNameTitle)
    expect(wrapper.find('#formModal_emailTitle').text()).toBe(propsToPass.data.emailTitle)
    expect(wrapper.find('#formModal_submitButtonTitle').text()).toBe(propsToPass.data.titleSubmitButton)
  })
  test('When it\'s visible, FormModal values for male and female input radio are OK', () => {
    expect(wrapper.find('#formModal_maleInputRadio').attributes().value === 'Male').toBe(true)
    expect(wrapper.find('#formModal_femaleInputRadio').attributes().value === 'Female').toBe(true)
  })
})
describe('FormModal.vue:', () => {
  test('When it\'s visible, gender radio-buttons are well setted when radio button changed', () => {
    expect(wrapper.vm.data.gender).toBe(propsToPass.data.gender)
    const radioButtonMale = wrapper.find('#formModal_maleInputRadio')
    const radioButtonFemale = wrapper.find('#formModal_femaleInputRadio')
    radioButtonMale.trigger('click')
    expect(wrapper.vm.data.gender).toBe('Male')
    radioButtonFemale.trigger('click')
    expect(wrapper.vm.data.gender).toBe('Female')
  })
})
describe('FormModal.vue:', () => {
  test('When props isVisible === false, doesn\'t render anything', () => {
    wrapper.setProps({ isVisible: false })
    expect(wrapper.text()).toBe('') // text() on a component wrapper returns all the text rendered by the component
  })
})
