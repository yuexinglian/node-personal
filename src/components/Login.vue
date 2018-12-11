<template>
  <div class="login-container">
    <div class="title-content">{{status ? '请登录': '请注册'}}</div>
    <div class="account-content">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <p class="go-to-signin">
          {{status ? '没有账号？去': '已有账号？去'}}
          <a href="javascript:void(0)" @click="changeStatus">{{status? '注册': '登录'}}</a>
        </p>
        <el-button type="primary" @click="loginOrSignin">{{status ? '登录': '注册'}}</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data: () => {
    return {
      form: {
        userName: "",
        password: ""
      },
      status: true
    };
  },
  methods: {
    changeStatus: function() {
      this.status == true ? (this.status = false) : (this.status = true);
    },
    loginOrSignin: () => {
      axios
        .get("/api/testApi")
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    //   function() {
    //       let vm = this;
    //       let data = Object.assign(vm.form,{'status': this.status});
    //       axios.post('/api/login', data
    //       ).then(function(response) {
    //           console.log(response);
    //       }).catch(function(error) {
    //           console.log(error);
    //       })
    //   }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  width: 500px;
  height: 500px;
  position: fixed;
  left: 500px;
  top: 200px;
  border: 1px solid #ddd;
  .title-content {
    height: 100px;
    line-height: 100px;
    background: -webkit-linear-gradient(top, #409eff, #8fdaff);
    color: #fff;
    font-size: 18px;
    letter-spacing: 15px;
  }
  .go-to-signin {
    font-size: 12px;
    a {
      color: #409eff;
    }
  }
}
</style>
<style lang="less">
.login-container {
  .el-form {
    margin-top: 30px;
    .el-form-item {
      label.el-form-item__label {
        width: 150px;
        text-align: right;
      }
      .el-form-item__content {
        width: 370px;
        .el-input {
          width: 200px;
        }
      }
    }
  }
}
</style>



