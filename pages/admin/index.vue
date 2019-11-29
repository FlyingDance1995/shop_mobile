<template>
  <div>
    <NewsTable/>
  </div>
</template>

<script>
  import NewsTable from '~/components/admin/NewsTable.vue'

  export default {
    name: 'admin',

    layout: 'admin',

    components: {
      NewsTable,
    }
  }
</script>
