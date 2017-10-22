<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
          <el-col :span="24">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
              </el-form>
          </el-col>
        </el-row>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180" align="center">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" width="180" align="center">
            </el-table-column>
            <el-table-column prop="address" label="地址" align="center">
            </el-table-column>
            <el-table-column prop="birth" label="出生日期" width="180" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row.code)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div>
            <el-dialog title="编辑用户信息" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form :model="edit_Form" label-width="100px">
                  <el-form-item label="姓名" prop="name">
                      <el-input v-model="edit_Form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                      <el-input v-model="edit_Form.email"></el-input>
                  </el-form-item>
                  <el-form-item label="地址" prop="address">
                      <el-input v-model="edit_Form.address"></el-input>
                  </el-form-item>
                  <el-form-item label="出生日期" prop="birth">
                      <el-date-picker v-model="edit_Form.birth" type="date" @change="convert()"></el-date-picker>
                  </el-form-item>
                </el-form>
                <div class="dialog-footer" slot="footer">
                    <el-button @click="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="editSubmit()" :loading="editLoading">确定</el-button>
                </div>
            </el-dialog>
        </div>

        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
const status = "200"
    export default {
        data() {
            return {
                tableData: [],
                editFormVisible: false,
                edit_Form: {
                    name: '',
                    email: '',
                    address: '',
                    birth: ''
                },
                formInline: {
                    name: ''
                },
                editLoading: false
            }
        },
        created() {
            const vm = this;
            vm.axios.get('/api/userlist').then((res) => {
                if(res.data.code == status){
                    console.log(res.data);
                    console.log(res.data.code)
                    vm.tableData = res.data.data;
                }
                // console.log(res.data);
                // vm.tableData = res.data.data;
            })
        },
        methods: {
            handleEdit(row) {
                const vm = this;
                vm.editFormVisible = true;
                vm.edit_Form = Object.assign({},row)
            },
            search() {
                this.$message('模拟数据暂时无法查询')
            },
            handleDelete(row) {
                const vm = this;
                vm.$confirm('是否删除该条数据？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    vm.axios()
                })
            },
            convert() {
                const vm = this;
                let date = vm.edit_Form.birth;
                vm.edit_Form.birth = date.getFullYear() + '-' +(date.getMonth() + 1) + '-' + date.getDate()
                //console.log(vm.edit_Form.birth)
                //return vm.edit_Form.birth
            },
            editSubmit() {
                const vm = this;
                if(vm.edit_Form.name == '') {
                    vm.$message.warning('请填写姓名')
                }else if(vm.edit_Form.email == '') {
                    vm.$message.warning('请填写邮箱')
                }else if(vm.edit_Form.address == '') {
                    vm.$message.warning('请填写地址') 
                }else if(vm.edit_Form.birth == '') {
                    vm.$message.warning('请填写出生日期')
                }
            }
        }
    }
</script>