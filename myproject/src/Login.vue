<template>
<div>
    <image src="/src/assets/logo.png"/>
    <div class ="demo-input-suffix">
        用户名：
        <el-input
            placeholder="请输入用户名"
            v-model="input1">

        </el-input>
    </div>
    <div class ="demo-input-suffix">
         密码：
        <el-input
            placeholder="请输入密码"
            v-model="input2">

        </el-input>
    </div>
</div>
</template>
<script>
export default {
        data(){
            return{
                input1:'',
                input2:'',
            }
        }
}
</script>