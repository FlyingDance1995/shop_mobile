<template>
  <div class="flex-column center middle" style="height: calc(100vh - 120px)">
    <h3>Đường dẫn không khả dụng hoặc đang có lỗi xảy ra!</h3>
    <Button type="text"
            class="mt-md"
            @click="refresh">Thử lại</Button>
  </div>
</template>
<script>
  export default {
    methods:{
      refresh(){
        location.reload();
      }
    }
  }
</script>
