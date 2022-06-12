<template>
  <div class="top">
    <div class="header"></div>
    <div class="title">中国疫情</div>
  </div>
</template>
<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 33.5%;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  background: url(../assets/1.jpg) no-repeat;
  background-size: cover;
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