<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>类别管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品类别</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="goodsId" label="商品编号" align="center">
            </el-table-column>
            <el-table-column prop="goodsName" label="商品名称"  align="center">
            </el-table-column>
            <el-table-column prop="price" label="价格" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.row.goodsId)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>

        <div>
            <el-dialog title="编辑类别" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form :model="edit_Form" label-width="100px">
                    <el-form-item label="商品编号：" prop="goodsId">
                        <p>{{edit_Form.goodsId}}</p>
                    </el-form-item>
                    <el-form-item label="商品名称：" prop="goodsName">
                        <el-input v-model="edit_Form.goodsName" placeholder="请填写商品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="价格：" prop="price">
                        <el-input v-model="edit_Form.price" placeholder="请填写价格"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="editSubmit()">确定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                options:[
                    {
                        label: '小天才',
                        value: '小天才'
                    },{
                        label: '大白菜',
                        value: '大白菜'
                    }
                ],
                edit_Form:{
                    goodsId: '',
                    goodsName: '',
                    price: ''
                },
                editFormVisible: false, 
            }
        },
        created(){
            this.axios.get('http://jspang.com/DemoApi/oftenGoods.php').then((res) => {
                console.log(res.data)
                this.tableData = res.data;
            })
        },
        methods: {
            convert(time){
                let date = new Date(time);
                let Str=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                console.log(Str)
                return Str;
                
            },
            handleEdit(row) {
                // this.$message('编辑第'+(index+1)+'行');
                var vm = this;
                vm.editFormVisible = true
                vm.edit_Form = row
            },
            handleDelete(code) {
                var vm = this;
                vm.$confirm('确认删除该条数据？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消删除'
                    })
                })
            },
            editSubmit() {
                var vm = this;
                if(vm.edit_Form.goodsName == '') {
                    vm.$message.warning('请填写商品名称')
                }else if(vm.edit_Form.price == '') {
                    vm.$message.warning('请填写价格')
                }
            }
        }
    }
</script>