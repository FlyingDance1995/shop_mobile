<template>
  <div class="p-lg">
    <div class="flex-row middle space-between mb-md">
      <div></div>
      <Button type="primary"
              icon="md-add"
              @click="isShowCreateModal = true">
        Thêm mới
      </Button>
    </div>

    <Table :columns="headerTable"
           border
           no-data-text="Không có dữ liệu"
           :data="dataTable">

      <template slot-scope="{ row, index}" slot="action">
        <div class="flex-row">
          <Icon type="md-cloud-upload"
                @click="openUpdateModal(row)"
                class="cursor mr-md"
                title="Cập nhât"/>

          <Icon type="md-trash"
                class="cursor"
                @click="openDeleteModal(row)"
                title="Xóa"/>
        </div>
      </template>
    </Table>

    <Modal v-model="isOpenConfirmDeleteModal"
           footer-hide>
      <div style="color: #0d0d0d"
           class="flex-column middle center">
        <p> Bạn có chắc chắn muốn xóa</p>
        <div class="flex-row">
          <Button type="error"
                  class="mr-lg"
                  @click="isOpenConfirmDeleteModal = false">
            Không
          </Button>

          <Button type="primary"
                  @click="handleConfirmDelete">
            Có
          </Button>
        </div>
      </div>
    </Modal>

    <CreateNewsModal :isOpen="isShowCreateModal"
                     @on-create="handleOnCreate"
                     @on-close="isShowCreateModal = false"/>

    <UpdateNewsModal :isOpen="isShowUpdateModal"
                     :inputData="detailNews"
                     @on-update="handleOnUpdate"
                     @on-close="isShowUpdateModal = false"/>
  </div>
</template>

<script>
  import CreateNewsModal from '@/components/admin/CreateNewsModal.vue';
  import UpdateNewsModal from '@/components/admin/UpdateNewsModal.vue';

  export default {
    name: 'NewsTable',

    components: {
      CreateNewsModal,
      UpdateNewsModal
    },

    data() {
      return {
        isShowCreateModal: false,
        isShowUpdateModal: false,
        isOpenConfirmDeleteModal: false,
        detailNews: {},
        headerTable: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          },
          {
            title: ' ',
            slot: 'action',
            width: 100
          },
        ],
        dataTable: [
          {
            id: 1,
            name: 'Phạm Đức Chính',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 2,
            name: 'Phạm Đức Chính1',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 3,
            name: 'Phạm Đức Chính2',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 4,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 5,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 6,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 7,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 7,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 7,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },
          {
            id: 7,
            name: 'Phạm Đức Chính3',
            age: 20,
            address: 'Hưng yên'
          },

        ],
        deleteItem: {}
      }
    },

    methods: {
      openUpdateModal(row) {
        this.detailNews = row;
        this.isShowUpdateModal = true;
      },

      openDeleteModal(row) {
        this.deleteItem = row;
        this.isOpenConfirmDeleteModal = true;
      },

      handleConfirmDelete() {
        this.$Message.success('Đã xóa');
        this.dataTable = this.dataTable.filter(o => {
          return this.deleteItem.id !== o.id
        });
        this.isOpenConfirmDeleteModal = false;
      },

      handleOnUpdate(data) {
        this.dataTable = this.dataTable.map(o => {
          return data.id === o.id ? {
            ...data,
          } : o
        });
        this.isShowUpdateModal = false;
      },

      handleOnCreate(data) {
        this.dataTable.push(data);
        this.isShowCreateModal = false
      }
    }
  }
</script>
