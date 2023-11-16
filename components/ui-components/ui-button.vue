<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :title="title"
    @click.stop.prevent="onClickEvent()"
  >
    <span
      :class="hasIcon ? icon : ''"
    >
      <span
        v-if="srOnly"
        class="sr-only"
      >
        {{ text }}
      </span>
      <span v-else>
        {{ text }}
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    submit: {
      type: Boolean,
      default: false
    },
    srOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasIcon () {
      return !!this.icon
    }
  },
  methods: {
    onClickEvent () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-select {
    border: none;
    background: $white url('~assets/svg/it-expand.svg') no-repeat right;
    border-bottom: 1px solid #5c6f82;
    border-radius: 0;
    padding: 0.375rem 0.5rem;
    outline: 0;
    height: 2.5rem;
    width: 100%;
    box-shadow: none;
    transition: 0.2s ease-out;
    text-align: left;

    &--selected {
      background: $white url('~assets/svg/it-collapse.svg') no-repeat right;
  }
}
.btn:focus {
  border-color: #ff9900;
  box-shadow: 0 0 0 2px #ff9900;
  outline: none;
}
</style>
