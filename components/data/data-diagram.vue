<script lang="ts">
import FacilityType from '~/types/prismaTypes/facilityType';
import VueTree from "@ssthouse/vue3-tree-chart";

export default {
  name: 'DataTree',
  components: { VueTree },
  props: {
    dataTree: {
      type: Array<FacilityType>,
      default: null
    }
  },
  data () {
    return {
      config: {
        nodeWidth: 160,
        nodeHeight: 'auto',
        levelHeight: 200
      }
    }
  }
}
</script>

<template>
    <vue-tree
      class="data-tree"
      :dataset="dataTree"
      :config="config"
      :direction="'horizontal'"
    >
      <template v-slot:node="{ node, collapsed }">
        <span
          class="tree-node"
        >
          <ui-link
            :to="{ name: 'facility', params: { id: node.id }}"
            :text="node.name"
            :title="'Vedi: ' + node.name"
          />
          <span
            class="icon tree-icon"
            :class="{'icon-plus': collapsed, 'icon-minus': !collapsed, 'icon-none' : !node.hasChildren}"
          />
        </span>
      </template>
    </vue-tree>
  </template>
  
  <style lang="scss">
  .data-tree {
    width: 100%;
    height: 100%;
    min-width: 300px;
    min-height: 900px;
    background-color: $secondary-light;
    border: 1px solid $secondary;
    border-radius: 4px;
    margin:  0 auto;
    cursor: grab;
  
    .node-slot {
      background-color: $secondary;
      border: 1px solid $secondary-dark;
      min-height: 60px;
      text-align: left;
      padding: 8px 16px 8px 4px;
      font-size: 14px;
      border-radius: 4px;
    }
    .tree-icon {
      position: absolute;
      right: -16px;
      top: 22px;
      background-position: center;
      background-color: $secondary-light;
      border: 1px solid $secondary-dark;
      border-radius: 50%;
    }
  }
  </style>