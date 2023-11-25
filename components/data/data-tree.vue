<template>
  <ul class="m-0 list-unstyled">
    <li
      v-for="facility in dataTree.children"
      :key="facility.id"
      class="row mb-3"
    >
      <span class="col tree-icon-wrapper">
        <ui-button
          v-if="hasChildren(facility.children)"
          class="icon tree-icon"
          :class="isOpened(facility.id) ? 'icon-minus': 'icon-plus'"
          :text="'Apri'"
          :title="'Vedi le strutture amministrate da: ' + facility.value"
          :visually-hidden="true"
          @click="openElement(facility.id)"
        />
      </span>
      <p class="col mb-0">
        <ui-link
          :to="{ name: 'facility', params: { id: facility.id }}"
          :text="facility.value"
          :title="'Vedi: ' + facility.value"
        />
        <br v-if="isOpened(facility.id)">
        <small
          v-if="isOpened(facility.id)"
          class="d-inline-block mt-2"
        >
          Amministra <b>{{ facility.children.length }}</b> strutture:
        </small>
      </p>
      <ul
        v-if="isOpened(facility.id)"
        class="my-3 ms-4"
      >
        <li
          v-for="facilitySecond in facility.children"
          :key="facilitySecond.id"
          class="mb-3"
        >
          <small>
            <ui-link
              class="fw-normal"
              :to="{ name: 'facility', params: { id: facilitySecond.id }}"
              :text="facilitySecond.value"
              :title="'Vedi: ' + facilitySecond.value"
            />
          </small>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DataTree',
  props: {
    dataTree: {
      type: Object || Array,
      default: null
    }
  },
  data () {
    return {
      opened: []
    }
  },
  methods: {
    openElement (id) {
      if (this.opened.includes(id)) {
        const filteredOpened = this.opened.filter(e => e !== id)
        this.opened = filteredOpened
      } else {
        this.opened.push(id)
      }
    },
    isOpened (id) {
      if (this.opened.includes(id)) {
        return true
      } else {
        return false
      }
    },
    hasChildren (array) {
      return !!array.length
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-icon {
    width: 24px;
    height: 24px;
    background-position: center;
    background-color: $secondary-light;
    border: 1px solid $secondary-dark;
    border-radius: 50%;
  }
.tree-icon-wrapper {
  max-width: 35px;
}
</style>
