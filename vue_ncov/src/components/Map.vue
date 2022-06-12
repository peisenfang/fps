<template>
    <div class="map">
        <div class="title">世界疫情</div>
        <div id="worldMap"></div>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    mounted(){
        api.getNcovMap({
            key:"6e55423aae2a60d365b2db6934e235be"
        }).then(res=>{
            let worlds = [];
            for(let i = 0;i<res.data.newslist.length;i++){
                let temp = {
                    name:res.data.newslist[i].provinceName,
                    value:res.data.newslist[i].currentConfirmedCount
                }
                worlds.push(temp)
            }
            this.$charts.worldMap("worldMap",worlds)
            console.log(res);
        }).catch(error=>{
            console.log(error);
        })
    }
}
</script>

<style scoped>

#worldMap {
    width: 375px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>