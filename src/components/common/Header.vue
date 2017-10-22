<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    你好，{{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

        <div>
            <el-dialog v-model="editFormVisible" size="tiny" title="修改密码" :close-on-click-modal="false">
                <el-form :model="edit_Form" label-width="100px">
                    <el-form-item label="原始密码" prop="oldpassword">
                        <el-input v-model="edit_Form.oldpassword"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newpassword">
                        <el-input v-model="edit_Form.newpassword"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码" prop="confirmpassword">
                        <el-input v-model="edit_Form.confirmpassword"></el-input>
                    </el-form-item>
                </el-form>
                <div class="dialog-footer" slot="footer">
                    <el-button @click="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="changeSubmit">确认</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: localStorage.getItem('ms_account'),
                editFormVisible: false,
                edit_Form: {
                    oldpassword: '',
                    newpassword: '',
                    confirmpassword: ''
                }
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_account')
                    this.$router.push('/login');
                }else if(command == "changePassword"){
                    this.editFormVisible = true
                }
            },
            changeSubmit() {
                var vm = this;
                if(vm.edit_Form.oldpassword == '') {
                    vm.$message.warning('请输入原始密码')
                }else if(vm.edit_Form.newpassword == '') {
                    vm.$message.warning('请输入新密码')
                }else if(vm.edit_Form.confirmpassword == '') {
                    vm.$message.warning('请确认新密码')
                }
                //axios.post('')
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background-color: #20a0ff
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
