<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"  unique-opened router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>首页
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>类别管理</template>
                <el-menu-item index="category">类别</el-menu-item>
            </el-submenu>
            
            <el-submenu index="5">
                <template slot="title"><i class="el-icon-share"></i>用户管理</template>
                <el-menu-item index="usertable">用户列表</el-menu-item>
            </el-submenu>

            
            <el-submenu index="7">
                <template slot="title"><i class="el-icon-document"></i>表单</template>
                <el-menu-item index="baseform">基本表单</el-menu-item>
                <el-menu-item index="upload">文件上传</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 180px;
        left: 0;
        top: 70px;
        bottom:0;
        /* background: #2E363F; */
        overflow-y: scroll
    }
    .sidebar > ul {
        height:100%;
    }
</style>
