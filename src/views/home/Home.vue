<template>
    <div class="Home">
        <navbar color="#fff" backgroundColor="#ff8198">
            <div slot="center">购物街</div>
        </navbar>
    </div>
</template>
<script>
import Navbar from 'components/common/navbar/Navbar'
import {getHomeMultidata} from 'network/homeApi'
export default {
    name:'Home',
    components:{
        Navbar
    },
    data() {
        return {
            bannerList:"",
        }
    },
    created() {
        getHomeMultidata().then(res=>{
            this.bannerList = res.data.banner.list;
            console.log(this.bannerList);
        })
    },
}
</script>

<style scoped>

</style>