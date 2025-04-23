(function($) {
  'use strict';
  $(function() {
    if ($("#total-sales-chart").length) {
      var areaData = {
        labels: ["Mon","","Tue","", "Wed","", "Thu","", "Fri","", "Sat"],
        datasets: [
          {
            data: [260000, 200000, 290000, 230000, 200000, 180000, 180000, 360000, 240000, 280000, 180000],
            backgroundColor: [
              'rgba(61, 165, 244, .0)'
            ],
            borderColor: [
              'rgb(61, 165, 244)'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "services"
          },
          {
            data: [160000, 120000, 175000, 290000, 380000, 210000, 320000, 150000, 310000, 180000, 160000],
            backgroundColor: [
              'rgba(241, 83, 110, .0)'
            ],
            borderColor: [
              'rgb(241, 83, 110)'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "services"
          }
        ]
      };
      const areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            display: true,
            ticks: {
              font: {
                size: 14,
                color: '#000'
              },
              padding: 20
            },
            grid: {
              display: false,
              drawBorder: false,
              borderColor: 'transparent',
              tickBorderColor: '#eeeeee'
            }
          },
          y: {
            display: true,
            ticks: {
              font: {
                size: 14,
                color: '#000'
              },
              padding: 18,
              stepSize: 100000,
              callback: function(value) {
                const ranges = [
                  { divider: 1e6, suffix: 'M' },
                  { divider: 1e3, suffix: 'k' }
                ];
                function formatNumber(n) {
                  for (const range of ranges) {
                    if (n >= range.divider) {
                      return (n / range.divider).toString() + range.suffix;
                    }
                  }
                  return n;
                }
                return formatNumber(value);
              }
            },
            grid: {
              drawBorder: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.37
          },
          point: {
            radius: 0
          }
        }
      };
      var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#total-sales-chart-dark").length) {
      var areaData = {
        labels: ["Mon","","Tue","", "Wed","", "Thu","", "Fri","", "Sat"],
        datasets: [
          {
            data: [260000, 200000, 290000, 230000, 200000, 180000, 180000, 360000, 240000, 280000, 180000],
            backgroundColor: [
              'rgba(61, 165, 244, .0)'
            ],
            borderColor: [
              'rgb(61, 165, 244)'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "services"
          },
          {
            data: [160000, 120000, 175000, 290000, 380000, 210000, 320000, 150000, 310000, 180000, 160000],
            backgroundColor: [
              'rgba(241, 83, 110, .0)'
            ],
            borderColor: [
              'rgb(241, 83, 110)'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "services"
          }
        ]
      };
      const areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            display: true,
            ticks: {
              font: {
                size: 14,
                color: '#b1b1b5'
              },
              padding: 20
            },
            grid: {
              display: false,
              drawBorder: false,
              borderColor: 'transparent',
              tickBorderColor: '#eeeeee'
            }
          },
          y: {
            display: true,
            ticks: {
              font: {
                size: 14,
                color: '#b1b1b5'
              },
              padding: 18,
              stepSize: 100000,
              callback: function(value) {
                const ranges = [
                  { divider: 1e6, suffix: 'M' },
                  { divider: 1e3, suffix: 'k' }
                ];
                function formatNumber(n) {
                  for (const range of ranges) {
                    if (n >= range.divider) {
                      return (n / range.divider).toString() + range.suffix;
                    }
                  }
                  return n;
                }
                return formatNumber(value);
              }
            },
            grid: {
              drawBorder: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.37
          },
          point: {
            radius: 0
          }
        }
      };
      var revenueChartCanvas = $("#total-sales-chart-dark").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#users-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            data: [160, 105, 225, 140, 180, 61, 120, 60, 90],
            backgroundColor: [
              '#e0fff4'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      const areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            },
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            }
          },
          scales: {
            x: {
              display: false,
              ticks: {
                display: true
              },
              grid: {
                display: false,
                drawBorder: false,
                borderColor: 'transparent',
                tickBorderColor: '#eeeeee'
              }
            },
            y: {
              display: false,
              ticks: {
                display: true,
                min: 0,
                max: 300,
                stepSize: 100
              },
              grid: {
                drawBorder: false
              }
            }
          },
          elements: {
            line: {
              tension: 0.35
            },
            point: {
              radius: 0
            }
          }
        };
      var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#users-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            data: [160, 105, 225, 140, 180, 61, 120, 60, 90],
            backgroundColor: [
              'rgba(0, 198, 137, .1)'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      const areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            display: false,
            ticks: {
              display: true
            },
            grid: {
              display: false,
              drawBorder: false,
              borderColor: 'transparent',
              tickBorderColor: '#eeeeee'
            }
          },
          y: {
            display: false,
            ticks: {
              display: true,
              min: 0,
              max: 300,
              stepSize: 100
            },
            grid: {
              drawBorder: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.35
          },
          point: {
            radius: 0
          }
        }
      };
      var salesChartCanvas = $("#users-chart-dark").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#projects-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr","May"],
        datasets: [{
            data: [220, 120, 140, 135, 160, 65, 160, 135, 190,165, 120, 160, 140, 140, 130, 120,  150],
            backgroundColor: [
              '#e5f2ff'
            ],
            borderWidth: 2,
            borderColor: "#3da5f4",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      const areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            display: false,
            ticks: {
              display: true
            },
            grid: {
              display: false,
              drawBorder: false,
              borderColor: 'transparent',
              tickBorderColor: '#eeeeee'
            }
          },
          y: {
            display: false,
            ticks: {
              display: true,
              min: 0,
              max: 300,
              stepSize: 100
            },
            grid: {
              drawBorder: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.05
          },
          point: {
            radius: 0
          }
        }
      };
      var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($('#offlineProgress').length) {
      var bar = new ProgressBar.Circle(offlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e',
          width: 6
        },
        to: {
          color: '#f1536e',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.64); // Number from 0.0 to 1.0
    }

    if ($('#onlineProgress').length) {
      var bar = new ProgressBar.Circle(onlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.84); // Number from 0.0 to 1.0
    }

    if ($('#offlineProgressDark').length) {
      var bar = new ProgressBar.Circle(offlineProgressDark, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#131633",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e',
          width: 6
        },
        to: {
          color: '#f1536e',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.64); // Number from 0.0 to 1.0
    }

    if ($('#onlineProgressDark').length) {
      var bar = new ProgressBar.Circle(onlineProgressDark, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#131633",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.84); // Number from 0.0 to 1.0
    }

    if ($("#projects-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr","May"],
        datasets: [{
            data: [220, 120, 140, 135, 160, 65, 160, 135, 190,165, 120, 160, 140, 140, 130, 120,  150],
            backgroundColor: [
              'rgba(61, 165, 244, .1)'
            ],
            borderWidth: 2,
            borderColor: "#3da5f4",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      const areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            display: false,
            ticks: {
              display: true
            },
            grid: {
              display: false,
              drawBorder: false,
              borderColor: 'transparent',
              tickBorderColor: '#eeeeee'
            }
          },
          y: {
            display: false,
            ticks: {
              display: true,
              min: 0,
              max: 300,
              stepSize: 100
            },
            grid: {
              drawBorder: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.05
          },
          point: {
            radius: 0
          }
        }
      };
      var salesChartCanvas = $("#projects-chart-dark").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }    

    if ($("#distribution-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [100, 30, 70],
            backgroundColor: [
              "#3da5f4", "#f1536e", "#fda006"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '72%',
        aspectRatio: 1.6,
        elements: {
          arc: {
            borderWidth: 4
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },        
      };

      var distributionChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.width,
              height = chart.height,
              ctx = chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";
      
          var text = "70%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var customLegendPlugin = {
        id: 'custom-legend',
        afterUpdate: function(chart) {
          var legendContainer = document.getElementById('distribution-legend');
          var legendHTML = [];
          legendHTML.push('<div class="distribution-chart">');
          chart.data.labels.forEach(function(label, index) {
            legendHTML.push('<div class="item"><div class="legend-label" style="background-color: ' + chart.data.datasets[0].backgroundColor[index] + '; border: 3px solid ' + chart.data.datasets[0].backgroundColor[index] + ';"></div>');
            legendHTML.push('<p>' + label + '</p>');
            legendHTML.push('</div>');
          });
          legendHTML.push('</div>');
          legendContainer.innerHTML = legendHTML.join('');
        }
      };

      var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
      var distributionChart = new Chart(distributionChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: [distributionChartPlugins, customLegendPlugin]
      });
    }

    if ($("#distribution-chart-dark").length) {
        var areaData = {
          labels: ["Jan", "Feb", "Mar"],
          datasets: [{
            data: [100, 50, 50],
            backgroundColor: [
              "#00c689", "#3da5f4","#f1536e"
            ],
            borderColor: "rgba(0,0,0,0)"
          }]
        };

        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          cutout: '72%',
          aspectRatio: 1.6,
          elements: {
            arc: {
              borderWidth: 4
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            },            
          }
        };

        var distributionChartPlugins = {
          beforeDraw: function(chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = .96;
            ctx.font = "600 " + fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#fff";

            var text = "70%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        };
        
        var customLegendPlugin = {
        id: 'custom-legend',
        afterUpdate: function(chart) {
          var legendContainer = document.getElementById('distribution-legend');
          var legendHTML = [];
          legendHTML.push('<div class="distribution-chart">');
          chart.data.labels.forEach(function(label, index) {
            legendHTML.push('<div class="item"><div class="legend-label" style="background-color: ' + chart.data.datasets[0].backgroundColor[index] + '; border: 3px solid ' + chart.data.datasets[0].backgroundColor[index] + ';"></div>');
            legendHTML.push('<p>' + label + '</p>');
            legendHTML.push('</div>');
          });
          legendHTML.push('</div>');
          legendContainer.innerHTML = legendHTML.join('');
        }
      };


        var distributionChartCanvas = $("#distribution-chart-dark").get(0).getContext("2d");
        var distributionChart = new Chart(distributionChartCanvas, {
          type: 'doughnut',
          data: areaData,
          options: areaOptions,
          plugins: [distributionChartPlugins, customLegendPlugin]
        });

      }



    if ($("#sale-report-chart").length) {
      var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan","","Feb","","Mar", "", "Apr","", "May", "", "Jun"],
          datasets: [{
            label: 'Europe',
            data: [28000, 9000, 15000, 20000, 5000, 15000, 26000, 15000, 26000,20000, 28000],
            backgroundColor: ["#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4"]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            y: {
              display: true,
              grid: {
                drawBorder: false
              },
              ticks: {
                color: "#000",
                display: true,
                padding: 20,
                font: {
                  size: 14
                },
                stepSize: 10000,
                callback: function(value) {
                  const ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                    for (const range of ranges) {
                      if (n >= range.divider) {
                        return (n / range.divider).toString() + range.suffix;
                      }
                    }
                    return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            },
            x: {
              stacked: false,
              categoryPercentage: 0.6,
              ticks: {
                beginAtZero: true,
                color: "#000",
                display: true,
                padding: 20,
                font: {
                  size: 14
                }
              },
              grid: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
            }
          },
          barPercentage: 0.7,
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }


    if ($("#sale-report-chart-dark").length) {
      var CurrentChartCanvas = $("#sale-report-chart-dark").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan","","Feb","","Mar", "", "Apr","", "May", "", "Jun"],
          datasets: [{
              label: 'Europe',
              data: [28000, 9000, 15000, 20000, 5000, 15000, 26000, 15000, 26000,20000, 28000],
              backgroundColor: ["#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4"]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            y: {
              display: true,
              grid: {
                drawBorder: false
              },
              ticks: {
                color: "#eee",
                display: true,
                padding: 20,
                font: {
                  size: 14
                },
                stepSize: 10000,
                callback: function(value) {
                  const ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                    for (const range of ranges) {
                      if (n >= range.divider) {
                        return (n / range.divider).toString() + range.suffix;
                      }
                    }
                    return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            },
            x: {
              stacked: false,
              categoryPercentage: 0.6,
              ticks: {
                beginAtZero: true,
                color: "#eee",
                display: true,
                padding: 20,
                font: {
                  size: 14
                }
              },
              grid: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
            }
          },
          barPercentage: 0.7,
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

  });
})(jQuery);