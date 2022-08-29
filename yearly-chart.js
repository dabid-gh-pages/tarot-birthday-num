// summary of 혼의수,선천수,후천수

function loadYearlyChart(globalObject, chartElement) {
  const chartTitle = `${globalObject.startYear}년 ~ ${globalObject.endYear}년 연도운`;

  const dates = globalObject.yearlyNums.map(
    (yearObject) => yearObject.targetYear
  );
  const firstHalfSeriesData = globalObject.yearlyNums.map(
    (yearObject) => yearObject.firstHalfNum
  );
  const secondHalfSeriesData = globalObject.yearlyNums.map(
    (yearObject) => yearObject.secondHalfNum
  );
  const totalSeriesData = globalObject.yearlyNums.map(
    (yearObject) => yearObject.totalNum
  );
  const series = [
    { name: "상반기 수", data: firstHalfSeriesData },
    { name: "하반기 수", data: secondHalfSeriesData },
    { name: "총운 수", data: totalSeriesData },
  ];

  console.log(series);
  var options = {
    title: {
      text: chartTitle,
      // align: 'left',
      // margin: 10,
      // offsetX: 0,
      // offsetY: 0,
      // floating: false,
      // style: {
      //   fontSize:  '14px',
      //   fontWeight:  'bold',
      //   fontFamily:  undefined,
      //   color:  '#263238'
      // },
    },
    // theme: {
    //   mode: "light",
    //   palette: "palette1",
    //   monochrome: {
    //     // enabled: true,
    //     color: "#999999",
    //     shadeTo: "light",
    //     shadeIntensity: 0.95,
    //   },
    // },
    chart: {
      type: "line",
    },
    stroke: {
      // show: true,
      curve: "straight",
      lineCap: "butt",
      // colors: undefined,
      width: 2,
      // dashArray: 0,
    },
    dataLabels: {
      enabled: true,
    },

    series: series,
    xaxis: {
      type: "numeric",
      categories: dates,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
        decimalsInFloat: 0,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          // override the val here
        },
      },
    },
  };

  var chart = new ApexCharts(chartElement, options);

  chart.render();
}
