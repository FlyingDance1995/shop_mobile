<template>
  <div style="padding: 20%;"
       class="flex-column align-center">
    <h1>Mất kết nối</h1>
    <p>Thời gian phản hồi của máy chủ quá lâu hoặc không nhận được phản hồi. Vui lòng thử lại!</p>
    <Button type="text"
            class="mt-lg"
            @click="goBack">
              Thử lại
    </Button>
  </div>
</template>

<script>
  export default {
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
