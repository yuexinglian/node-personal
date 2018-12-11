<template>
    <el-header>
        <div class="login-logout">
            <button class='login' href="javascript:void(0)" v-on:click='login'>登录</button>
        </div>
        <p v-if="false">wrwe</p>
        <Login v-if='loginFlag'></Login>
    </el-header>
</template>
<script>
import Login from '@/components/Login.vue'

export default {
    name: 'Head',
    components: {
        Login
    },
    data: ()=>{
        return {
            loginFlag: false
        }
    },
    methods: {
        login: function() {
            console.log(111);
            let flag = this.loginFlag;
            this.loginFlag = flag==true? false: true;
        },
    }
}
</script>
<style lang="less" scoped>
.el-header {
    background: #f5f5f5;
    line-height: 60px;

}
.login-logout{
    float: right;
    margin-right: 60px;
}
</style>


