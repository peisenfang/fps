import echarts from 'echarts'
import nameMap from "./name"

const install =  function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    worldMap(id,data) {
                        var myEcharts = echarts.init(document.getElementById(id))
                        var option = {
                            tooltip: {
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{  // 映射-颜色值
                                orient: "horizontal", // 分段方向:horizontal水平
                                type: "piecewise", // 分段
                                pieces: [  // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 4999, color: "#ffe5da" },
                                    { min: 5000, max: 9999, color: "#ffc4b3" },
                                    { min: 10000, max: 99999, color: "#ff9a85" },
                                    { min: 100000, max: 999999, color: "#ff6a57" },
                                    { min: 1000000, max: 4999999, color: "#e83132" },
                                    { min: 5000000, max: 9999999, color: "#b80a09" },
                                    { min: 10000000, max: 9999999999, color: "#8a0907" },
                                ]
                            }],
                            series: [{
                                name: "世界地图",
                                type: "map",  // 配置图表类型
                                map: "world", // 世界地图
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.3,    // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: false,  // 控制地图显示名字
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap: nameMap,
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(254, 222, 84, 0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data: data
                            }]
                        }
                        myEcharts.setOption(option);
                    },

                }
            }
        }
    })
}
export default install