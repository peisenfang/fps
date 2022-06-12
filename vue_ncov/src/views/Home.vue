<template>
    <div class="home">
        <Header/>
        <China-num :chinaNumData='chinaNumData'/>
        <Map/>
        <My-swiper/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import ChinaNum from '../components/ChinaNum.vue'
import api from '../api'
import Map from '../components/Map.vue'
import MySwiper from '../components/MySwiper.vue'

export default {
    name:'Home',
    data(){
        return{
            chinaNumData:{
                modifyTime: "", // 更新时间
                currentConfirmedCount: "", // 现存确诊人数
                confirmedCount: "", // 累计确诊人数
                suspectedCount: "", // 累计境外输入人数
                curedCount: "", // 累计治愈人数
                deadCount: "", // 	累计死亡人数
                seriousCount: "", // 现存无症状人数
                suspectedIncr: "", // 新增境外输入人数
                currentConfirmedIncr: "", // 相比昨天现存确诊人数
                confirmedIncr: "", // 相比昨天累计确诊人数
                curedIncr: "", // 相比昨天新增治愈人数
                deadIncr: "", // 相比昨天新增死亡人数
                seriousIncr: "", //相比昨天现存无症状人数
            }
        }
    },
    components:{
        Header,
        ChinaNum,
        Map,
        MySwiper
    },
    mounted(){
        api.getNcov({
            key:'6e55423aae2a60d365b2db6934e235be'
        }).then(res =>{
            console.log(res.data)
            if (res.status == 200){
                this.chinaNumData.modifyTime = res.data.newslist[0].desc.modifyTime
                this.chinaNumData.currentConfirmedCount = res.data.newslist[0].desc.currentConfirmedCount;
                this.chinaNumData.confirmedCount = res.data.newslist[0].desc.confirmedCount;
                this.chinaNumData.suspectedCount = res.data.newslist[0].desc.suspectedCount;
                this.chinaNumData.curedCount = res.data.newslist[0].desc.curedCount;
                this.chinaNumData.deadCount = res.data.newslist[0].desc.deadCount;
                this.chinaNumData.seriousCount = res.data.newslist[0].desc.seriousCount;
                this.chinaNumData.suspectedIncr = res.data.newslist[0].desc.suspectedIncr;
                this.chinaNumData.currentConfirmedIncr = res.data.newslist[0].desc.currentConfirmedIncr;
                this.chinaNumData.confirmedIncr = res.data.newslist[0].desc.confirmedIncr;
                this.chinaNumData.curedIncr = res.data.newslist[0].desc.curedIncr;
                this.chinaNumData.deadIncr = res.data.newslist[0].desc.deadIncr;
                this.chinaNumData.seriousIncr = res.data.newslist[0].desc.seriousIncr;
            }
        }).catch(error =>{console.log(error);})
    }
}
</script>
