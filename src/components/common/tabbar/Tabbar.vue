<template>
    <div id="Tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"Tabbar",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
#Tabbar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 10px rgba(173, 160, 130, 0.08);
}
</style>