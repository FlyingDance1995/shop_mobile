<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
          <div class="flex-row middle center fs-xl"
               style="height: 64px; width: 100%">
            <a href="/home"
               class="logo-admin">
              C1702L
            </a>
          </div>

          <MenuItem name="1-1">
            <Icon type="md-analytics" />
            <span>
             Tổng quan
            </span>
          </MenuItem>

          <MenuItem name="1-2">
            <Icon type="md-phone-portrait"/>
            <span>
              D/S Điện thoại
            </span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="md-desktop"/>
            <span>
              D/S Máy tính
            </span>
          </MenuItem>
          <MenuItem name="1-4">
            <Icon type="md-camera"/>
            <span>
              D/S Máy ảnh
            </span>
          </MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>

        <Header class="layout-header-bar">
          <div class="flex-row middle space-between">
            <div class="">
              Tổng quan
            </div>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
          </div>
        </Header>

        <Content class="content-admin">
          <nuxt-child/>
        </Content>

      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: 'LayoutAdmin',


    components: {
    },

    props: {

    },

    mounted(){

    },

    data () {
      return {
        isCollapsed: false
      };
    },

    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },

    methods: {

    }
  }
</script>

<style lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: calc(100vh);
  }

  .layout-header-bar{
    background: #e8eaec;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }

  .content-admin {
    background: #fff;
    height: calc(100vh - 65px);
    overflow-y: auto;
  }

  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
