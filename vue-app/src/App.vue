<template>
    <div>
        Content coming from the Vue app
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    created () {
        console.log('** created');
    },
});
</script>