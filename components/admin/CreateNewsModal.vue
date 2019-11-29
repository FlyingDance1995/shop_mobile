<template>
  <Modal v-model="isOpenCreateModal"
         footer-hide
         @on-visible-change="handleVisibleChange">
    <Form ref="formValidate"
          style="padding: 20px"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80">
      <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem label="Age" prop="age">
        <Input v-model="formValidate.age" placeholder="Enter your Age"></Input>
      </FormItem>
      <FormItem label="Gender" prop="address">
        <Input v-model="formValidate.address" placeholder="Enter your Address"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Submit</Button>
        <Button @click="handleReset" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </Modal>
</template>
<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        isOpenCreateModal: false,
        formValidate: {
          name: '',
          age: '',
          address: '',
        },
        ruleValidate: {
          name: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          age: [
            {required: true, message: 'The age cannot be empty', trigger: 'blur'}
          ],
          address: [
            {required: true, message: 'The age cannot be empty', trigger: 'blur'}
          ],
        }
      }
    },

    watch: {
      isOpen() {
        this.isOpenCreateModal = this.isOpen
      }
    },

    methods: {
      handleVisibleChange(status) {
        if (status) {
          // do something
        } else {
          this.$emit('on-close');
        }
      },

      handleSubmit() {
        this.$refs.formValidate.validate((valid) => {
          if (valid) {
            this.$emit('on-create', this.formValidate);
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset() {
        this.$refs.formValidate.resetFields();
      }
    }
  }
</script>
