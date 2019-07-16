import { shallowMount } from '@vue/test-utils'
import FormModal from '../../../src/components/FormModal/FormModal'

describe('FormModal.vue', () => {
  test('', () => {
    const propsToPass = {
      isVisible: true,
      formType: 'huhu',
      data: {formModalTitle: 'gdegyd'},
      doWhenSubmit: function () {console.log('rrrr')}
    }

    const wrapper = shallowMount(FormModal, {
      propsData: propsToPass
    })
    expect(wrapper.find('a').text()).toBe(propsToPass.data.formModalTitle)
  })
})
