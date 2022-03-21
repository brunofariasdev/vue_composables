<template>
  <div class="wrapper" v-if="isActive">
    <div class="modal">
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="button">
        <button class="buttons" @click="toogle">Close</button>
        <button class="buttons" @click="toogle">Ok</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref} from "vue";
import { useToogle } from "@/composables/ToolsVisual/useToogle";

export default defineComponent({
  name: 'ModalVue',
  props:{
    isOpen:{
      type: Boolean, 
      default: false
    }
  },
  setup( props ){
    const { toogle, isActive } = useToogle(props.isOpen)

    return {
      toogle, 
      isActive
    }
  }

  
})
</script>