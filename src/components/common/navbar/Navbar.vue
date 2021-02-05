<template>
    <div class="Navbar" :style="{color:color,backgroundColor:backgroundColor}">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"Navbar",
    props:{
        backgroundColor:{
            type:String,
            default:"#fff"
        },
        color:{
            type:String,
            default:"red"
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.Navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>