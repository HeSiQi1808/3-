   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.getElementById('chart1'));

   option = {
       xAxis: {
           type: 'category',
           data: ['2012', '2013', '2014', '2015', '2016', '2017']
       },
       yAxis: {
           type: 'value'
       },
       series: [{
           data: [10, 18, 4, 5, 3, 4],
           type: 'line'
       }]
   };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    $(window).resize(function(){
        myChart.resize()
    })