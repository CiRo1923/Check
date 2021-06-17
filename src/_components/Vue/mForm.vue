<script>
export default {
  props: {
    childStyle: {
      type: Object,
      default() {
        return {
          elem: '',
          type: '',
          error: ''
        };
      }
    },
    error: {
      type: String,
      default: ''
    }
  }
};
</script>

<template>
  <div class="mForm">
    <div
      class="mFormElem"
      :class="childStyle.elem"
    >
      <div
        v-if="$slots.form_cnt"
        class="mFormType"
        :class="[childStyle.type, {'--error': error, 'Mb(5)': $slots.form_msg}]"
      >
        <slot name="form_cnt" />
      </div>
      <label
        v-else-if="$slots.form_checkbox"
        class="mFormType --checkbox D(fx)"
        :class="[childStyle.type, {'Mb(5)': $slots.form_msg}]"
      >
        <slot name="form_checkbox" />
        <i
          class="mFormIcon Mt(1) Mr(5) Bdrs(3) Bdw(1) Bdst(sol) Bdc(x9a) Fxsh Pos(r) checked:Bdc(x04a2) checked:Bgc(x04a2)"
          :class="{'--error': error}"
        />
      </label>
      <label
        v-else-if="$slots.form_radio"
        class="mFormType --radio D(fx)"
        :class="[childStyle.type, {'Mb(5)': $slots.form_msg}]"
      >
        <slot name="form_radio" />
        <i
          class="mFormIcon Mt(1) Mr(5) Bdrs(50%) Bdw(1) Bdst(sol) Bdc(x9a) Fxsh Pos(r) checked:Bdc(x04a2) checked:Bgc(x04a2)"
          :class="{'--error': error}"
        />
      </label>
    </div>
    <small
      class="mFormError D(b) C(xd019)"
      :class="childStyle.error"
    >
      {{ error }}
    </small>
    <div
      v-if="$slots.form_msg"
      class="mFormMsg"
    >
      <slot name="form_msg" />
    </div>
  </div>
</template>
