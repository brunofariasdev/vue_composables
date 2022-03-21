<template>
  <div class="home">
    <ModalVue>
      <template v-slot:content>
        COnteudoooooooo
      </template>
    </ModalVue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalVue from '@/components/Modal.vue';

export default defineComponent({
  name: 'HomeView',
  components:{
    ModalVue
  }
  
});
</script>
