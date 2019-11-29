<template>
  <Modal v-model="isOpenCreateModal"
         footer-hide
         @on-visible-change="handleVisibleChange">
    <Form ref="formValidate"
          style="padding: 20px"
          :model="vm"
          :rules="ruleValidate"
          :label-width="80">
      <FormItem label="Name" prop="name">
        <Input v-model="vm.name" placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem label="Age" prop="age">
        <Input v-model="vm.age" placeholder="Enter your age"></Input>
      </FormItem>
      <FormItem label="Address" prop="address">
        <Input v-model="vm.address" placeholder="Enter your address"></Input>
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
      },

      inputData: {
        type: Object,
        default() {
          return {}
        }
      }
    },

    data() {
      return {
        vm: {
          name: '',
          age: '',
          address: '',
        },
        isOpenCreateModal: false,
        ruleValidate: {
          name: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          address: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
        }
      }
    },

    watch: {
      isOpen() {
        this.isOpenCreateModal = this.isOpen
      },

      inputData() {
        this.vm = this.inputData
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
            this.$Message.success('Success!');
            this.$emit('on-update', this.vm);
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
