import '../../assets/css/registration/index.css';

import Vue from 'vue';
import { common, assignData, assignMethods } from '_common.js';
import { validate } from '_factory.js';
import { apiRegister } from '_axios.js';

import mForm from '../../_components/Vue/mForm.vue';

common.VUE.vm = new Vue({
  el: common.Lay.app,
  components: {
    'm-form': mForm
  },
  data() {
    return assignData({
      phoneValue: '0912345678',
      phoneError: null,
      passwordValue: 'Test12345678',
      passwordError: null,
      passcheckValue: 'Test12345678',
      passcheckError: null,
      agreeValue: true,
      agreeError: null,
      smsValue: true,
      smsError: null
    });
  }, // mounted() {
  //   const vm = this;
  //   const { offsetTop, scrollTop, clientTop } = vm.$refs.phone.$el;

  //   console.log((offsetTop - scrollTop + clientTop));
  //   console.log(vm.$refs);
  // }

  methods: assignMethods({
    submit(url) {
      const vm = this;

      apiRegister({
        Cellphone: vm.phoneValue,
        Password: vm.passwordValue,
        CheckPassword: vm.passcheckValue
      }).then(res => {
        console.log(res);
        console.log(url);
        // window.location.href = url;
      }).catch(error => {
        console.log(error);
      });
    }
  })
});
