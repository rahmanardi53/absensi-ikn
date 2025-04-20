$(function () {
  'use strict';
  if ($(".mapael-example-1").length) {
    $(".mapael-example-1").mapael({
      map: {
        name: "france_departments",
        defaultArea: {
          attrsHover: {
            fill: "#343434",
            stroke: "#5d5d5d",
            "stroke-width": 1,
            "stroke-linejoin": "round"
          }
        }
      },
      legend: {
        plot: {
          cssClass: 'myLegend',
          mode: 'horizontal',
          labelAttrs: {
            fill: "#aab2bd"
          },
          titleAttrs: {
            fill: "#aab2bd"
          },
          marginBottom: 20,
          marginLeft: 10,
          hideElemsOnClick: {
            opacity: 0
          },
          title: "French cities population",
          slices: [{
            size: 5,
            type: "circle",
            max: 20000,
            attrs: {
              fill: "#89ff72"
            },
            label: "200 +"
          }, {
            size: 15,
            type: "circle",
            min: 20000,
            max: 100000,
            attrs: {
              fill: "#fffd72"
            },
            label: "200 - 100"
          }, {
            size: 20,
            type: "circle",
            min: 100000,
            max: 200000,
            attrs: {
              fill: "#ffbd54"
            },
            label: "100 - 200"
          }, {
            size: 25,
            type: "circle",
            min: 200000,
            attrs: {
              fill: "#ff5454"
            },
            label: "200 +"
          }]
        }
      },
      plots: {
        "town-75056": {
          value: "2268265",
          latitude: 48.86,
          longitude: 2.3444444444444,
          href: "#",

        },
        "town-13055": {
          value: "859368",
          latitude: 43.296666666667,
          longitude: 5.3763888888889,
          href: "#",

        },
        "town-69123": {
          value: "492578",
          latitude: 45.758888888889,
          longitude: 4.8413888888889,
          href: "#",

        },
        "town-31555": {
          value: "449328",
          latitude: 43.604444444444,
          longitude: 1.4419444444444,
          href: "#",

        },
        "town-06088": {
          value: "347105",
          latitude: 43.701944444444,
          longitude: 7.2683333333333,
          href: "#",

        },
        "town-44109": {
          value: "293234",
          latitude: 47.217222222222,
          longitude: -1.5538888888889,
          href: "#",

        },
        "town-67482": {
          value: "276401",
          latitude: 48.583611111111,
          longitude: 7.7480555555556,
          href: "#",

        },
        "town-34172": {
          value: "260572",
          latitude: 43.611111111111,
          longitude: 3.8766666666667,
          href: "#",

        },
        "town-33063": {
          value: "242945",
          latitude: 44.837777777778,
          longitude: -0.57944444444444,
          href: "#",

        },
        "town-59350": {
          value: "234058",
          latitude: 50.631944444444,
          longitude: 3.0575,
          href: "#",

        },
        "town-35238": {
          value: "212939",
          latitude: 48.114166666667,
          longitude: -1.6808333333333,
          href: "#",

        },
        "town-51454": {
          value: "184011",
          latitude: 49.265277777778,
          longitude: 4.0286111111111,
          href: "#",

        },
        "town-76351": {
          value: "178070",
          latitude: 49.498888888889,
          longitude: 0.12111111111111,
          href: "#",

        },
        "town-42218": {
          value: "174566",
          latitude: 45.433888888889,
          longitude: 4.3897222222222,
          href: "#",

        },
        "town-83137": {
          value: "166851",
          latitude: 43.125,
          longitude: 5.9305555555556,
          href: "#",

        },
        "town-38185": {
          value: "158249",
          latitude: 45.186944444444,
          longitude: 5.7263888888889,
          href: "#",

        },
        "town-21231": {
          value: "155233",
          latitude: 47.323055555556,
          longitude: 5.0419444444444,
          href: "#",

        },
        "town-49007": {
          value: "151957",
          latitude: 47.472777777778,
          longitude: -0.55555555555556,
          href: "#",

        },
        "town-72181": {
          value: "147108",
          latitude: 48.004166666667,
          longitude: 0.19694444444444,
          href: "#",

        },
        "town-69266": {
          value: "146729",
          latitude: 45.766111111111,
          longitude: 4.8794444444444,
          href: "#",

        },
        "town-97411": {
          value: "146489",
          latitude: -20.878888888889,
          longitude: 55.448055555556,
          href: "#",

        },
        "town-29019": {
          value: "145561",
          latitude: 48.39,
          longitude: -4.4869444444444,
          href: "#",

        },
        "town-30189": {
          value: "145501",
          latitude: 43.836944444444,
          longitude: 4.36,
          href: "#",

        },
        "town-13001": {
          value: "144884",
          latitude: 43.527777777778,
          longitude: 5.4455555555556,
          href: "#",

        },
        "town-63113": {
          value: "143669",
          latitude: 45.779722222222,
          longitude: 3.0869444444444,
          href: "#",

        },
        "town-87085": {
          value: "141540",
          latitude: 45.834444444444,
          longitude: 1.2616666666667,
          href: "#",

        },
        "town-37261": {
          value: "138268",
          latitude: 47.392777777778,
          longitude: 0.68833333333333,
          href: "#",

        },
        "town-80021": {
          value: "136512",
          latitude: 49.891944444444,
          longitude: 2.2977777777778,
          href: "#",

        },
        "town-57463": {
          value: "122928",
          latitude: 49.119722222222,
          longitude: 6.1769444444444,
          href: "#",

        },
        "town-25056": {
          value: "121038",
          latitude: 47.242222222222,
          longitude: 6.0213888888889,
          href: "#",

        },
        "town-66136": {
          value: "119536",
          latitude: 42.6975,
          longitude: 2.8947222222222,
          href: "#",

        },
        "town-45234": {
          value: "117833",
          latitude: 47.902222222222,
          longitude: 1.9041666666667,
          href: "#",

        },
        "town-92012": {
          value: "115264",
          latitude: 48.835277777778,
          longitude: 2.2413888888889,
          href: "#",

        },
        "town-76540": {
          value: "113461",
          latitude: 49.443055555556,
          longitude: 1.1025,
          href: "#",

        },
        "town-14118": {
          value: "111949",
          latitude: 49.182222222222,
          longitude: -0.37055555555556,
          href: "#",

        },
        "town-68224": {
          value: "111273",
          latitude: 47.748611111111,
          longitude: 7.3391666666667,
          href: "#",

        },
        "town-93066": {
          value: "107959",
          latitude: 48.935555555556,
          longitude: 2.3538888888889,
          href: "#",

        },
        "town-93066": {
          value: "107959",
          latitude: 48.935555555556,
          longitude: 2.3538888888889,
          href: "#",

        },
        "town-54395": {
          value: "107710",
          latitude: 48.692777777778,
          longitude: 6.1836111111111,
          href: "#",

        },
        "town-95018": {
          value: "104843",
          latitude: 48.947777777778,
          longitude: 2.2475,
          href: "#",

        },
        "town-97415": {
          value: "104818",
          latitude: -21.009722222222,
          longitude: 55.269722222222,
          href: "#",

        },
        "town-93048": {
          value: "103675",
          latitude: 48.860277777778,
          longitude: 2.4430555555556,
          href: "#",

        },
        "town-59512": {
          value: "95506",
          latitude: 50.689166666667,
          longitude: 3.1808333333333,
          href: "#",

        },
        "town-59183": {
          value: "93489",
          latitude: 51.037777777778,
          longitude: 2.3763888888889,
          href: "#",

        },
        "town-59599": {
          value: "92620",
          latitude: 50.7225,
          longitude: 3.1602777777778,
          href: "#",

        },
        "town-84007": {
          value: "91657",
          latitude: 43.948611111111,
          longitude: 4.8083333333333,
          href: "#",

        },
        "town-92050": {
          value: "91114",
          latitude: 48.890555555556,
          longitude: 2.2036111111111,
          href: "#",

        },
        "town-94028": {
          value: "90779",
          latitude: 48.790555555556,
          longitude: 2.4619444444444,
          href: "#",

        },
        "town-86194": {
          value: "90386",
          latitude: 46.581111111111,
          longitude: 0.33527777777778,
          href: "#",

        },
        "town-97209": {
          value: "88623",
          latitude: 14.607222222222,
          longitude: -61.069444444444,
          href: "#",

        },
        "town-78646": {
          value: "88253",
          latitude: 48.804722222222,
          longitude: 2.1341666666667,
          href: "#",

        },
        "town-92026": {
          value: "88169",
          latitude: 48.897222222222,
          longitude: 2.2522222222222,
          href: "#",

        },
        "town-94081": {
          value: "86210",
          latitude: 48.7875,
          longitude: 2.3927777777778,
          href: "#",

        },
        "town-92025": {
          value: "86094",
          latitude: 48.923611111111,
          longitude: 2.2522222222222,
          href: "#",

        },
        "town-92004": {
          value: "82998",
          latitude: 48.911111111111,
          longitude: 2.2855555555556,
          href: "#",

        },
        "town-93005": {
          value: "82778",
          latitude: 48.936388888889,
          longitude: 2.4930555555556,
          href: "#",

        },
        "town-64445": {
          value: "82776",
          latitude: 43.300833333333,
          longitude: -0.37,
          href: "#",

        },
        "town-92063": {
          value: "80905",
          latitude: 48.877777777778,
          longitude: 2.1883333333333,
          href: "#",

        },
        "town-97416": {
          value: "80027",
          latitude: -21.341944444444,
          longitude: 55.477777777778,
          href: "#",

        },
        "town-17300": {
          value: "77875",
          latitude: 46.159444444444,
          longitude: -1.1513888888889,
          href: "#",

        },
        "town-93001": {
          value: "76728",
          latitude: 48.911111111111,
          longitude: 2.3825,
          href: "#",

        },
        "town-94017": {
          value: "76235",
          latitude: 48.817222222222,
          longitude: 2.5155555555556,
          href: "#",

        },
        "town-94068": {
          value: "75772",
          latitude: 48.798611111111,
          longitude: 2.4988888888889,
          href: "#",

        },
        "town-06004": {
          value: "75174",
          latitude: 43.58,
          longitude: 7.1230555555556,
          href: "#",

        },
        "town-62193": {
          value: "74573",
          latitude: 50.9475,
          longitude: 1.8555555555556,
          href: "#",

        },
        "town-06029": {
          value: "74273",
          latitude: 43.5525,
          longitude: 7.0213888888889,
          href: "#",

        },
        "town-97422": {
          value: "74174",
          latitude: -21.278055555556,
          longitude: 55.515277777778,
          href: "#",

        },
        "town-34032": {
          value: "72466",
          latitude: 43.343333333333,
          longitude: 3.2161111111111,
          href: "#",

        },
        "town-44184": {
          value: "69724",
          latitude: 47.279444444444,
          longitude: -2.21,
          href: "#",

        },
        "town-68066": {
          value: "69187",
          latitude: 48.081111111111,
          longitude: 7.355,
          href: "#",

        },
        "town-18033": {
          value: "68590",
          latitude: 47.083611111111,
          longitude: 2.3955555555556,
          href: "#",

        },
        "town-93029": {
          value: "67202",
          latitude: 48.923333333333,
          longitude: 2.445,
          href: "#",

        },
        "town-33281": {
          value: "67136",
          latitude: 44.8425,
          longitude: -0.645,
          href: "#",

        },
        "town-29232": {
          value: "67131",
          latitude: 47.995833333333,
          longitude: -4.0977777777778,
          href: "#",

        },
        "town-2A004": {
          value: "66203",
          latitude: 41.925555555556,
          longitude: 8.7363888888889,
          href: "#",

        },
        "town-92040": {
          value: "65178",
          latitude: 48.823055555556,
          longitude: 2.2691666666667,
          href: "#",

        },
        "town-26362": {
          value: "65043",
          latitude: 44.9325,
          longitude: 4.8908333333333,
          href: "#",

        },
        "town-92044": {
          value: "64757",
          latitude: 48.893333333333,
          longitude: 2.2877777777778,
          href: "#",

        },
        "town-59009": {
          value: "64328",
          latitude: 50.622777777778,
          longitude: 3.1441666666667,
          href: "#",

        },
        "town-93051": {
          value: "63526",
          latitude: 48.843888888889,
          longitude: 2.5580555555556,
          href: "#",

        },
        "town-83126": {
          value: "62883",
          latitude: 43.103055555556,
          longitude: 5.8783333333333,
          href: "#",

        },
        "town-92002": {
          value: "62644",
          latitude: 48.753333333333,
          longitude: 2.2966666666667,
          href: "#",

        },
        "town-92051": {
          value: "62565",
          latitude: 48.887222222222,
          longitude: 2.2675,
          href: "#",

        },
        "town-10387": {
          value: "61936",
          latitude: 48.298888888889,
          longitude: 4.0780555555556,
          href: "#",

        },
        "town-69259": {
          value: "60448",
          latitude: 45.696944444444,
          longitude: 4.8858333333333,
          href: "#",

        },
        "town-79191": {
          value: "59504",
          latitude: 46.325,
          longitude: -0.46222222222222,
          href: "#",

        },
        "town-97101": {
          value: "59267",
          latitude: 16.270555555556,
          longitude: -61.504722222222,
          href: "#",

        },
        "town-92024": {
          value: "59228",
          latitude: 48.903611111111,
          longitude: 2.3055555555556,
          href: "#",

        },
        "town-95585": {
          value: "59204",
          latitude: 48.997222222222,
          longitude: 2.3780555555556,
          href: "#",

        },
        "town-73065": {
          value: "59184",
          latitude: 45.566388888889,
          longitude: 5.9208333333333,
          href: "#",

        },
        "town-33318": {
          value: "58977",
          latitude: 44.805833333333,
          longitude: -0.63222222222222,
          href: "#",

        },
        "town-56121": {
          value: "58831",
          latitude: 47.745833333333,
          longitude: -3.3663888888889,
          href: "#",

        },
        "town-94041": {
          value: "58189",
          latitude: 48.813888888889,
          longitude: 2.3877777777778,
          href: "#",

        },
        "town-82121": {
          value: "58014",
          latitude: 44.017222222222,
          longitude: 1.355,
          href: "#",

        },
        "town-95127": {
          value: "57900",
          latitude: 49.035833333333,
          longitude: 2.0625,
          href: "#",

        },
        "town-02691": {
          value: "57533",
          latitude: 49.847777777778,
          longitude: 3.2855555555556,
          href: "#",

        },
        "town-60057": {
          value: "56181",
          latitude: 49.434166666667,
          longitude: 2.0875,
          href: "#",

        },
        "town-49099": {
          value: "56137",
          latitude: 47.058888888889,
          longitude: -0.87972222222222,
          href: "#",

        },
        "town-85191": {
          value: "56101",
          latitude: 46.669722222222,
          longitude: -1.4277777777778,
          href: "#",

        },
        "town-97302": {
          value: "56002",
          latitude: 4.9386111111111,
          longitude: -52.335,
          href: "#",

        },
        "town-83069": {
          value: "55906",
          latitude: 43.118888888889,
          longitude: 6.1286111111111,
          href: "#",

        },
        "town-94076": {
          value: "55879",
          latitude: 48.793888888889,
          longitude: 2.3611111111111,
          href: "#",

        },
        "town-56260": {
          value: "55116",
          latitude: 47.655,
          longitude: -2.7616666666667,
          href: "#",

        },
        "town-93031": {
          value: "54775",
          latitude: 48.954722222222,
          longitude: 2.3083333333333,
          href: "#",

        },
        "town-93055": {
          value: "54464",
          latitude: 48.898055555556,
          longitude: 2.4072222222222,
          href: "#",

        },
        "town-97409": {
          value: "54311",
          latitude: -20.960555555556,
          longitude: 55.650555555556,
          href: "#",

        },
        "town-53130": {
          value: "54100",
          latitude: 48.072777777778,
          longitude: -0.77,
          href: "#",

        },
        "town-93010": {
          value: "53934",
          latitude: 48.902777777778,
          longitude: 2.4836111111111,
          href: "#",

        },
        "town-13004": {
          value: "53785",
          latitude: 43.676944444444,
          longitude: 4.6286111111111,
          href: "#",

        },
        "town-94033": {
          value: "53667",
          latitude: 48.851666666667,
          longitude: 2.4772222222222,
          href: "#",

        },
        "town-94046": {
          value: "53513",
          latitude: 48.805833333333,
          longitude: 2.4377777777778,
          href: "#",

        },
        "town-27229": {
          value: "53260",
          latitude: 49.023333333333,
          longitude: 1.1525,
          href: "#",

        },
        "town-77108": {
          value: "53238",
          latitude: 48.878611111111,
          longitude: 2.5888888888889,
          href: "#",

        },
        "town-92023": {
          value: "53113",
          latitude: 48.800833333333,
          longitude: 2.2619444444444,
          href: "#",

        },
        "town-91228": {
          value: "53019",
          latitude: 48.633888888889,
          longitude: 2.4441666666667,
          href: "#",

        },
        "town-83061": {
          value: "52580",
          latitude: 43.433055555556,
          longitude: 6.7355555555556,
          href: "#",

        },
        "town-77284": {
          value: "52540",
          latitude: 48.959444444444,
          longitude: 2.8877777777778,
          href: "#",

        },
        "town-97414": {
          value: "52507",
          latitude: -21.286666666667,
          longitude: 55.409166666667,
          href: "#",

        },
        "town-11262": {
          value: "52489",
          latitude: 43.184722222222,
          longitude: 3.0036111111111,
          href: "#",

        },
        "town-74010": {
          value: "52375",
          latitude: 45.899166666667,
          longitude: 6.1294444444444,
          href: "#",

        },
        "town-06069": {
          value: "52185",
          latitude: 43.658055555556,
          longitude: 6.9252777777778,
          href: "#",

        },
        "town-93007": {
          value: "51735",
          latitude: 48.938611111111,
          longitude: 2.4611111111111,
          href: "#",

        },
        "town-08105": {
          value: "51647",
          latitude: 49.771388888889,
          longitude: 4.7194444444444,
          href: "#",

        },
        "town-78586": {
          value: "51504",
          latitude: 48.945277777778,
          longitude: 2.17,
          href: "#",

        },
        "town-90010": {
          value: "51233",
          latitude: 47.641111111111,
          longitude: 6.8494444444444,
          href: "#",

        },
        "town-81004": {
          value: "51181",
          latitude: 43.928055555556,
          longitude: 2.1458333333333,
          href: "#",

        },
        "town-19031": {
          value: "50272",
          latitude: 45.158888888889,
          longitude: 1.5330555555556,
          href: "#",

        },
        "town-93071": {
          value: "50225",
          latitude: 48.941388888889,
          longitude: 2.5227777777778,
          href: "#",

        },
        "town-92049": {
          value: "48983",
          latitude: 48.816388888889,
          longitude: 2.3211111111111,
          href: "#",

        },
        "town-94080": {
          value: "48955",
          latitude: 48.847777777778,
          longitude: 2.4391666666667,
          href: "#",

        },
        "town-11069": {
          value: "48893",
          latitude: 43.215833333333,
          longitude: 2.3513888888889,
          href: "#",

        },
        "town-41018": {
          value: "48568",
          latitude: 47.593055555556,
          longitude: 1.3272222222222,
          href: "#",

        },
        "town-13056": {
          value: "48261",
          latitude: 43.405277777778,
          longitude: 5.0475,
          href: "#",

        },
        "town-22278": {
          value: "48246",
          latitude: 48.513611111111,
          longitude: -2.7602777777778,
          href: "#",

        },
        "town-36044": {
          value: "48187",
          latitude: 46.809722222222,
          longitude: 1.6902777777778,
          href: "#",

        },
        "town-35288": {
          value: "48133",
          latitude: 48.647222222222,
          longitude: -2.0088888888889,
          href: "#",

        },
        "town-93008": {
          value: "47855",
          latitude: 48.909722222222,
          longitude: 2.4386111111111,
          href: "#",

        },
        "town-06027": {
          value: "47711",
          latitude: 43.663611111111,
          longitude: 7.1483333333333,
          href: "#",

        },
        "town-93070": {
          value: "47604",
          latitude: 48.906944444444,
          longitude: 2.3330555555556,
          href: "#",

        },
        "town-92073": {
          value: "47121",
          latitude: 48.871111111111,
          longitude: 2.2269444444444,
          href: "#",

        },
        "town-13005": {
          value: "46892",
          latitude: 43.290833333333,
          longitude: 5.5708333333333,
          href: "#",

        },
        "town-71076": {
          value: "46791",
          latitude: 46.793611111111,
          longitude: 4.8475,
          href: "#",

        },
        "town-51108": {
          value: "46668",
          latitude: 48.956666666667,
          longitude: 4.3644444444444,
          href: "#",

        },
        "town-64102": {
          value: "46191",
          latitude: 43.4925,
          longitude: -1.4763888888889,
          href: "#",

        },
        "town-92048": {
          value: "45834",
          latitude: 48.8075,
          longitude: 2.2402777777778,
          href: "#",

        },
        "town-92062": {
          value: "45093",
          latitude: 48.884166666667,
          longitude: 2.2380555555556,
          href: "#",

        },
        "town-65440": {
          value: "44952",
          latitude: 43.232777777778,
          longitude: 0.07444444444444399,
          href: "#",

        },
        "town-94002": {
          value: "44439",
          latitude: 48.7975,
          longitude: 2.4241666666667,
          href: "#",

        },
        "town-59606": {
          value: "44362",
          latitude: 50.359166666667,
          longitude: 3.525,
          href: "#",

        },
        "town-16015": {
          value: "44219",
          latitude: 45.649444444444,
          longitude: 0.15944444444444,
          href: "#",

        },
        "town-44162": {
          value: "44078",
          latitude: 47.211388888889,
          longitude: -1.6511111111111,
          href: "#",

        },
        "town-81065": {
          value: "43995",
          latitude: 43.605833333333,
          longitude: 2.24,
          href: "#",

        },
        "town-13103": {
          value: "43830",
          latitude: 43.640555555556,
          longitude: 5.0972222222222,
          href: "#",

        },
        "town-62160": {
          value: "43805",
          latitude: 50.725555555556,
          longitude: 1.6138888888889,
          href: "#",

        },
        "town-91174": {
          value: "43747",
          latitude: 48.610277777778,
          longitude: 2.4747222222222,
          href: "#",

        },
        "town-13047": {
          value: "43651",
          latitude: 43.514166666667,
          longitude: 4.9888888888889,
          href: "#",

        },
        "town-2B033": {
          value: "43615",
          latitude: 42.7,
          longitude: 9.449444444444399,
          href: "#",

        },
        "town-59178": {
          value: "43530",
          latitude: 50.370833333333,
          longitude: 3.0791666666667,
          href: "#",

        },
        "town-34301": {
          value: "43436",
          latitude: 43.404444444444,
          longitude: 3.6966666666667,
          href: "#",

        },
        "town-62041": {
          value: "43289",
          latitude: 50.289166666667,
          longitude: 2.78,
          href: "#",

        },
        "town-78361": {
          value: "43268",
          latitude: 48.990555555556,
          longitude: 1.7166666666667,
          href: "#",

        },
        "town-91377": {
          value: "43006",
          latitude: 48.730555555556,
          longitude: 2.2763888888889,
          href: "#",

        },
        "town-06030": {
          value: "42780",
          latitude: 43.576111111111,
          longitude: 7.0186111111111,
          href: "#",

        },
        "town-30007": {
          value: "42697",
          latitude: 44.127222222222,
          longitude: 4.0808333333333,
          href: "#",

        },
        "town-69290": {
          value: "42428",
          latitude: 45.696388888889,
          longitude: 4.9438888888889,
          href: "#",

        },
        "town-60159": {
          value: "42295",
          latitude: 49.414166666667,
          longitude: 2.8222222222222,
          href: "#",

        },
        "town-01053": {
          value: "42184",
          latitude: 46.204722222222,
          longitude: 5.2280555555556,
          href: "#",

        },
        "town-93046": {
          value: "42060",
          latitude: 48.918333333333,
          longitude: 2.5352777777778,
          href: "#",

        },
        "town-78551": {
          value: "42009",
          latitude: 48.896388888889,
          longitude: 2.0905555555556,
          href: "#",

        },
        "town-33522": {
          value: "41971",
          latitude: 44.808333333333,
          longitude: -0.5891666666666699,
          href: "#",

        },
        "town-57672": {
          value: "41971",
          latitude: 49.358055555556,
          longitude: 6.1683333333333,
          href: "#",

        },
        "town-69256": {
          value: "41970",
          latitude: 45.786944444444,
          longitude: 4.925,
          href: "#",

        },
        "town-69034": {
          value: "41840",
          latitude: 45.794722222222,
          longitude: 4.8463888888889,
          href: "#",

        },
        "town-59650": {
          value: "41809",
          latitude: 50.701111111111,
          longitude: 3.2133333333333,
          href: "#",

        },
        "town-92036": {
          value: "41676",
          latitude: 48.9325,
          longitude: 2.3047222222222,
          href: "#",

        },
        "town-05061": {
          value: "41659",
          latitude: 44.558611111111,
          longitude: 6.0777777777778,
          href: "#",

        },
        "town-93064": {
          value: "41431",
          latitude: 48.873055555556,
          longitude: 2.4852777777778,
          href: "#",

        },
        "town-94022": {
          value: "41275",
          latitude: 48.766388888889,
          longitude: 2.4077777777778,
          href: "#",

        },
        "town-77288": {
          value: "40609",
          latitude: 48.539722222222,
          longitude: 2.6591666666667,
          href: "#",

        },
        "town-28085": {
          value: "40420",
          latitude: 48.446666666667,
          longitude: 1.4883333333333,
          href: "#",

        },
        "town-95268": {
          value: "40274",
          latitude: 48.971944444444,
          longitude: 2.4,
          href: "#",

        },
        "town-97213": {
          value: "39996",
          latitude: 14.615277777778,
          longitude: -61.001944444444,
          href: "#",

        },
        "town-93053": {
          value: "39949",
          latitude: 48.890833333333,
          longitude: 2.4536111111111,
          href: "#",

        },
        "town-59378": {
          value: "39782",
          latitude: 50.670277777778,
          longitude: 3.0963888888889,
          href: "#",

        },
        "town-50129": {
          value: "39772",
          latitude: 49.638611111111,
          longitude: -1.6158333333333,
          href: "#",

        },
        "town-03185": {
          value: "39712",
          latitude: 46.34,
          longitude: 2.6025,
          href: "#",

        },
        "town-44143": {
          value: "39683",
          latitude: 47.190555555556,
          longitude: -1.5691666666667,
          href: "#",

        },
        "town-64024": {
          value: "39432",
          latitude: 43.484166666667,
          longitude: -1.5194444444444,
          href: "#",

        },
        "town-93032": {
          value: "39350",
          latitude: 48.881666666667,
          longitude: 2.5388888888889,
          href: "#",

        },
        "town-69029": {
          value: "39238",
          latitude: 45.738611111111,
          longitude: 4.9130555555556,
          href: "#",

        },
        "town-97407": {
          value: "38668",
          latitude: -20.939444444444,
          longitude: 55.287222222222,
          href: "#",

        },
        "town-97311": {
          value: "38657",
          latitude: 5.5038888888889,
          longitude: -54.028888888889,
          href: "#",

        },
        "town-92007": {
          value: "38384",
          latitude: 48.797777777778,
          longitude: 2.3125,
          href: "#",

        },
        "town-93027": {
          value: "38361",
          latitude: 48.931388888889,
          longitude: 2.3958333333333,
          href: "#",

        },
        "town-58194": {
          value: "38352",
          latitude: 46.9925,
          longitude: 3.1566666666667,
          href: "#",

        },
        "town-89024": {
          value: "38248",
          latitude: 47.7975,
          longitude: 3.5669444444444,
          href: "#",

        },
        "town-42187": {
          value: "38225",
          latitude: 46.036111111111,
          longitude: 4.0680555555556,
          href: "#",

        },
        "town-78498": {
          value: "38049",
          latitude: 48.928888888889,
          longitude: 2.0447222222222,
          href: "#",

        },
        "town-83050": {
          value: "37295",
          latitude: 43.539444444444,
          longitude: 6.4661111111111,
          href: "#",

        },
        "town-91589": {
          value: "37203",
          latitude: 48.673888888889,
          longitude: 2.3525,
          href: "#",

        },
        "town-26198": {
          value: "36669",
          latitude: 44.558611111111,
          longitude: 4.7508333333333,
          href: "#",

        },
        "town-37122": {
          value: "36525",
          latitude: 47.350555555556,
          longitude: 0.66166666666667,
          href: "#",

        },
        "town-38421": {
          value: "36504",
          latitude: 45.166388888889,
          longitude: 5.7647222222222,
          href: "#",

        },
        "town-97412": {
          value: "36459",
          latitude: -21.378611111111,
          longitude: 55.619166666667,
          href: "#",

        },
        "town-42207": {
          value: "36397",
          latitude: 45.476388888889,
          longitude: 4.5147222222222,
          href: "#",

        },
        "town-38151": {
          value: "36054",
          latitude: 45.142777777778,
          longitude: 5.7177777777778,
          href: "#",

        },
        "town-93078": {
          value: "35931",
          latitude: 48.960555555556,
          longitude: 2.5302777777778,
          href: "#",

        },
        "town-69264": {
          value: "35900",
          latitude: 45.989444444444,
          longitude: 4.7197222222222,
          href: "#",

        },
        "town-77373": {
          value: "35873",
          latitude: 48.798333333333,
          longitude: 2.6052777777778,
          href: "#",

        },
        "town-78172": {
          value: "35840",
          latitude: 48.997222222222,
          longitude: 2.0944444444444,
          href: "#",

        },
        "town-62498": {
          value: "35748",
          latitude: 50.431388888889,
          longitude: 2.8325,
          href: "#",

        },
        "town-31149": {
          value: "35480",
          latitude: 43.612777777778,
          longitude: 1.3358333333333,
          href: "#",

        },
        "town-13117": {
          value: "35459",
          latitude: 43.46,
          longitude: 5.2486111111111,
          href: "#",

        },
        "town-83129": {
          value: "35415",
          latitude: 43.093333333333,
          longitude: 5.8394444444444,
          href: "#",

        },
        "town-47001": {
          value: "35293",
          latitude: 44.203055555556,
          longitude: 0.61861111111111,
          href: "#",

        },
        "town-74281": {
          value: "35257",
          latitude: 46.370555555556,
          longitude: 6.4797222222222,
          href: "#",

        },
        "town-97410": {
          value: "35252",
          latitude: -21.033888888889,
          longitude: 55.712777777778,
          href: "#",

        },
        "town-71270": {
          value: "35118",
          latitude: 46.306666666667,
          longitude: 4.8319444444444,
          href: "#",

        },
        "town-67180": {
          value: "34913",
          latitude: 48.816666666667,
          longitude: 7.7877777777778,
          href: "#",

        },
        "town-13054": {
          value: "34773",
          latitude: 43.416944444444,
          longitude: 5.2147222222222,
          href: "#",

        },
        "town-93073": {
          value: "34744",
          latitude: 48.956111111111,
          longitude: 2.5763888888889,
          href: "#",

        },
        "town-88160": {
          value: "34575",
          latitude: 48.173611111111,
          longitude: 6.4516666666667,
          href: "#",

        },
        "town-91549": {
          value: "34514",
          latitude: 48.637777777778,
          longitude: 2.3322222222222,
          href: "#",

        },
        "town-26281": {
          value: "34321",
          latitude: 45.045555555556,
          longitude: 5.0508333333333,
          href: "#",

        },
        "town-13028": {
          value: "34258",
          latitude: 43.176111111111,
          longitude: 5.6080555555556,
          href: "#",

        },
        "town-93006": {
          value: "34232",
          latitude: 48.866944444444,
          longitude: 2.4169444444444,
          href: "#",

        },
        "town-83118": {
          value: "34220",
          latitude: 43.424722222222,
          longitude: 6.7677777777778,
          href: "#",

        },
        "town-83118": {
          value: "34220",
          latitude: 43.424722222222,
          longitude: 6.7677777777778,
          href: "#",

        },
        "town-93072": {
          value: "34048",
          latitude: 48.955277777778,
          longitude: 2.3822222222222,
          href: "#",

        },
        "town-60175": {
          value: "34001",
          latitude: 49.257777777778,
          longitude: 2.4827777777778,
          href: "#",

        },
        "town-78423": {
          value: "33899",
          latitude: 48.770555555556,
          longitude: 2.0325,
          href: "#",

        },
        "town-93050": {
          value: "33781",
          latitude: 48.857777777778,
          longitude: 2.5311111111111,
          href: "#",

        },
        "town-86066": {
          value: "33420",
          latitude: 46.816944444444,
          longitude: 0.54527777777778,
          href: "#",

        },
        "town-59122": {
          value: "33345",
          latitude: 50.175833333333,
          longitude: 3.2347222222222,
          href: "#",

        },
        "town-95252": {
          value: "33324",
          latitude: 48.988055555556,
          longitude: 2.2305555555556,
          href: "#",

        },
        "town-40192": {
          value: "33124",
          latitude: 43.890277777778,
          longitude: -0.50055555555556,
          href: "#",

        },
        "town-76217": {
          value: "32966",
          latitude: 49.921666666667,
          longitude: 1.0777777777778,
          href: "#",

        },
        "town-92020": {
          value: "32947",
          latitude: 48.801111111111,
          longitude: 2.2886111111111,
          href: "#",

        },
        "town-94058": {
          value: "32799",
          latitude: 48.842222222222,
          longitude: 2.5036111111111,
          href: "#",

        },
        "town-74012": {
          value: "32790",
          latitude: 46.195,
          longitude: 6.2355555555556,
          href: "#",

        },
        "town-92019": {
          value: "32573",
          latitude: 48.765277777778,
          longitude: 2.2780555555556,
          href: "#",

        },
        "town-94078": {
          value: "32506",
          latitude: 48.7325,
          longitude: 2.4497222222222,
          href: "#",

        },
        "town-91687": {
          value: "32396",
          latitude: 48.669444444444,
          longitude: 2.3758333333333,
          href: "#",

        },
        "town-62510": {
          value: "32328",
          latitude: 50.421944444444,
          longitude: 2.7777777777778,
          href: "#",

        },
        "town-94052": {
          value: "31975",
          latitude: 48.836666666667,
          longitude: 2.4825,
          href: "#",

        },
        "town-78311": {
          value: "31849",
          latitude: 48.925555555556,
          longitude: 2.1883333333333,
          href: "#",

        },
        "town-28134": {
          value: "31610",
          latitude: 48.736388888889,
          longitude: 1.3655555555556,
          href: "#",

        },
        "town-54547": {
          value: "31464",
          latitude: 48.656111111111,
          longitude: 6.1675,
          href: "#",

        },
        "town-59392": {
          value: "31435",
          latitude: 50.276944444444,
          longitude: 3.9725,
          href: "#",

        },
        "town-78490": {
          value: "31360",
          latitude: 48.817777777778,
          longitude: 1.9463888888889,
          href: "#",

        },
        "town-92046": {
          value: "31325",
          latitude: 48.817222222222,
          longitude: 2.2991666666667,
          href: "#",

        },
        "town-97413": {
          value: "31298",
          latitude: -21.166388888889,
          longitude: 55.286944444444,
          href: "#",

        },
        "town-95280": {
          value: "31237",
          latitude: 49.031666666667,
          longitude: 2.4736111111111,
          href: "#",

        },
        "town-67447": {
          value: "31218",
          latitude: 48.606944444444,
          longitude: 7.7491666666667,
          href: "#",

        },
        "town-91477": {
          value: "31175",
          latitude: 48.718333333333,
          longitude: 2.2497222222222,
          href: "#",

        },
        "town-78440": {
          value: "31116",
          latitude: 48.993055555556,
          longitude: 1.9083333333333,
          href: "#",

        },
        "town-95500": {
          value: "31011",
          latitude: 49.050833333333,
          longitude: 2.1008333333333,
          href: "#",

        },
        "town-24322": {
          value: "31000",
          latitude: 45.184166666667,
          longitude: 0.71805555555556,
          href: "#",

        },
        "town-91027": {
          value: "30845",
          latitude: 48.708611111111,
          longitude: 2.3891666666667,
          href: "#",

        },
        "town-97408": {
          value: "30784",
          latitude: -20.926388888889,
          longitude: 55.335833333333,
          href: "#",

        },
        "town-97103": {
          value: "30775",
          latitude: 16.2675,
          longitude: -61.586944444444,
          href: "#",

        },
        "town-69282": {
          value: "30672",
          latitude: 45.766388888889,
          longitude: 5.0027777777778,
          href: "#",

        },
        "town-78146": {
          value: "30667",
          latitude: 48.890555555556,
          longitude: 2.1569444444444,
          href: "#",

        },
        "town-94038": {
          value: "30588",
          latitude: 48.779166666667,
          longitude: 2.3372222222222,
          href: "#",

        },
        "town-92064": {
          value: "30416",
          latitude: 48.846388888889,
          longitude: 2.2152777777778,
          href: "#",

        },
        "town-69286": {
          value: "30375",
          latitude: 45.820555555556,
          longitude: 4.8975,
          href: "#",

        },
        "town-84031": {
          value: "30360",
          latitude: 44.055,
          longitude: 5.0480555555556,
          href: "#",

        },
        "town-97418": {
          value: "30293",
          latitude: -20.896944444444,
          longitude: 55.549166666667,
          href: "#",

        },
        "town-06123": {
          value: "30235",
          latitude: 43.673333333333,
          longitude: 7.19,
          href: "#",

        },
        "town-38544": {
          value: "30169",
          latitude: 45.525555555556,
          longitude: 4.8747222222222,
          href: "#",

        },
        "town-93014": {
          value: "29998",
          latitude: 48.909166666667,
          longitude: 2.5472222222222,
          href: "#",

        },
        "town-94073": {
          value: "29949",
          latitude: 48.764444444444,
          longitude: 2.3913888888889,
          href: "#",

        },
        "town-02722": {
          value: "29846",
          latitude: 49.381111111111,
          longitude: 3.3225,
          href: "#",

        },
        "town-84087": {
          value: "29791",
          latitude: 44.1375,
          longitude: 4.8088888888889,
          href: "#",

        },
        "town-78621": {
          value: "29705",
          latitude: 48.776666666667,
          longitude: 2.0016666666667,
          href: "#",

        },
        "town-78158": {
          value: "29682",
          latitude: 48.820277777778,
          longitude: 2.1302777777778,
          href: "#",

        },
        "town-15014": {
          value: "29677",
          latitude: 44.925277777778,
          longitude: 2.4397222222222,
          href: "#",

        },
        "town-94018": {
          value: "29664",
          latitude: 48.821388888889,
          longitude: 2.4119444444444,
          href: "#",

        },
        "town-92009": {
          value: "29519",
          latitude: 48.9175,
          longitude: 2.2683333333333,
          href: "#",

        },
        "town-76681": {
          value: "29518",
          latitude: 49.408611111111,
          longitude: 1.0891666666667,
          href: "#",

        },
        "town-91691": {
          value: "29392",
          latitude: 48.716111111111,
          longitude: 2.4908333333333,
          href: "#",

        },
        "town-06083": {
          value: "29389",
          latitude: 43.774722222222,
          longitude: 7.4997222222222,
          href: "#",

        },
        "town-33550": {
          value: "28905",
          latitude: 44.779444444444,
          longitude: -0.56694444444444,
          href: "#",

        },
        "town-59328": {
          value: "28870",
          latitude: 50.649444444444,
          longitude: 3.0241666666667,
          href: "#",

        },
        "town-77445": {
          value: "28838",
          latitude: 48.575833333333,
          longitude: 2.5827777777778,
          href: "#",

        },
        "town-91201": {
          value: "28802",
          latitude: 48.686111111111,
          longitude: 2.4094444444444,
          href: "#",

        },
        "town-49328": {
          value: "28772",
          latitude: 47.259166666667,
          longitude: -0.078055555555556,
          href: "#",

        },
        "town-24037": {
          value: "28691",
          latitude: 44.851111111111,
          longitude: 0.48194444444444,
          href: "#",

        },
        "town-76575": {
          value: "28601",
          latitude: 49.377777777778,
          longitude: 1.1041666666667,
          href: "#",

        },
        "town-94016": {
          value: "28550",
          latitude: 48.791944444444,
          longitude: 2.3319444444444,
          href: "#",

        },
        "town-78297": {
          value: "28518",
          latitude: 48.770555555556,
          longitude: 2.0730555555556,
          href: "#",

        },
        "town-06155": {
          value: "28450",
          latitude: 43.579722222222,
          longitude: 7.0533333333333,
          href: "#",

        },
        "town-73008": {
          value: "28439",
          latitude: 45.688611111111,
          longitude: 5.915,
          href: "#",

        },
        "town-97307": {
          value: "28407",
          latitude: 4.8505555555556,
          longitude: -52.331111111111,
          href: "#",

        },
        "town-33449": {
          value: "28396",
          latitude: 44.895555555556,
          longitude: -0.7175,
          href: "#",

        },
        "town-95063": {
          value: "28277",
          latitude: 48.925555555556,
          longitude: 2.2169444444444,
          href: "#",

        },
        "town-93077": {
          value: "28257",
          latitude: 48.890277777778,
          longitude: 2.5111111111111,
          href: "#",

        },
        "town-93059": {
          value: "28076",
          latitude: 48.964722222222,
          longitude: 2.3608333333333,
          href: "#",

        },
        "town-92060": {
          value: "27931",
          latitude: 48.783333333333,
          longitude: 2.2636111111111,
          href: "#",

        },
        "town-92035": {
          value: "27923",
          latitude: 48.905,
          longitude: 2.2436111111111,
          href: "#",

        },
        "town-61001": {
          value: "27863",
          latitude: 48.429722222222,
          longitude: 0.091944444444444,
          href: "#",

        },
        "town-95219": {
          value: "27713",
          latitude: 48.991388888889,
          longitude: 2.2594444444444,
          href: "#",

        },
        "town-91521": {
          value: "27689",
          latitude: 48.651111111111,
          longitude: 2.4130555555556,
          href: "#",

        },
        "town-18279": {
          value: "27675",
          latitude: 47.221944444444,
          longitude: 2.0683333333333,
          href: "#",

        },
        "town-94079": {
          value: "27568",
          latitude: 48.8275,
          longitude: 2.5447222222222,
          href: "#",

        },
        "town-67218": {
          value: "27556",
          latitude: 48.524722222222,
          longitude: 7.7144444444444,
          href: "#",

        },
        "town-91657": {
          value: "27546",
          latitude: 48.700277777778,
          longitude: 2.4172222222222,
          href: "#",

        },
        "town-17415": {
          value: "27430",
          latitude: 45.745277777778,
          longitude: -0.63444444444444,
          href: "#",

        },
        "town-92075": {
          value: "27314",
          latitude: 48.82,
          longitude: 2.2888888888889,
          href: "#",

        },
        "town-78208": {
          value: "27262",
          latitude: 48.783888888889,
          longitude: 1.9580555555556,
          href: "#",

        },
        "town-95680": {
          value: "27004",
          latitude: 49.008888888889,
          longitude: 2.3902777777778,
          href: "#",

        },
        "town-78517": {
          value: "27001",
          latitude: 48.643611111111,
          longitude: 1.83,
          href: "#",

        },
        "town-02408": {
          value: "26991",
          latitude: 49.563333333333,
          longitude: 3.6236111111111,
          href: "#",

        },
        "town-38053": {
          value: "26841",
          latitude: 45.590833333333,
          longitude: 5.2791666666667,
          href: "#",

        },
        "town-91286": {
          value: "26796",
          latitude: 48.656666666667,
          longitude: 2.3880555555556,
          href: "#",

        },
        "town-97113": {
          value: "26743",
          latitude: 16.205555555556,
          longitude: -61.491944444444,
          href: "#",

        },
        "town-62427": {
          value: "26728",
          latitude: 50.421111111111,
          longitude: 2.95,
          href: "#",

        },
        "town-95582": {
          value: "26659",
          latitude: 48.971666666667,
          longitude: 2.2569444444444,
          href: "#",

        },
        "town-95277": {
          value: "26627",
          latitude: 48.986666666667,
          longitude: 2.4486111111111,
          href: "#",

        },
        "town-52448": {
          value: "26549",
          latitude: 48.637777777778,
          longitude: 4.9488888888889,
          href: "#",

        },
        "town-95306": {
          value: "26533",
          latitude: 48.990277777778,
          longitude: 2.1655555555556,
          href: "#",

        },
        "town-62119": {
          value: "26530",
          latitude: 50.529722222222,
          longitude: 2.64,
          href: "#",

        },
        "town-25388": {
          value: "26501",
          latitude: 47.509722222222,
          longitude: 6.7983333333333,
          href: "#",

        },
        "town-94034": {
          value: "26446",
          latitude: 48.758888888889,
          longitude: 2.3236111111111,
          href: "#",

        },
        "town-95607": {
          value: "26440",
          latitude: 49.025833333333,
          longitude: 2.2266666666667,
          href: "#",

        },
        "town-83062": {
          value: "26321",
          latitude: 43.124722222222,
          longitude: 6.0105555555556,
          href: "#",

        },
        "town-27681": {
          value: "26306",
          latitude: 49.091666666667,
          longitude: 1.485,
          href: "#",

        },
        "town-94043": {
          value: "26267",
          latitude: 48.81,
          longitude: 2.3580555555556,
          href: "#",

        },
        "town-94071": {
          value: "26150",
          latitude: 48.769722222222,
          longitude: 2.5227777777778,
          href: "#",

        },
        "town-93063": {
          value: "26025",
          latitude: 48.883611111111,
          longitude: 2.4361111111111,
          href: "#",

        },
        "town-64122": {
          value: "25994",
          latitude: 43.480555555556,
          longitude: -1.5572222222222,
          href: "#",

        },
        "town-69275": {
          value: "25988",
          latitude: 45.768611111111,
          longitude: 4.9588888888889,
          href: "#",

        },
        "town-12202": {
          value: "25974",
          latitude: 44.35,
          longitude: 2.5741666666667,
          href: "#",

        },
        "town-17299": {
          value: "25962",
          latitude: 45.941944444444,
          longitude: -0.9669444444444401,
          href: "#",

        },
        "town-31557": {
          value: "25854",
          latitude: 43.584444444444,
          longitude: 1.3436111111111,
          href: "#",

        },
        "town-44190": {
          value: "25832",
          latitude: 47.207222222222,
          longitude: -1.5025,
          href: "#",

        },
        "town-13063": {
          value: "25823",
          latitude: 43.581388888889,
          longitude: 5.0013888888889,
          href: "#",

        },
        "town-59017": {
          value: "25786",
          latitude: 50.687222222222,
          longitude: 2.8802777777778,
          href: "#",

        },
        "town-91114": {
          value: "25785",
          latitude: 48.698055555556,
          longitude: 2.5033333333333,
          href: "#",

        },
        "town-39198": {
          value: "25776",
          latitude: 47.092222222222,
          longitude: 5.4897222222222,
          href: "#",

        },
        "town-89387": {
          value: "25676",
          latitude: 48.197222222222,
          longitude: 3.2833333333333,
          href: "#",

        },
        "town-34145": {
          value: "25509",
          latitude: 43.676944444444,
          longitude: 4.1352777777778,
          href: "#",

        },
        "town-93047": {
          value: "25499",
          latitude: 48.898333333333,
          longitude: 2.5647222222222,
          href: "#",

        },
        "town-84035": {
          value: "25440",
          latitude: 43.836666666667,
          longitude: 5.0372222222222,
          href: "#",

        },
        "town-69149": {
          value: "25413",
          latitude: 45.714166666667,
          longitude: 4.8075,
          href: "#",

        },
        "town-97304": {
          value: "25404",
          latitude: 5.1583333333333,
          longitude: -52.642777777778,
          href: "#",

        },
        "town-92078": {
          value: "25374",
          latitude: 48.937222222222,
          longitude: 2.3277777777778,
          href: "#",

        },
        "town-03310": {
          value: "25235",
          latitude: 46.126944444444,
          longitude: 3.4258333333333,
          href: "#",

        },
        "town-44114": {
          value: "25216",
          latitude: 47.270833333333,
          longitude: -1.6236111111111,
          href: "#",

        },
        "town-33039": {
          value: "25205",
          latitude: 44.807777777778,
          longitude: -0.54888888888889,
          href: "#",

        },
        "town-76322": {
          value: "25189",
          latitude: 49.406388888889,
          longitude: 1.0522222222222,
          href: "#",

        },
        "town-91692": {
          value: "25055",
          latitude: 48.682222222222,
          longitude: 2.1675,
          href: "#",

        },
        "town-33529": {
          value: "25018",
          latitude: 44.6325,
          longitude: -1.145,
          href: "#",

        },
        "town-34003": {
          value: "24972",
          latitude: 43.31,
          longitude: 3.4752777777778,
          href: "#",

        },
        "town-80001": {
          value: "24953",
          latitude: 50.105277777778,
          longitude: 1.8352777777778,
          href: "#",

        },
        "town-51230": {
          value: "24733",
          latitude: 49.04,
          longitude: 3.9591666666667,
          href: "#",

        },
        "town-47323": {
          value: "24700",
          latitude: 44.406944444444,
          longitude: 0.70416666666667,
          href: "#",

        },
        "town-31395": {
          value: "24653",
          latitude: 43.460277777778,
          longitude: 1.3258333333333,
          href: "#",

        },
        "town-77083": {
          value: "24636",
          latitude: 48.852777777778,
          longitude: 2.6019444444444,
          href: "#",

        },
        "town-97128": {
          value: "24611",
          latitude: 16.225555555556,
          longitude: -61.386111111111,
          href: "#",

        },
        "town-52121": {
          value: "24500",
          latitude: 48.110833333333,
          longitude: 5.1386111111111,
          href: "#",

        },
        "town-95203": {
          value: "24386",
          latitude: 48.991388888889,
          longitude: 2.2797222222222,
          href: "#",

        },
        "town-33243": {
          value: "24302",
          latitude: 44.915277777778,
          longitude: -0.24388888888889,
          href: "#",

        },
        "town-77514": {
          value: "24296",
          latitude: 48.942777777778,
          longitude: 2.6063888888889,
          href: "#",

        },
        "town-97222": {
          value: "24095",
          latitude: 14.6775,
          longitude: -60.939166666667,
          href: "#",

        },
        "town-95572": {
          value: "23889",
          latitude: 49.044166666667,
          longitude: 2.1102777777778,
          href: "#",

        },
        "town-62178": {
          value: "23869",
          latitude: 50.481111111111,
          longitude: 2.5477777777778,
          href: "#",

        },
        "town-91103": {
          value: "23812",
          latitude: 48.609444444444,
          longitude: 2.3077777777778,
          href: "#",

        },
        "town-77058": {
          value: "23663",
          latitude: 48.841666666667,
          longitude: 2.6977777777778,
          href: "#",

        },
        "town-97118": {
          value: "23606",
          latitude: 16.191388888889,
          longitude: -61.590277777778,
          href: "#",

        },
        "town-92032": {
          value: "23603",
          latitude: 48.789166666667,
          longitude: 2.2855555555556,
          href: "#",

        },
        "town-91223": {
          value: "23575",
          latitude: 48.435,
          longitude: 2.1622222222222,
          href: "#",

        },
        "town-33192": {
          value: "23546",
          latitude: 44.771388888889,
          longitude: -0.61694444444444,
          href: "#",

        },
        "town-33069": {
          value: "23539",
          latitude: 44.864722222222,
          longitude: -0.59861111111111,
          href: "#",

        },
        "town-92072": {
          value: "23412",
          latitude: 48.823055555556,
          longitude: 2.2108333333333,
          href: "#",

        },
        "town-95176": {
          value: "23318",
          latitude: 48.973055555556,
          longitude: 2.2005555555556,
          href: "#",

        },
        "town-01283": {
          value: "23308",
          latitude: 46.255555555556,
          longitude: 5.655,
          href: "#",

        },
        "town-78358": {
          value: "23287",
          latitude: 48.946111111111,
          longitude: 2.145,
          href: "#",

        },
        "town-71153": {
          value: "23186",
          latitude: 46.800555555556,
          longitude: 4.4402777777778,
          href: "#",

        },
        "town-21054": {
          value: "23135",
          latitude: 47.024166666667,
          longitude: 4.8388888888889,
          href: "#",

        },
        "town-91421": {
          value: "23131",
          latitude: 48.7075,
          longitude: 2.4552777777778,
          href: "#",

        },
        "town-57480": {
          value: "23049",
          latitude: 49.099722222222,
          longitude: 6.1533333333333,
          href: "#",

        },
        "town-32013": {
          value: "22931",
          latitude: 43.645277777778,
          longitude: 0.58861111111111,
          href: "#",

        },
        "town-59155": {
          value: "22918",
          latitude: 51.024722222222,
          longitude: 2.3908333333333,
          href: "#",

        },
        "town-04112": {
          value: "22852",
          latitude: 43.833333333333,
          longitude: 5.7830555555556,
          href: "#",

        },
        "town-12145": {
          value: "22775",
          latitude: 44.097777777778,
          longitude: 3.0777777777778,
          href: "#",

        },
        "town-59368": {
          value: "22758",
          latitude: 50.655277777778,
          longitude: 3.0702777777778,
          href: "#",

        },
        "town-56098": {
          value: "22744",
          latitude: 47.763333333333,
          longitude: -3.3388888888889,
          href: "#",

        },
        "town-34108": {
          value: "22743",
          latitude: 43.447222222222,
          longitude: 3.7555555555556,
          href: "#",

        },
        "town-97117": {
          value: "22716",
          latitude: 16.331111111111,
          longitude: -61.343611111111,
          href: "#",

        },
        "town-94067": {
          value: "22666",
          latitude: 48.841388888889,
          longitude: 2.4177777777778,
          href: "#",

        },
        "town-77468": {
          value: "22639",
          latitude: 48.850277777778,
          longitude: 2.6508333333333,
          href: "#",

        },
        "town-97420": {
          value: "22627",
          latitude: -20.905555555556,
          longitude: 55.607222222222,
          href: "#",

        },
        "town-33119": {
          value: "22588",
          latitude: 44.856944444444,
          longitude: -0.53277777777778,
          href: "#",

        },
        "town-14366": {
          value: "22547",
          latitude: 49.145555555556,
          longitude: 0.22555555555556,
          href: "#",

        },
        "town-77390": {
          value: "22514",
          latitude: 48.791111111111,
          longitude: 2.6513888888889,
          href: "#",

        },
        "town-06079": {
          value: "22498",
          latitude: 43.545555555556,
          longitude: 6.9375,
          href: "#",

        },
        "town-38169": {
          value: "22485",
          latitude: 45.193055555556,
          longitude: 5.6847222222222,
          href: "#",

        },
        "town-93045": {
          value: "22410",
          latitude: 48.88,
          longitude: 2.4169444444444,
          href: "#",

        },
        "town-69202": {
          value: "22229",
          latitude: 45.733611111111,
          longitude: 4.8025,
          href: "#",

        },
        "town-88413": {
          value: "22225",
          latitude: 48.284166666667,
          longitude: 6.9491666666667,
          href: "#",

        },
        "town-76498": {
          value: "22215",
          latitude: 49.430555555556,
          longitude: 1.0527777777778,
          href: "#",

        },
        "town-31069": {
          value: "22119",
          latitude: 43.635555555556,
          longitude: 1.39,
          href: "#",

        },
        "town-44215": {
          value: "22117",
          latitude: 47.168055555556,
          longitude: -1.4713888888889,
          href: "#",

        },
        "town-57631": {
          value: "22094",
          latitude: 49.110555555556,
          longitude: 7.0672222222222,
          href: "#",

        },
        "town-59295": {
          value: "22086",
          latitude: 50.724444444444,
          longitude: 2.5383333333333,
          href: "#",

        },
        "town-59360": {
          value: "22081",
          latitude: 50.612222222222,
          longitude: 3.0136111111111,
          href: "#",

        },
        "town-59410": {
          value: "22036",
          latitude: 50.641944444444,
          longitude: 3.1077777777778,
          href: "#",

        },
        "town-93057": {
          value: "21972",
          latitude: 48.905833333333,
          longitude: 2.5105555555556,
          href: "#",

        },
        "town-57227": {
          value: "21920",
          latitude: 49.188055555556,
          longitude: 6.9,
          href: "#",

        },
        "town-76108": {
          value: "21876",
          latitude: 49.460555555556,
          longitude: 1.1080555555556,
          href: "#",

        },
        "town-76108": {
          value: "21876",
          latitude: 49.460555555556,
          longitude: 1.1080555555556,
          href: "#",

        },
        "town-77122": {
          value: "21845",
          latitude: 48.661944444444,
          longitude: 2.5630555555556,
          href: "#",

        },
        "town-14327": {
          value: "21829",
          latitude: 49.203611111111,
          longitude: -0.32638888888889,
          href: "#",

        },
        "town-95197": {
          value: "21741",
          latitude: 48.975,
          longitude: 2.3286111111111,
          href: "#",

        },
        "town-40088": {
          value: "21702",
          latitude: 43.706944444444,
          longitude: -1.0513888888889,
          href: "#",

        },
        "town-94054": {
          value: "21691",
          latitude: 48.743611111111,
          longitude: 2.3927777777778,
          href: "#",

        },
        "town-91345": {
          value: "21574",
          latitude: 48.696944444444,
          longitude: 2.2955555555556,
          href: "#",

        },
        "town-95428": {
          value: "21475",
          latitude: 48.989722222222,
          longitude: 2.3219444444444,
          href: "#",

        },
        "town-45147": {
          value: "21450",
          latitude: 47.931944444444,
          longitude: 1.9211111111111,
          href: "#",

        },
        "town-78126": {
          value: "21374",
          latitude: 48.85,
          longitude: 2.145,
          href: "#",

        },
        "town-46042": {
          value: "21333",
          latitude: 44.4475,
          longitude: 1.4405555555556,
          href: "#",

        },
        "town-91272": {
          value: "21259",
          latitude: 48.701388888889,
          longitude: 2.1336111111111,
          href: "#",

        },
        "town-59271": {
          value: "21235",
          latitude: 51.013055555556,
          longitude: 2.3022222222222,
          href: "#",

        },
        "town-97229": {
          value: "21209",
          latitude: 14.616111111111,
          longitude: -61.101388888889,
          href: "#",

        },
        "town-91434": {
          value: "21113",
          latitude: 48.663333333333,
          longitude: 2.3513888888889,
          href: "#",

        },
        "town-83144": {
          value: "21035",
          latitude: 43.137222222222,
          longitude: 5.9825,
          href: "#",

        },
        "town-22113": {
          value: "20983",
          latitude: 48.7325,
          longitude: -3.4552777777778,
          href: "#",

        },
        "town-69204": {
          value: "20982",
          latitude: 45.695277777778,
          longitude: 4.7930555555556,
          href: "#",

        },
        "town-59163": {
          value: "20962",
          latitude: 50.674722222222,
          longitude: 3.1538888888889,
          href: "#",

        },
        "town-77152": {
          value: "20923",
          latitude: 48.515277777778,
          longitude: 2.6344444444444,
          href: "#",

        },
        "town-74011": {
          value: "20881",
          latitude: 45.919166666667,
          longitude: 6.1419444444444,
          href: "#",

        },
        "town-77285": {
          value: "20830",
          latitude: 48.5375,
          longitude: 2.6319444444444,
          href: "#",

        },
        "town-13041": {
          value: "20799",
          latitude: 43.454444444444,
          longitude: 5.4761111111111,
          href: "#",

        },
        "town-93049": {
          value: "20683",
          latitude: 48.860833333333,
          longitude: 2.5097222222222,
          href: "#",

        },
        "town-35115": {
          value: "20637",
          latitude: 48.351666666667,
          longitude: -1.2,
          href: "#",

        },
        "town-77350": {
          value: "20598",
          latitude: 48.769166666667,
          longitude: 2.6791666666667,
          href: "#",

        },
        "town-38563": {
          value: "20573",
          latitude: 45.363333333333,
          longitude: 5.59,
          href: "#",

        },
        "town-77243": {
          value: "20538",
          latitude: 48.878055555556,
          longitude: 2.7066666666667,
          href: "#",

        },
        "town-59172": {
          value: "20523",
          latitude: 50.328611111111,
          longitude: 3.395,
          href: "#",

        },
        "town-68297": {
          value: "20481",
          latitude: 47.585277777778,
          longitude: 7.565,
          href: "#",

        },
        "town-97129": {
          value: "20443",
          latitude: 16.333055555556,
          longitude: -61.698055555556,
          href: "#",

        },
        "town-59279": {
          value: "20370",
          latitude: 50.782777777778,
          longitude: 3.1247222222222,
          href: "#",

        },
        "town-78640": {
          value: "20348",
          latitude: 48.783333333333,
          longitude: 2.1883333333333,
          href: "#",

        },
        "town-91570": {
          value: "20345",
          latitude: 48.6325,
          longitude: 2.3027777777778,
          href: "#",

        },
        "town-95555": {
          value: "20326",
          latitude: 48.971111111111,
          longitude: 2.2819444444444,
          href: "#",

        },
        "town-92014": {
          value: "20303",
          latitude: 48.778055555556,
          longitude: 2.3158333333333,
          href: "#",

        },
        "town-59646": {
          value: "20293",
          latitude: 50.668611111111,
          longitude: 3.13,
          href: "#",

        },
        "town-54329": {
          value: "20286",
          latitude: 48.589444444444,
          longitude: 6.5016666666667,
          href: "#",

        },
        "town-33249": {
          value: "20271",
          latitude: 44.879166666667,
          longitude: -0.5216666666666701,
          href: "#",

        },
        "town-03190": {
          value: "20229",
          latitude: 46.564722222222,
          longitude: 3.3325,
          href: "#",

        },
        "town-45232": {
          value: "20196",
          latitude: 47.863055555556,
          longitude: 1.8997222222222,
          href: "#",

        },
        "town-94044": {
          value: "20112",
          latitude: 48.746388888889,
          longitude: 2.4883333333333,
          href: "#",

        },
        "town-33162": {
          value: "19998",
          latitude: 44.884444444444,
          longitude: -0.65138888888889,
          href: "#",

        },
        "town-92071": {
          value: "19986",
          latitude: 48.778611111111,
          longitude: 2.2905555555556,
          href: "#",

        },
        "town-94003": {
          value: "19964",
          latitude: 48.806666666667,
          longitude: 2.3352777777778,
          href: "#",

        },
        "town-50502": {
          value: "19944",
          latitude: 49.114444444444,
          longitude: -1.0916666666667,
          href: "#",

        },
        "town-69244": {
          value: "19938",
          latitude: 45.763333333333,
          longitude: 4.78,
          href: "#",

        },
        "town-76451": {
          value: "19880",
          latitude: 49.4625,
          longitude: 1.0872222222222,
          href: "#",

        },
        "town-33199": {
          value: "19877",
          latitude: 44.635277777778,
          longitude: -1.0677777777778,
          href: "#",

        },
        "town-71306": {
          value: "19855",
          latitude: 46.666944444444,
          longitude: 4.3688888888889,
          href: "#",

        },
        "town-13002": {
          value: "19775",
          latitude: 43.336111111111,
          longitude: 5.4822222222222,
          href: "#",

        },
        "town-78005": {
          value: "19754",
          latitude: 48.962222222222,
          longitude: 2.0686111111111,
          href: "#",

        },
        "town-55545": {
          value: "19714",
          latitude: 49.159722222222,
          longitude: 5.3827777777778,
          href: "#",

        },
        "town-73011": {
          value: "19713",
          latitude: 45.675833333333,
          longitude: 6.3925,
          href: "#",

        },
        "town-63124": {
          value: "19709",
          latitude: 45.741111111111,
          longitude: 3.1963888888889,
          href: "#",

        },
        "town-13071": {
          value: "19706",
          latitude: 43.41,
          longitude: 5.3094444444444,
          href: "#",

        },
        "town-97309": {
          value: "19691",
          latitude: 4.905,
          longitude: -52.276388888889,
          href: "#",

        },
        "town-29039": {
          value: "19688",
          latitude: 47.875277777778,
          longitude: -3.9188888888889,
          href: "#",

        },
        "town-79049": {
          value: "19676",
          latitude: 46.84,
          longitude: -0.48861111111111,
          href: "#",

        },
        "town-43157": {
          value: "19665",
          latitude: 45.043333333333,
          longitude: 3.885,
          href: "#",

        },
        "town-45284": {
          value: "19623",
          latitude: 47.911944444444,
          longitude: 1.9711111111111,
          href: "#",

        },
        "town-76259": {
          value: "19581",
          latitude: 49.7575,
          longitude: 0.37916666666667,
          href: "#",

        },
        "town-67462": {
          value: "19576",
          latitude: 48.259444444444,
          longitude: 7.4541666666667,
          href: "#",

        },
        "town-97210": {
          value: "19547",
          latitude: 14.615277777778,
          longitude: -60.9025,
          href: "#",

        },
        "town-97107": {
          value: "19544",
          latitude: 16.0425,
          longitude: -61.564722222222,
          href: "#",

        },
        "town-84054": {
          value: "19525",
          latitude: 43.919444444444,
          longitude: 5.0513888888889,
          href: "#",

        },
        "town-74268": {
          value: "19499",
          latitude: 45.888888888889,
          longitude: 6.0961111111111,
          href: "#",

        },
        "town-06157": {
          value: "19489",
          latitude: 43.722777777778,
          longitude: 7.1136111111111,
          href: "#",

        },
        "town-78362": {
          value: "19418",
          latitude: 48.974166666667,
          longitude: 1.7108333333333,
          href: "#",

        },
        "town-85047": {
          value: "19341",
          latitude: 46.845833333333,
          longitude: -1.8791666666667,
          href: "#",

        },
        "town-16102": {
          value: "19335",
          latitude: 45.695833333333,
          longitude: -0.32916666666667,
          href: "#",

        },
        "town-94059": {
          value: "19304",
          latitude: 48.811111111111,
          longitude: 2.5716666666667,
          href: "#",

        },
        "town-95424": {
          value: "19296",
          latitude: 48.993888888889,
          longitude: 2.195,
          href: "#",

        },
        "town-06085": {
          value: "19267",
          latitude: 43.6,
          longitude: 6.9947222222222,
          href: "#",

        },
        "town-84089": {
          value: "19265",
          latitude: 43.694166666667,
          longitude: 5.5030555555556,
          href: "#",

        },
        "town-69091": {
          value: "19258",
          latitude: 45.590555555556,
          longitude: 4.7688888888889,
          href: "#",

        },
        "town-25462": {
          value: "19227",
          latitude: 46.906111111111,
          longitude: 6.3547222222222,
          href: "#",

        },
        "town-60463": {
          value: "19155",
          latitude: 49.274722222222,
          longitude: 2.4675,
          href: "#",

        },
        "town-26058": {
          value: "19133",
          latitude: 44.9475,
          longitude: 4.8952777777778,
          href: "#",

        },
        "town-47157": {
          value: "19113",
          latitude: 44.5,
          longitude: 0.16527777777778,
          href: "#",

        },
        "town-08409": {
          value: "19099",
          latitude: 49.701944444444,
          longitude: 4.9402777777778,
          href: "#",

        },
        "town-78383": {
          value: "19014",
          latitude: 48.762777777778,
          longitude: 1.9455555555556,
          href: "#",

        },
        "town-92022": {
          value: "18887",
          latitude: 48.808611111111,
          longitude: 2.1886111111111,
          href: "#",

        },
        "town-44047": {
          value: "18861",
          latitude: 47.214722222222,
          longitude: -1.7238888888889,
          href: "#",

        },
        "town-44020": {
          value: "18762",
          latitude: 47.179166666667,
          longitude: -1.6247222222222,
          href: "#",

        },
        "town-30028": {
          value: "18705",
          latitude: 44.1625,
          longitude: 4.62,
          href: "#",

        },
        "town-38553": {
          value: "18703",
          latitude: 45.613333333333,
          longitude: 5.1486111111111,
          href: "#",

        },
        "town-63300": {
          value: "18684",
          latitude: 45.893611111111,
          longitude: 3.1125,
          href: "#",

        },
        "town-17306": {
          value: "18674",
          latitude: 45.627777777778,
          longitude: -1.0255555555556,
          href: "#",

        },
        "town-77294": {
          value: "18671",
          latitude: 48.983888888889,
          longitude: 2.6163888888889,
          href: "#",

        },
        "town-91161": {
          value: "18664",
          latitude: 48.705277777778,
          longitude: 2.3161111111111,
          href: "#",

        },
        "town-94021": {
          value: "18659",
          latitude: 48.766388888889,
          longitude: 2.3533333333333,
          href: "#",

        },
        "town-97228": {
          value: "18622",
          latitude: 14.781388888889,
          longitude: -60.993611111111,
          href: "#",

        },
        "town-56162": {
          value: "18591",
          latitude: 47.735833333333,
          longitude: -3.4311111111111,
          href: "#",

        },
        "town-94077": {
          value: "18568",
          latitude: 48.734444444444,
          longitude: 2.4108333333333,
          href: "#",

        },
        "town-39300": {
          value: "18560",
          latitude: 46.674444444444,
          longitude: 5.5538888888889,
          href: "#",

        },
        "town-92033": {
          value: "18469",
          latitude: 48.845555555556,
          longitude: 2.1869444444444,
          href: "#",

        },
        "town-69081": {
          value: "18413",
          latitude: 45.774444444444,
          longitude: 4.7775,
          href: "#",

        },
        "town-27375": {
          value: "18332",
          latitude: 49.215277777778,
          longitude: 1.1655555555556,
          href: "#",

        },
        "town-44026": {
          value: "18275",
          latitude: 47.296944444444,
          longitude: -1.4927777777778,
          href: "#",

        },
        "town-59507": {
          value: "18235",
          latitude: 50.604722222222,
          longitude: 3.0877777777778,
          href: "#",

        },
        "town-94019": {
          value: "18227",
          latitude: 48.798333333333,
          longitude: 2.5338888888889,
          href: "#",

        },
        "town-84129": {
          value: "18220",
          latitude: 44.008333333333,
          longitude: 4.8725,
          href: "#",

        },
        "town-93061": {
          value: "18171",
          latitude: 48.885,
          longitude: 2.4038888888889,
          href: "#",

        },
        "town-38229": {
          value: "18065",
          latitude: 45.208611111111,
          longitude: 5.7794444444444,
          href: "#",

        },
        "town-67043": {
          value: "18038",
          latitude: 48.613888888889,
          longitude: 7.7519444444444,
          href: "#",

        },
        "town-94042": {
          value: "17990",
          latitude: 48.821388888889,
          longitude: 2.4727777777778,
          href: "#",

        },
        "town-78545": {
          value: "17976",
          latitude: 48.800277777778,
          longitude: 2.0625,
          href: "#",

        },
        "town-04070": {
          value: "17969",
          latitude: 44.0925,
          longitude: 6.2355555555556,
          href: "#",

        },
        "town-50173": {
          value: "17942",
          latitude: 49.648333333333,
          longitude: -1.6547222222222,
          href: "#",

        },
        "town-74081": {
          value: "17877",
          latitude: 46.060277777778,
          longitude: 6.5786111111111,
          href: "#",

        },
        "town-44035": {
          value: "17814",
          latitude: 47.298888888889,
          longitude: -1.5527777777778,
          href: "#",

        },
        "town-78165": {
          value: "17773",
          latitude: 48.820555555556,
          longitude: 1.9836111111111,
          href: "#",

        },
        "town-41194": {
          value: "17758",
          latitude: 47.358333333333,
          longitude: 1.7427777777778,
          href: "#",

        },
        "town-41269": {
          value: "17687",
          latitude: 47.792777777778,
          longitude: 1.0655555555556,
          href: "#",

        },
        "town-63075": {
          value: "17683",
          latitude: 45.773611111111,
          longitude: 3.0669444444444,
          href: "#",

        },
        "town-95598": {
          value: "17670",
          latitude: 48.987777777778,
          longitude: 2.2997222222222,
          href: "#",

        },
        "town-74093": {
          value: "17605",
          latitude: 45.903611111111,
          longitude: 6.1038888888889,
          href: "#",

        },
        "town-59220": {
          value: "17581",
          latitude: 50.598888888889,
          longitude: 3.0736111111111,
          href: "#",

        },
        "town-13077": {
          value: "17546",
          latitude: 43.405,
          longitude: 4.9886111111111,
          href: "#",

        },
        "town-59299": {
          value: "17538",
          latitude: 50.655277777778,
          longitude: 3.1877777777778,
          href: "#",

        },
        "town-76231": {
          value: "17452",
          latitude: 49.285833333333,
          longitude: 1.0083333333333,
          href: "#",

        },
        "town-62065": {
          value: "17429",
          latitude: 50.409722222222,
          longitude: 2.8327777777778,
          href: "#",

        },
        "town-77296": {
          value: "17415",
          latitude: 48.626111111111,
          longitude: 2.5922222222222,
          href: "#",

        },
        "town-35360": {
          value: "17393",
          latitude: 48.123333333333,
          longitude: -1.2094444444444,
          href: "#",

        },
        "town-42095": {
          value: "17380",
          latitude: 45.388055555556,
          longitude: 4.2872222222222,
          href: "#",

        },
        "town-07010": {
          value: "17275",
          latitude: 45.24,
          longitude: 4.6708333333333,
          href: "#",

        },
        "town-62215": {
          value: "17275",
          latitude: 50.493055555556,
          longitude: 2.9580555555556,
          href: "#",

        },
        "town-83047": {
          value: "17225",
          latitude: 43.149722222222,
          longitude: 6.0741666666667,
          href: "#",

        },
        "town-94037": {
          value: "17222",
          latitude: 48.813333333333,
          longitude: 2.3444444444444,
          href: "#",

        },
        "town-97207": {
          value: "17209",
          latitude: 14.575833333333,
          longitude: -60.975833333333,
          href: "#",

        },
        "town-95218": {
          value: "17145",
          latitude: 49.017222222222,
          longitude: 2.0913888888889,
          href: "#",

        },
        "town-97224": {
          value: "17057",
          latitude: 14.670833333333,
          longitude: -61.038055555556,
          href: "#",

        },
        "town-78372": {
          value: "17019",
          latitude: 48.866944444444,
          longitude: 2.0941666666667,
          href: "#",

        },
        "town-45285": {
          value: "16951",
          latitude: 47.913055555556,
          longitude: 1.8733333333333,
          href: "#",

        },
        "town-94004": {
          value: "16945",
          latitude: 48.750277777778,
          longitude: 2.5097222222222,
          href: "#",

        },
        "town-70550": {
          value: "16934",
          latitude: 47.622222222222,
          longitude: 6.1552777777778,
          href: "#",

        },
        "town-84092": {
          value: "16930",
          latitude: 43.964166666667,
          longitude: 4.86,
          href: "#",

        },
        "town-77305": {
          value: "16926",
          latitude: 48.383055555556,
          longitude: 2.9480555555556,
          href: "#",

        },
        "town-97116": {
          value: "16895",
          latitude: 16.331944444444,
          longitude: -61.456944444444,
          href: "#",

        },
        "town-59526": {
          value: "16894",
          latitude: 50.448055555556,
          longitude: 3.4269444444444,
          href: "#",

        },
        "town-94011": {
          value: "16888",
          latitude: 48.774166666667,
          longitude: 2.4875,
          href: "#",

        },
        "town-35047": {
          value: "16875",
          latitude: 48.024722222222,
          longitude: -1.7458333333333,
          href: "#",

        },
        "town-60612": {
          value: "16867",
          latitude: 49.207222222222,
          longitude: 2.5866666666667,
          href: "#",

        },
        "town-76447": {
          value: "16852",
          latitude: 49.546111111111,
          longitude: 0.18805555555556,
          href: "#",

        },
        "town-55029": {
          value: "16830",
          latitude: 48.771666666667,
          longitude: 5.1672222222222,
          href: "#",

        },
        "town-78481": {
          value: "16821",
          latitude: 48.896666666667,
          longitude: 2.1061111111111,
          href: "#",

        },
        "town-33122": {
          value: "16802",
          latitude: 44.744444444444,
          longitude: -0.68222222222222,
          href: "#",

        },
        "town-95323": {
          value: "16796",
          latitude: 49.010833333333,
          longitude: 2.0386111111111,
          href: "#",

        },
        "town-69199": {
          value: "16787",
          latitude: 45.708611111111,
          longitude: 4.8533333333333,
          href: "#",

        },
        "town-83023": {
          value: "16757",
          latitude: 43.405833333333,
          longitude: 6.0616666666667,
          href: "#",

        },
        "town-78650": {
          value: "16753",
          latitude: 48.893888888889,
          longitude: 2.1322222222222,
          href: "#",

        },
        "town-57606": {
          value: "16723",
          latitude: 49.104166666667,
          longitude: 6.7080555555556,
          href: "#",

        },
        "town-83123": {
          value: "16643",
          latitude: 43.119166666667,
          longitude: 5.8022222222222,
          href: "#",

        },
        "town-67267": {
          value: "16639",
          latitude: 48.5575,
          longitude: 7.6830555555556,
          href: "#",

        },
        "town-44055": {
          value: "16623",
          latitude: 47.285833333333,
          longitude: -2.3922222222222,
          href: "#",

        },
        "town-77053": {
          value: "16604",
          latitude: 48.6925,
          longitude: 2.6111111111111,
          href: "#",

        },
        "town-97120": {
          value: "16550",
          latitude: 16.241111111111,
          longitude: -61.533055555556,
          href: "#",

        },
        "town-29151": {
          value: "16547",
          latitude: 48.5775,
          longitude: -3.8277777777778,
          href: "#",

        },
        "town-95476": {
          value: "16537",
          latitude: 49.059166666667,
          longitude: 2.0625,
          href: "#",

        },
        "town-78335": {
          value: "16534",
          latitude: 48.993333333333,
          longitude: 1.7358333333333,
          href: "#",

        },
        "town-34154": {
          value: "16504",
          latitude: 43.616388888889,
          longitude: 4.0075,
          href: "#",

        },
        "town-37214": {
          value: "16503",
          latitude: 47.402777777778,
          longitude: 0.67805555555556,
          href: "#",

        },
        "town-57757": {
          value: "16475",
          latitude: 49.358888888889,
          longitude: 6.1886111111111,
          href: "#",

        },
        "town-33167": {
          value: "16457",
          latitude: 44.836388888889,
          longitude: -0.52583333333333,
          href: "#",

        },
        "town-09225": {
          value: "16450",
          latitude: 43.116388888889,
          longitude: 1.6108333333333,
          href: "#",

        },
        "town-95637": {
          value: "16443",
          latitude: 49.034444444444,
          longitude: 2.0319444444444,
          href: "#",

        },
        "town-31424": {
          value: "16442",
          latitude: 43.565555555556,
          longitude: 1.2963888888889,
          href: "#",

        },
        "town-50602": {
          value: "16377",
          latitude: 49.640833333333,
          longitude: -1.5788888888889,
          href: "#",

        },
        "town-59569": {
          value: "16363",
          latitude: 50.363055555556,
          longitude: 3.1130555555556,
          href: "#",

        },
        "town-38382": {
          value: "16355",
          latitude: 45.231666666667,
          longitude: 5.6830555555556,
          href: "#",

        },
        "town-44069": {
          value: "16263",
          latitude: 47.328055555556,
          longitude: -2.4291666666667,
          href: "#",

        },
        "town-28218": {
          value: "16262",
          latitude: 48.438333333333,
          longitude: 1.465,
          href: "#",

        },
        "town-72154": {
          value: "16249",
          latitude: 47.699722222222,
          longitude: -0.076111111111111,
          href: "#",

        },
        "town-91471": {
          value: "16231",
          latitude: 48.698055555556,
          longitude: 2.1875,
          href: "#",

        },
        "town-78686": {
          value: "16224",
          latitude: 48.8,
          longitude: 2.1722222222222,
          href: "#",

        },
        "town-97115": {
          value: "16191",
          latitude: 16.271666666667,
          longitude: -61.632777777778,
          href: "#",

        },
        "town-74256": {
          value: "16184",
          latitude: 45.936388888889,
          longitude: 6.6319444444444,
          href: "#",

        },
        "town-30032": {
          value: "16183",
          latitude: 43.807222222222,
          longitude: 4.6433333333333,
          href: "#",

        },
        "town-34129": {
          value: "16166",
          latitude: 43.568888888889,
          longitude: 3.9086111111111,
          href: "#",

        },
        "town-54528": {
          value: "16080",
          latitude: 48.675,
          longitude: 5.8916666666667,
          href: "#",

        },
        "town-31157": {
          value: "16042",
          latitude: 43.537777777778,
          longitude: 1.3436111111111,
          href: "#",

        },
        "town-38193": {
          value: "15980",
          latitude: 45.619444444444,
          longitude: 5.2330555555556,
          href: "#",

        },
        "town-35051": {
          value: "15975",
          latitude: 48.120833333333,
          longitude: -1.6036111111111,
          href: "#",

        },
        "town-29103": {
          value: "15903",
          latitude: 48.450833333333,
          longitude: -4.2494444444444,
          href: "#",

        },
        "town-42147": {
          value: "15899",
          latitude: 45.6075,
          longitude: 4.0652777777778,
          href: "#",

        },
        "town-19272": {
          value: "15838",
          latitude: 45.265833333333,
          longitude: 1.7722222222222,
          href: "#",

        },
        "town-61169": {
          value: "15837",
          latitude: 48.748333333333,
          longitude: -0.56944444444444,
          href: "#",

        },
        "town-57306": {
          value: "15835",
          latitude: 49.329722222222,
          longitude: 6.0619444444444,
          href: "#",

        },
        "town-91645": {
          value: "15830",
          latitude: 48.7475,
          longitude: 2.2627777777778,
          href: "#",

        },
        "town-94015": {
          value: "15825",
          latitude: 48.841111111111,
          longitude: 2.5222222222222,
          href: "#",

        },
        "town-64260": {
          value: "15802",
          latitude: 43.358611111111,
          longitude: -1.7744444444444,
          href: "#",

        },
        "town-62108": {
          value: "15783",
          latitude: 50.408333333333,
          longitude: 1.5927777777778,
          href: "#",

        },
        "town-77337": {
          value: "15782",
          latitude: 48.854722222222,
          longitude: 2.6288888888889,
          href: "#",

        },
        "town-85109": {
          value: "15727",
          latitude: 46.871111111111,
          longitude: -1.0136111111111,
          href: "#",

        },
        "town-77186": {
          value: "15665",
          latitude: 48.408888888889,
          longitude: 2.7016666666667,
          href: "#",

        },
        "town-13039": {
          value: "15662",
          latitude: 43.436388888889,
          longitude: 4.9452777777778,
          href: "#",

        },
        "town-37233": {
          value: "15651",
          latitude: 47.390833333333,
          longitude: 0.72805555555556,
          href: "#",

        },
        "town-71014": {
          value: "15630",
          latitude: 46.951111111111,
          longitude: 4.2986111111111,
          href: "#",

        },
        "town-78124": {
          value: "15614",
          latitude: 48.908055555556,
          longitude: 2.1780555555556,
          href: "#",

        },
        "town-45208": {
          value: "15583",
          latitude: 47.996944444444,
          longitude: 2.7325,
          href: "#",

        },
        "town-78642": {
          value: "15581",
          latitude: 48.979722222222,
          longitude: 1.9738888888889,
          href: "#",

        },
        "town-56083": {
          value: "15545",
          latitude: 47.804166666667,
          longitude: -3.2788888888889,
          href: "#",

        },
        "town-29046": {
          value: "15540",
          latitude: 48.092222222222,
          longitude: -4.3302777777778,
          href: "#",

        },
        "town-33056": {
          value: "15508",
          latitude: 44.910555555556,
          longitude: -0.6375,
          href: "#",

        },
        "town-45302": {
          value: "15423",
          latitude: 47.951388888889,
          longitude: 1.8802777777778,
          href: "#",

        },
        "town-78418": {
          value: "15412",
          latitude: 48.908611111111,
          longitude: 2.1494444444444,
          href: "#",

        },
        "town-78123": {
          value: "15389",
          latitude: 48.947777777778,
          longitude: 2.0386111111111,
          href: "#",

        },
        "town-34057": {
          value: "15326",
          latitude: 43.636111111111,
          longitude: 3.9013888888889,
          href: "#",

        },
        "town-76157": {
          value: "15281",
          latitude: 49.440277777778,
          longitude: 1.0252777777778,
          href: "#",

        },
        "town-06161": {
          value: "15258",
          latitude: 43.658055555556,
          longitude: 7.1213888888889,
          href: "#",

        },
        "town-45155": {
          value: "15254",
          latitude: 47.688888888889,
          longitude: 2.6294444444444,
          href: "#",

        },
        "town-62765": {
          value: "15231",
          latitude: 50.748333333333,
          longitude: 2.2608333333333,
          href: "#",

        },
        "town-42186": {
          value: "15153",
          latitude: 45.529444444444,
          longitude: 4.6169444444444,
          href: "#",

        },
        "town-54304": {
          value: "15139",
          latitude: 48.685555555556,
          longitude: 6.1522222222222,
          href: "#",

        },
        "town-65286": {
          value: "15102",
          latitude: 43.095,
          longitude: -0.045277777777778,
          href: "#",

        },
        "town-25031": {
          value: "15094",
          latitude: 47.482777777778,
          longitude: 6.8397222222222,
          href: "#",

        },
        "town-33075": {
          value: "15082",
          latitude: 44.882777777778,
          longitude: -0.6125,
          href: "#",

        },
        "town-61006": {
          value: "15082",
          latitude: 48.744444444444,
          longitude: -0.020277777777778,
          href: "#",

        },
        "town-13027": {
          value: "15079",
          latitude: 43.8825,
          longitude: 4.855,
          href: "#",

        },
        "town-95199": {
          value: "15075",
          latitude: 49.0275,
          longitude: 2.3266666666667,
          href: "#",

        },
        "town-85092": {
          value: "15043",
          latitude: 46.466944444444,
          longitude: -0.80638888888889,
          href: "#",

        },
        "town-02168": {
          value: "15020",
          latitude: 49.046388888889,
          longitude: 3.4030555555556,
          href: "#",

        },
        "town-97125": {
          value: "14998",
          latitude: 16.251388888889,
          longitude: -61.273888888889,
          href: "#",

        },
        "town-95563": {
          value: "14962",
          latitude: 49.016944444444,
          longitude: 2.2463888888889,
          href: "#",

        },
        "town-93013": {
          value: "14943",
          latitude: 48.934444444444,
          longitude: 2.4244444444444,
          href: "#",

        },
        "town-77131": {
          value: "14920",
          latitude: 48.815555555556,
          longitude: 3.0836111111111,
          href: "#",

        },
        "town-83116": {
          value: "14907",
          latitude: 43.453333333333,
          longitude: 5.8619444444444,
          href: "#",

        },
        "town-68154": {
          value: "14903",
          latitude: 47.782222222222,
          longitude: 7.3480555555556,
          href: "#",

        },
        "town-85194": {
          value: "14888",
          latitude: 46.496388888889,
          longitude: -1.7847222222222,
          href: "#",

        },
        "town-56178": {
          value: "14860",
          latitude: 48.068611111111,
          longitude: -2.9627777777778,
          href: "#",

        },
        "town-54431": {
          value: "14832",
          latitude: 48.904444444444,
          longitude: 6.0541666666667,
          href: "#",

        },
        "town-59043": {
          value: "14772",
          latitude: 50.7375,
          longitude: 2.7338888888889,
          href: "#",

        },
        "town-91326": {
          value: "14756",
          latitude: 48.688333333333,
          longitude: 2.3775,
          href: "#",

        },
        "town-54578": {
          value: "14753",
          latitude: 48.673055555556,
          longitude: 6.1547222222222,
          href: "#",

        },
        "town-62643": {
          value: "14717",
          latitude: 50.703888888889,
          longitude: 1.5938888888889,
          href: "#",

        },
        "town-54323": {
          value: "14707",
          latitude: 49.519722222222,
          longitude: 5.7605555555556,
          href: "#",

        },
        "town-77258": {
          value: "14697",
          latitude: 48.836111111111,
          longitude: 2.6277777777778,
          href: "#",

        },
        "town-94069": {
          value: "14647",
          latitude: 48.818333333333,
          longitude: 2.4347222222222,
          href: "#",

        },
        "town-59139": {
          value: "14632",
          latitude: 50.125,
          longitude: 3.4116666666667,
          href: "#",

        },
        "town-23096": {
          value: "14577",
          latitude: 46.170555555556,
          longitude: 1.8683333333333,
          href: "#",

        },
        "town-59286": {
          value: "14569",
          latitude: 50.609166666667,
          longitude: 2.9869444444444,
          href: "#",

        },
        "town-95539": {
          value: "14487",
          latitude: 48.998611111111,
          longitude: 2.3569444444444,
          href: "#",

        },
        "town-63178": {
          value: "14475",
          latitude: 45.544166666667,
          longitude: 3.2488888888889,
          href: "#",

        },
        "town-44131": {
          value: "14450",
          latitude: 47.115555555556,
          longitude: -2.1033333333333,
          href: "#",

        },
        "town-42279": {
          value: "14425",
          latitude: 45.499444444444,
          longitude: 4.24,
          href: "#",

        },
        "town-95427": {
          value: "14423",
          latitude: 48.973611111111,
          longitude: 2.3458333333333,
          href: "#",

        },
        "town-68376": {
          value: "14403",
          latitude: 47.8075,
          longitude: 7.3369444444444,
          href: "#",

        },
        "town-22187": {
          value: "14393",
          latitude: 48.534444444444,
          longitude: -2.7708333333333,
          href: "#",

        },
        "town-37208": {
          value: "14375",
          latitude: 47.366666666667,
          longitude: 0.72666666666667,
          href: "#",

        },
        "town-60176": {
          value: "14364",
          latitude: 49.234444444444,
          longitude: 2.8875,
          href: "#",

        },
        "town-59291": {
          value: "14358",
          latitude: 50.248055555556,
          longitude: 3.9244444444444,
          href: "#",

        },
        "town-02738": {
          value: "14320",
          latitude: 49.655833333333,
          longitude: 3.2872222222222,
          href: "#",

        },
        "town-01004": {
          value: "14316",
          latitude: 45.958055555556,
          longitude: 5.3577777777778,
          href: "#",

        },
        "town-85166": {
          value: "14316",
          latitude: 46.536111111111,
          longitude: -1.7727777777778,
          href: "#",

        },
        "town-77014": {
          value: "14287",
          latitude: 48.408888888889,
          longitude: 2.725,
          href: "#",

        },
        "town-53147": {
          value: "14264",
          latitude: 48.303055555556,
          longitude: -0.61361111111111,
          href: "#",

        },
        "town-21166": {
          value: "14233",
          latitude: 47.291111111111,
          longitude: 5.0072222222222,
          href: "#",

        },
        "town-93062": {
          value: "14194",
          latitude: 48.899166666667,
          longitude: 2.5230555555556,
          href: "#",

        },
        "town-84019": {
          value: "14092",
          latitude: 44.280277777778,
          longitude: 4.7488888888889,
          href: "#",

        },
        "town-28088": {
          value: "14035",
          latitude: 48.070833333333,
          longitude: 1.3377777777778,
          href: "#",

        },
        "town-13015": {
          value: "14028",
          latitude: 43.454444444444,
          longitude: 5.4144444444444,
          href: "#",

        },
        "town-91182": {
          value: "13968",
          latitude: 48.618055555556,
          longitude: 2.4069444444444,
          href: "#",

        },
        "town-97230": {
          value: "13965",
          latitude: 14.738611111111,
          longitude: -60.963055555556,
          href: "#",

        },
        "town-60471": {
          value: "13907",
          latitude: 49.581111111111,
          longitude: 2.9988888888889,
          href: "#",

        },
        "town-74225": {
          value: "13892",
          latitude: 45.866111111111,
          longitude: 5.9444444444444,
          href: "#",

        },
        "town-78073": {
          value: "13880",
          latitude: 48.801388888889,
          longitude: 2.0316666666667,
          href: "#",

        },
        "town-03095": {
          value: "13873",
          latitude: 46.134444444444,
          longitude: 3.4563888888889,
          href: "#",

        },
        "town-29075": {
          value: "13845",
          latitude: 48.433611111111,
          longitude: -4.4008333333333,
          href: "#",

        },
        "town-31044": {
          value: "13832",
          latitude: 43.610277777778,
          longitude: 1.4986111111111,
          href: "#",

        },
        "town-51649": {
          value: "13826",
          latitude: 48.724722222222,
          longitude: 4.5844444444444,
          href: "#",

        },
        "town-85060": {
          value: "13802",
          latitude: 46.504166666667,
          longitude: -1.7372222222222,
          href: "#",

        },
        "town-10323": {
          value: "13774",
          latitude: 48.515833333333,
          longitude: 3.7266666666667,
          href: "#",

        },
        "town-57160": {
          value: "13770",
          latitude: 49.205277777778,
          longitude: 6.6958333333333,
          href: "#",

        },
        "town-30258": {
          value: "13767",
          latitude: 43.677777777778,
          longitude: 4.4311111111111,
          href: "#",

        },
        "town-59421": {
          value: "13752",
          latitude: 50.703333333333,
          longitude: 3.1405555555556,
          href: "#",

        },
        "town-50218": {
          value: "13723",
          latitude: 48.838055555556,
          longitude: -1.5869444444444,
          href: "#",

        },
        "town-91386": {
          value: "13710",
          latitude: 48.565277777778,
          longitude: 2.4361111111111,
          href: "#",

        },
        "town-14047": {
          value: "13702",
          latitude: 49.278611111111,
          longitude: -0.70388888888889,
          href: "#",

        },
        "town-13014": {
          value: "13696",
          latitude: 43.475555555556,
          longitude: 5.1680555555556,
          href: "#",

        },
        "town-27701": {
          value: "13688",
          latitude: 49.274444444444,
          longitude: 1.2102777777778,
          href: "#",

        },
        "town-06012": {
          value: "13684",
          latitude: 43.741944444444,
          longitude: 7.4236111111111,
          href: "#",

        },
        "town-97404": {
          value: "13659",
          latitude: -21.266111111111,
          longitude: 55.366944444444,
          href: "#",

        },
        "town-95019": {
          value: "13656",
          latitude: 48.987222222222,
          longitude: 2.4166666666667,
          href: "#",

        },
        "town-59014": {
          value: "13639",
          latitude: 50.371388888889,
          longitude: 3.5044444444444,
          href: "#",

        },
        "town-29189": {
          value: "13587",
          latitude: 48.3725,
          longitude: -4.3705555555556,
          href: "#",

        },
        "town-81099": {
          value: "13558",
          latitude: 43.900555555556,
          longitude: 1.8983333333333,
          href: "#",

        },
        "town-03321": {
          value: "13545",
          latitude: 46.565833333333,
          longitude: 3.3544444444444,
          href: "#",

        },
        "town-66037": {
          value: "13528",
          latitude: 42.705555555556,
          longitude: 3.0072222222222,
          href: "#",

        },
        "town-33003": {
          value: "13511",
          latitude: 44.924722222222,
          longitude: -0.48666666666667,
          href: "#",

        },
        "town-57240": {
          value: "13481",
          latitude: 49.141666666667,
          longitude: 6.7988888888889,
          href: "#",

        },
        "town-60395": {
          value: "13473",
          latitude: 49.235833333333,
          longitude: 2.135,
          href: "#",

        },
        "town-36088": {
          value: "13452",
          latitude: 46.948055555556,
          longitude: 1.9933333333333,
          href: "#",

        },
        "town-64483": {
          value: "13448",
          latitude: 43.390277777778,
          longitude: -1.6597222222222,
          href: "#",

        },
        "town-64129": {
          value: "13439",
          latitude: 43.3025,
          longitude: -0.39722222222222,
          href: "#",

        },
        "town-10081": {
          value: "13436",
          latitude: 48.311944444444,
          longitude: 4.0444444444444,
          href: "#",

        },
        "town-59648": {
          value: "13427",
          latitude: 50.585,
          longitude: 3.0430555555556,
          href: "#",

        },
        "town-13108": {
          value: "13426",
          latitude: 43.805,
          longitude: 4.6594444444444,
          href: "#",

        },
        "town-45068": {
          value: "13398",
          latitude: 48.011666666667,
          longitude: 2.7358333333333,
          href: "#",

        },
        "town-26235": {
          value: "13337",
          latitude: 44.3775,
          longitude: 4.6961111111111,
          href: "#",

        },
        "town-97220": {
          value: "13325",
          latitude: 14.486666666667,
          longitude: -60.903333333333,
          href: "#",

        },
        "town-68278": {
          value: "13251",
          latitude: 47.748611111111,
          longitude: 7.4044444444444,
          href: "#",

        },
        "town-82033": {
          value: "13249",
          latitude: 44.04,
          longitude: 1.1069444444444,
          href: "#",

        },
        "town-37003": {
          value: "13242",
          latitude: 47.411388888889,
          longitude: 0.9825,
          href: "#",

        },
        "town-83115": {
          value: "13220",
          latitude: 43.308888888889,
          longitude: 6.6377777777778,
          href: "#",

        },
        "town-48095": {
          value: "13213",
          latitude: 44.518333333333,
          longitude: 3.5005555555556,
          href: "#",

        },
        "town-57751": {
          value: "13203",
          latitude: 49.151111111111,
          longitude: 6.1513888888889,
          href: "#",

        },
        "town-69089": {
          value: "13159",
          latitude: 45.736388888889,
          longitude: 4.7636111111111,
          href: "#",

        },
        "town-83107": {
          value: "13125",
          latitude: 43.443333333333,
          longitude: 6.6377777777778,
          href: "#",

        },
        "town-68166": {
          value: "13068",
          latitude: 47.791388888889,
          longitude: 7.3380555555556,
          href: "#",

        },
        "town-59367": {
          value: "13067",
          latitude: 50.671388888889,
          longitude: 3.2144444444444,
          href: "#",

        },
        "town-97221": {
          value: "13040",
          latitude: 14.528888888889,
          longitude: -60.981388888889,
          href: "#",

        },
        "town-83090": {
          value: "13037",
          latitude: 43.139444444444,
          longitude: 5.8469444444444,
          href: "#",

        },
        "town-42044": {
          value: "13023",
          latitude: 45.396111111111,
          longitude: 4.325,
          href: "#",

        },
        "town-59508": {
          value: "13016",
          latitude: 50.753611111111,
          longitude: 3.1202777777778,
          href: "#",

        },
        "town-72264": {
          value: "12989",
          latitude: 47.84,
          longitude: -0.33416666666667,
          href: "#",

        },
        "town-49015": {
          value: "12951",
          latitude: 47.506944444444,
          longitude: -0.58888888888889,
          href: "#",

        },
        "town-59249": {
          value: "12941",
          latitude: 50.017222222222,
          longitude: 4.0533333333333,
          href: "#",

        },
        "town-77333": {
          value: "12907",
          latitude: 48.268611111111,
          longitude: 2.6936111111111,
          href: "#",

        },
        "town-40279": {
          value: "12904",
          latitude: 43.725555555556,
          longitude: -1.0527777777778,
          href: "#",

        },
        "town-57630": {
          value: "12886",
          latitude: 48.734722222222,
          longitude: 7.0538888888889,
          href: "#",

        },
        "town-12300": {
          value: "12881",
          latitude: 44.3525,
          longitude: 2.0341666666667,
          href: "#",

        },
        "town-30351": {
          value: "12872",
          latitude: 43.966388888889,
          longitude: 4.7958333333333,
          href: "#",

        },
        "town-78242": {
          value: "12865",
          latitude: 48.813611111111,
          longitude: 2.0486111111111,
          href: "#",

        },
        "town-59491": {
          value: "12860",
          latitude: 50.389166666667,
          longitude: 3.4858333333333,
          href: "#",

        },
        "town-57206": {
          value: "12829",
          latitude: 49.299166666667,
          longitude: 6.1097222222222,
          href: "#",

        },
        "town-06152": {
          value: "12803",
          latitude: 43.641388888889,
          longitude: 7.0088888888889,
          href: "#",

        },
        "town-67046": {
          value: "12800",
          latitude: 48.766388888889,
          longitude: 7.8569444444444,
          href: "#",

        },
        "town-06104": {
          value: "12700",
          latitude: 43.757222222222,
          longitude: 7.4741666666667,
          href: "#",

        },
        "town-56007": {
          value: "12695",
          latitude: 47.667777777778,
          longitude: -2.9825,
          href: "#",

        },
        "town-77379": {
          value: "12684",
          latitude: 48.558888888889,
          longitude: 3.2994444444444,
          href: "#",

        },
        "town-93079": {
          value: "12662",
          latitude: 48.964444444444,
          longitude: 2.3441666666667,
          href: "#",

        },
        "town-60414": {
          value: "12661",
          latitude: 49.255555555556,
          longitude: 2.4383333333333,
          href: "#",

        },
        "town-68271": {
          value: "12661",
          latitude: 47.748333333333,
          longitude: 7.3669444444444,
          href: "#",

        },
        "town-14762": {
          value: "12638",
          latitude: 48.838611111111,
          longitude: -0.88916666666667,
          href: "#",

        },
        "town-44036": {
          value: "12630",
          latitude: 47.716944444444,
          longitude: -1.3761111111111,
          href: "#",

        },
        "town-82112": {
          value: "12620",
          latitude: 44.104722222222,
          longitude: 1.0852777777778,
          href: "#",

        },
        "town-57660": {
          value: "12609",
          latitude: 49.2,
          longitude: 6.9291666666667,
          href: "#",

        },
        "town-59574": {
          value: "12602",
          latitude: 50.3575,
          longitude: 3.2802777777778,
          href: "#",

        },
        "town-77407": {
          value: "12602",
          latitude: 48.532777777778,
          longitude: 2.5447222222222,
          href: "#",

        },
        "town-49353": {
          value: "12571",
          latitude: 47.446111111111,
          longitude: -0.46638888888889,
          href: "#",

        },
        "town-64348": {
          value: "12564",
          latitude: 43.315,
          longitude: -0.41083333333333,
          href: "#",

        },
        "town-22093": {
          value: "12539",
          latitude: 48.468611111111,
          longitude: -2.5177777777778,
          href: "#",

        },
        "town-44154": {
          value: "12521",
          latitude: 47.246388888889,
          longitude: -2.1669444444444,
          href: "#",

        },
        "town-40046": {
          value: "12492",
          latitude: 44.393055555556,
          longitude: -1.1638888888889,
          href: "#",

        },
        "town-59152": {
          value: "12469",
          latitude: 50.761111111111,
          longitude: 3.0077777777778,
          href: "#",

        },
        "town-62186": {
          value: "12469",
          latitude: 50.441944444444,
          longitude: 2.7244444444444,
          href: "#",

        },
        "town-77479": {
          value: "12459",
          latitude: 48.874166666667,
          longitude: 2.6380555555556,
          href: "#",

        },
        "town-62413": {
          value: "12451",
          latitude: 50.445,
          longitude: 2.9058333333333,
          href: "#",

        },
        "town-29233": {
          value: "12443",
          latitude: 47.872777777778,
          longitude: -3.5497222222222,
          href: "#",

        },
        "town-59560": {
          value: "12429",
          latitude: 50.548333333333,
          longitude: 3.0294444444444,
          href: "#",

        },
        "town-02173": {
          value: "12420",
          latitude: 49.615555555556,
          longitude: 3.2191666666667,
          href: "#",

        },
        "town-59112": {
          value: "12413",
          latitude: 50.398333333333,
          longitude: 3.5394444444444,
          href: "#",

        },
        "town-76057": {
          value: "12371",
          latitude: 49.544444444444,
          longitude: 0.95361111111111,
          href: "#",

        },
        "town-67437": {
          value: "12354",
          latitude: 48.741388888889,
          longitude: 7.3619444444444,
          href: "#",

        },
        "town-69277": {
          value: "12340",
          latitude: 45.731388888889,
          longitude: 5.0022222222222,
          href: "#",

        },
        "town-76758": {
          value: "12328",
          latitude: 49.616944444444,
          longitude: 0.75305555555556,
          href: "#",

        },
        "town-31446": {
          value: "12327",
          latitude: 43.546111111111,
          longitude: 1.4755555555556,
          href: "#",

        },
        "town-78015": {
          value: "12327",
          latitude: 48.980833333333,
          longitude: 2.0583333333333,
          href: "#",

        },
        "town-74042": {
          value: "12321",
          latitude: 46.078888888889,
          longitude: 6.4008333333333,
          href: "#",

        },
        "town-62617": {
          value: "12317",
          latitude: 50.479722222222,
          longitude: 2.6647222222222,
          href: "#",

        },
        "town-38485": {
          value: "12293",
          latitude: 45.181388888889,
          longitude: 5.6991666666667,
          href: "#",

        },
        "town-91432": {
          value: "12248",
          latitude: 48.706388888889,
          longitude: 2.3347222222222,
          href: "#",

        },
        "town-91215": {
          value: "12246",
          latitude: 48.693055555556,
          longitude: 2.5158333333333,
          href: "#",

        },
        "town-49246": {
          value: "12240",
          latitude: 47.424444444444,
          longitude: -0.52527777777778,
          href: "#",

        },
        "town-45004": {
          value: "12237",
          latitude: 47.973055555556,
          longitude: 2.7702777777778,
          href: "#",

        },
        "town-94074": {
          value: "12228",
          latitude: 48.745,
          longitude: 2.4672222222222,
          href: "#",

        },
        "town-11076": {
          value: "12220",
          latitude: 43.318055555556,
          longitude: 1.9538888888889,
          href: "#",

        },
        "town-07019": {
          value: "12205",
          latitude: 44.619722222222,
          longitude: 4.3902777777778,
          href: "#",

        },
        "town-81105": {
          value: "12200",
          latitude: 43.760833333333,
          longitude: 1.9886111111111,
          href: "#",

        },
        "town-44172": {
          value: "12187",
          latitude: 47.249444444444,
          longitude: -1.4866666666667,
          href: "#",

        },
        "town-01033": {
          value: "12161",
          latitude: 46.1075,
          longitude: 5.8258333333333,
          href: "#",

        },
        "town-97105": {
          value: "12145",
          latitude: 15.996944444444,
          longitude: -61.732777777778,
          href: "#",

        },
        "town-53062": {
          value: "12143",
          latitude: 47.828611111111,
          longitude: -0.7027777777777801,
          href: "#",

        },
        "town-40312": {
          value: "12141",
          latitude: 43.540555555556,
          longitude: -1.4613888888889,
          href: "#",

        },
        "town-74243": {
          value: "12125",
          latitude: 46.144166666667,
          longitude: 6.0841666666667,
          href: "#",

        },
        "town-78688": {
          value: "12122",
          latitude: 48.758333333333,
          longitude: 2.0508333333333,
          href: "#",

        },
        "town-05023": {
          value: "12094",
          latitude: 44.895833333333,
          longitude: 6.635,
          href: "#",

        },
        "town-31561": {
          value: "12093",
          latitude: 43.656388888889,
          longitude: 1.4844444444444,
          href: "#",

        },
        "town-78029": {
          value: "12092",
          latitude: 48.958333333333,
          longitude: 1.855,
          href: "#",

        },
        "town-84003": {
          value: "12064",
          latitude: 43.876111111111,
          longitude: 5.3963888888889,
          href: "#",

        },
        "town-62570": {
          value: "12057",
          latitude: 50.402222222222,
          longitude: 2.8658333333333,
          href: "#",

        },
        "town-29212": {
          value: "12012",
          latitude: 48.382222222222,
          longitude: -4.6202777777778,
          href: "#",

        },
        "town-95313": {
          value: "11979",
          latitude: 49.111111111111,
          longitude: 2.2227777777778,
          href: "#",

        },
        "town-83112": {
          value: "11972",
          latitude: 43.183611111111,
          longitude: 5.7086111111111,
          href: "#",

        },
        "town-95210": {
          value: "11959",
          latitude: 48.969722222222,
          longitude: 2.3080555555556,
          href: "#",

        },
        "town-59383": {
          value: "11958",
          latitude: 50.348888888889,
          longitude: 3.5441666666667,
          href: "#",

        },
        "town-60509": {
          value: "11948",
          latitude: 49.301111111111,
          longitude: 2.6036111111111,
          href: "#",

        },
        "town-76114": {
          value: "11941",
          latitude: 49.572222222222,
          longitude: 0.4725,
          href: "#",

        },
        "town-69283": {
          value: "11931",
          latitude: 45.663055555556,
          longitude: 4.9530555555556,
          href: "#",

        },
        "town-13081": {
          value: "11928",
          latitude: 43.487777777778,
          longitude: 5.2322222222222,
          href: "#",

        },
        "town-74208": {
          value: "11917",
          latitude: 45.923611111111,
          longitude: 6.6863888888889,
          href: "#",

        },
        "town-74208": {
          value: "11917",
          latitude: 45.923611111111,
          longitude: 6.6863888888889,
          href: "#",

        },
        "town-28404": {
          value: "11881",
          latitude: 48.720833333333,
          longitude: 1.3605555555556,
          href: "#",

        },
        "town-13007": {
          value: "11870",
          latitude: 43.369444444444,
          longitude: 5.6313888888889,
          href: "#",

        },
        "town-59273": {
          value: "11868",
          latitude: 50.986388888889,
          longitude: 2.1275,
          href: "#",

        },
        "town-27284": {
          value: "11864",
          latitude: 49.280555555556,
          longitude: 1.7763888888889,
          href: "#",

        },
        "town-97402": {
          value: "11860",
          latitude: -20.995277777778,
          longitude: 55.676111111111,
          href: "#",

        },
        "town-87154": {
          value: "11831",
          latitude: 45.887222222222,
          longitude: 0.90111111111111,
          href: "#",

        },
        "town-83098": {
          value: "11830",
          latitude: 43.105555555556,
          longitude: 6.0233333333333,
          href: "#",

        },
        "town-13026": {
          value: "11796",
          latitude: 43.383055555556,
          longitude: 5.1641666666667,
          href: "#",

        },
        "town-78624": {
          value: "11777",
          latitude: 48.980833333333,
          longitude: 2.0061111111111,
          href: "#",

        },
        "town-68112": {
          value: "11757",
          latitude: 47.9075,
          longitude: 7.2102777777778,
          href: "#",

        },
        "town-31483": {
          value: "11753",
          latitude: 43.108055555556,
          longitude: 0.7233333333333301,
          href: "#",

        },
        "town-21617": {
          value: "11743",
          latitude: 47.336388888889,
          longitude: 5.0055555555556,
          href: "#",

        },
        "town-64430": {
          value: "11674",
          latitude: 43.488055555556,
          longitude: -0.77083333333333,
          href: "#",

        },
        "town-97405": {
          value: "11671",
          latitude: -21.355833333333,
          longitude: 55.565833333333,
          href: "#",

        },
        "town-63430": {
          value: "11645",
          latitude: 45.856388888889,
          longitude: 3.5475,
          href: "#",

        },
        "town-06033": {
          value: "11639",
          latitude: 43.7925,
          longitude: 7.1877777777778,
          href: "#",

        },
        "town-12176": {
          value: "11639",
          latitude: 44.365555555556,
          longitude: 2.5936111111111,
          href: "#",

        },
        "town-25580": {
          value: "11633",
          latitude: 47.4625,
          longitude: 6.8322222222222,
          href: "#",

        },
        "town-73179": {
          value: "11620",
          latitude: 45.596666666667,
          longitude: 5.8775,
          href: "#",

        },
        "town-76484": {
          value: "11613",
          latitude: 49.341944444444,
          longitude: 1.0913888888889,
          href: "#",

        },
        "town-57221": {
          value: "11580",
          latitude: 49.321388888889,
          longitude: 6.1183333333333,
          href: "#",

        },
        "town-62525": {
          value: "11576",
          latitude: 50.735555555556,
          longitude: 2.2372222222222,
          href: "#",

        },
        "town-10333": {
          value: "11553",
          latitude: 48.279722222222,
          longitude: 4.0538888888889,
          href: "#",

        },
        "town-22215": {
          value: "11537",
          latitude: 48.489444444444,
          longitude: -2.7958333333333,
          href: "#",

        },
        "town-68063": {
          value: "11527",
          latitude: 47.806666666667,
          longitude: 7.1758333333333,
          href: "#",

        },
        "town-69027": {
          value: "11518",
          latitude: 45.673888888889,
          longitude: 4.7541666666667,
          href: "#",

        },
        "town-59527": {
          value: "11505",
          latitude: 50.660277777778,
          longitude: 3.0438888888889,
          href: "#",

        },
        "town-94060": {
          value: "11494",
          latitude: 48.789444444444,
          longitude: 2.5766666666667,
          href: "#",

        },
        "town-76410": {
          value: "11486",
          latitude: 49.481944444444,
          longitude: 1.0419444444444,
          href: "#",

        },
        "town-39478": {
          value: "11481",
          latitude: 46.387222222222,
          longitude: 5.8633333333333,
          href: "#",

        },
        "town-62758": {
          value: "11469",
          latitude: 50.725833333333,
          longitude: 1.6322222222222,
          href: "#",

        },
        "town-64422": {
          value: "11449",
          latitude: 43.194166666667,
          longitude: -0.60666666666667,
          href: "#",

        },
        "town-62318": {
          value: "11442",
          latitude: 50.517777777778,
          longitude: 1.6405555555556,
          href: "#",

        },
        "town-28280": {
          value: "11436",
          latitude: 48.321666666667,
          longitude: 0.82166666666667,
          href: "#",

        },
        "town-33005": {
          value: "11415",
          latitude: 44.7425,
          longitude: -1.0902777777778,
          href: "#",

        },
        "town-67365": {
          value: "11410",
          latitude: 48.541666666667,
          longitude: 7.7094444444444,
          href: "#",

        },
        "town-13097": {
          value: "11396",
          latitude: 43.639722222222,
          longitude: 4.8125,
          href: "#",

        },
        "town-38317": {
          value: "11386",
          latitude: 45.123055555556,
          longitude: 5.6980555555556,
          href: "#",

        },
        "town-74133": {
          value: "11345",
          latitude: 46.185,
          longitude: 6.2075,
          href: "#",

        },
        "town-38474": {
          value: "11317",
          latitude: 45.205,
          longitude: 5.665,
          href: "#",

        },
        "town-2A247": {
          value: "11308",
          latitude: 41.590833333333,
          longitude: 9.279722222222199,
          href: "#",

        },
        "town-31187": {
          value: "11301",
          latitude: 43.536111111111,
          longitude: 1.2311111111111,
          href: "#",

        },
        "town-83042": {
          value: "11292",
          latitude: 43.2525,
          longitude: 6.53,
          href: "#",

        },
        "town-07102": {
          value: "11291",
          latitude: 44.934444444444,
          longitude: 4.8747222222222,
          href: "#",

        },
        "town-07324": {
          value: "11287",
          latitude: 45.067222222222,
          longitude: 4.8327777777778,
          href: "#",

        },
        "town-31113": {
          value: "11285",
          latitude: 43.515555555556,
          longitude: 1.4980555555556,
          href: "#",

        },
        "town-67348": {
          value: "11284",
          latitude: 48.462222222222,
          longitude: 7.4819444444444,
          href: "#",

        },
        "town-22050": {
          value: "11280",
          latitude: 48.455555555556,
          longitude: -2.0502777777778,
          href: "#",

        },
        "town-33009": {
          value: "11278",
          latitude: 44.658611111111,
          longitude: -1.1688888888889,
          href: "#",

        },
        "town-13106": {
          value: "11258",
          latitude: 43.398333333333,
          longitude: 5.3658333333333,
          href: "#",

        },
        "town-31506": {
          value: "11244",
          latitude: 43.551388888889,
          longitude: 1.5341666666667,
          href: "#",

        },
        "town-63032": {
          value: "11229",
          latitude: 45.751666666667,
          longitude: 3.0830555555556,
          href: "#",

        },
        "town-30341": {
          value: "11220",
          latitude: 43.693333333333,
          longitude: 4.2761111111111,
          href: "#",

        },
        "town-83130": {
          value: "11214",
          latitude: 43.19,
          longitude: 6.0411111111111,
          href: "#",

        },
        "town-18197": {
          value: "11204",
          latitude: 46.722777777778,
          longitude: 2.505,
          href: "#",

        },
        "town-72003": {
          value: "11202",
          latitude: 47.968611111111,
          longitude: 0.16055555555556,
          href: "#",

        },
        "town-14341": {
          value: "11192",
          latitude: 49.138333333333,
          longitude: -0.35305555555556,
          href: "#",

        },
        "town-84080": {
          value: "11191",
          latitude: 44.035555555556,
          longitude: 4.9972222222222,
          href: "#",

        },
        "town-77118": {
          value: "11190",
          latitude: 48.945,
          longitude: 2.6866666666667,
          href: "#",

        },
        "town-35093": {
          value: "11169",
          latitude: 48.6325,
          longitude: -2.0616666666667,
          href: "#",

        },
        "town-59544": {
          value: "11134",
          latitude: 50.369722222222,
          longitude: 3.5547222222222,
          href: "#",

        },
        "town-60141": {
          value: "11132",
          latitude: 49.186944444444,
          longitude: 2.4608333333333,
          href: "#",

        },
        "town-62048": {
          value: "11116",
          latitude: 50.508333333333,
          longitude: 2.4736111111111,
          href: "#",

        },
        "town-77487": {
          value: "11078",
          latitude: 48.526388888889,
          longitude: 2.6822222222222,
          href: "#",

        },
        "town-79202": {
          value: "11066",
          latitude: 46.648611111111,
          longitude: -0.24694444444444,
          href: "#",

        },
        "town-29235": {
          value: "11041",
          latitude: 48.408611111111,
          longitude: -4.3969444444444,
          href: "#",

        },
        "town-66172": {
          value: "11033",
          latitude: 42.713333333333,
          longitude: 2.8419444444444,
          href: "#",

        },
        "town-58086": {
          value: "11031",
          latitude: 47.411388888889,
          longitude: 2.9266666666667,
          href: "#",

        },
        "town-42184": {
          value: "11022",
          latitude: 46.042777777778,
          longitude: 4.0405555555556,
          href: "#",

        },
        "town-92077": {
          value: "11013",
          latitude: 48.826111111111,
          longitude: 2.1933333333333,
          href: "#",

        },
        "town-27056": {
          value: "11000",
          latitude: 49.088611111111,
          longitude: 0.5983333333333301,
          href: "#",

        },
        "town-37050": {
          value: "10986",
          latitude: 47.3375,
          longitude: 0.71388888888889,
          href: "#",

        },
        "town-13075": {
          value: "10982",
          latitude: 43.346944444444,
          longitude: 5.4630555555556,
          href: "#",

        },
        "town-67130": {
          value: "10954",
          latitude: 48.421944444444,
          longitude: 7.6611111111111,
          href: "#",

        },
        "town-84141": {
          value: "10905",
          latitude: 43.9775,
          longitude: 4.9030555555556,
          href: "#",

        },
        "town-63284": {
          value: "10891",
          latitude: 45.798333333333,
          longitude: 3.2483333333333,
          href: "#",

        },
        "town-91312": {
          value: "10878",
          latitude: 48.742222222222,
          longitude: 2.2261111111111,
          href: "#",

        },
        "town-37109": {
          value: "10843",
          latitude: 47.404166666667,
          longitude: 0.59888888888889,
          href: "#",

        },
        "town-57433": {
          value: "10842",
          latitude: 49.212222222222,
          longitude: 6.1611111111111,
          href: "#",

        },
        "town-37156": {
          value: "10833",
          latitude: 47.388333333333,
          longitude: 0.82722222222222,
          href: "#",

        },
        "town-13100": {
          value: "10819",
          latitude: 43.789444444444,
          longitude: 4.8316666666667,
          href: "#",

        },
        "town-74224": {
          value: "10814",
          latitude: 46.066944444444,
          longitude: 6.3119444444444,
          href: "#",

        },
        "town-44132": {
          value: "10796",
          latitude: 47.265833333333,
          longitude: -2.34,
          href: "#",

        },
        "town-60157": {
          value: "10762",
          latitude: 49.378888888889,
          longitude: 2.4125,
          href: "#",

        },
        "town-19275": {
          value: "10748",
          latitude: 45.548055555556,
          longitude: 2.3091666666667,
          href: "#",

        },
        "town-56206": {
          value: "10746",
          latitude: 47.686666666667,
          longitude: -2.7344444444444,
          href: "#",

        },
        "town-11206": {
          value: "10738",
          latitude: 43.056944444444,
          longitude: 2.2186111111111,
          href: "#",

        },
        "town-97212": {
          value: "10737",
          latitude: 14.708055555556,
          longitude: -61.0075,
          href: "#",

        },
        "town-93030": {
          value: "10735",
          latitude: 48.953611111111,
          longitude: 2.4163888888889,
          href: "#",

        },
        "town-97401": {
          value: "10730",
          latitude: -21.241944444444,
          longitude: 55.333333333333,
          href: "#",

        },
        "town-56078": {
          value: "10718",
          latitude: 47.790555555556,
          longitude: -3.4886111111111,
          href: "#",

        },
        "town-91021": {
          value: "10712",
          latitude: 48.590277777778,
          longitude: 2.2477777777778,
          href: "#",

        },
        "town-77251": {
          value: "10711",
          latitude: 48.632222222222,
          longitude: 2.5486111111111,
          href: "#",

        },
        "town-85226": {
          value: "10697",
          latitude: 46.721111111111,
          longitude: -1.9455555555556,
          href: "#",

        },
        "town-30202": {
          value: "10696",
          latitude: 44.256388888889,
          longitude: 4.6483333333333,
          href: "#",

        },
        "town-02810": {
          value: "10691",
          latitude: 49.253055555556,
          longitude: 3.0902777777778,
          href: "#",

        },
        "town-11203": {
          value: "10690",
          latitude: 43.200555555556,
          longitude: 2.7577777777778,
          href: "#",

        },
        "town-97124": {
          value: "10688",
          latitude: 16.027222222222,
          longitude: -61.698333333333,
          href: "#",

        },
        "town-89206": {
          value: "10676",
          latitude: 47.982222222222,
          longitude: 3.3972222222222,
          href: "#",

        },
        "town-62250": {
          value: "10673",
          latitude: 50.458055555556,
          longitude: 2.9472222222222,
          href: "#",

        },
        "town-34157": {
          value: "10668",
          latitude: 43.426666666667,
          longitude: 3.6052777777778,
          href: "#",

        },
        "town-50147": {
          value: "10660",
          latitude: 49.045277777778,
          longitude: -1.4452777777778,
          href: "#",

        },
        "town-84088": {
          value: "10654",
          latitude: 43.997777777778,
          longitude: 5.0591666666667,
          href: "#",

        },
        "town-81140": {
          value: "10649",
          latitude: 43.698888888889,
          longitude: 1.8188888888889,
          href: "#",

        },
        "town-35281": {
          value: "10647",
          latitude: 48.090277777778,
          longitude: -1.6955555555556,
          href: "#",

        },
        "town-70285": {
          value: "10635",
          latitude: 47.5775,
          longitude: 6.7616666666667,
          href: "#",

        },
        "town-01173": {
          value: "10634",
          latitude: 46.333333333333,
          longitude: 6.0577777777778,
          href: "#",

        },
        "town-66171": {
          value: "10630",
          latitude: 42.618055555556,
          longitude: 3.0063888888889,
          href: "#",

        },
        "town-87114": {
          value: "10627",
          latitude: 45.838888888889,
          longitude: 1.31,
          href: "#",

        },
        "town-67204": {
          value: "10620",
          latitude: 48.624166666667,
          longitude: 7.7547222222222,
          href: "#",

        },
        "town-28229": {
          value: "10600",
          latitude: 48.453055555556,
          longitude: 1.4619444444444,
          href: "#",

        },
        "town-95487": {
          value: "10592",
          latitude: 49.153333333333,
          longitude: 2.2711111111111,
          href: "#",

        },
        "town-59616": {
          value: "10590",
          latitude: 50.459444444444,
          longitude: 3.5683333333333,
          href: "#",

        },
        "town-10362": {
          value: "10587",
          latitude: 48.294722222222,
          longitude: 4.0488888888889,
          href: "#",

        },
        "town-46102": {
          value: "10571",
          latitude: 44.608611111111,
          longitude: 2.0316666666667,
          href: "#",

        },
        "town-63164": {
          value: "10524",
          latitude: 45.825833333333,
          longitude: 3.1447222222222,
          href: "#",

        },
        "town-69243": {
          value: "10523",
          latitude: 45.896111111111,
          longitude: 4.4330555555556,
          href: "#",

        },
        "town-42189": {
          value: "10522",
          latitude: 45.433888888889,
          longitude: 4.3236111111111,
          href: "#",

        },
        "town-64335": {
          value: "10517",
          latitude: 43.3325,
          longitude: -0.43583333333333,
          href: "#",

        },
        "town-51573": {
          value: "10496",
          latitude: 49.25,
          longitude: 3.9908333333333,
          href: "#",

        },
        "town-59179": {
          value: "10486",
          latitude: 50.301388888889,
          longitude: 3.3933333333333,
          href: "#",

        },
        "town-59008": {
          value: "10469",
          latitude: 50.33,
          longitude: 3.2511111111111,
          href: "#",

        },
        "town-13110": {
          value: "10463",
          latitude: 43.446944444444,
          longitude: 5.6858333333333,
          href: "#",

        },
        "town-06149": {
          value: "10453",
          latitude: 43.740833333333,
          longitude: 7.3141666666667,
          href: "#",

        },
        "town-35024": {
          value: "10447",
          latitude: 48.1825,
          longitude: -1.6438888888889,
          href: "#",

        },
        "town-68375": {
          value: "10444",
          latitude: 47.805277777778,
          longitude: 7.2375,
          href: "#",

        },
        "town-06084": {
          value: "10443",
          latitude: 43.62,
          longitude: 6.9719444444444,
          href: "#",

        },
        "town-81163": {
          value: "10437",
          latitude: 43.491666666667,
          longitude: 2.3733333333333,
          href: "#",

        },
        "town-35236": {
          value: "10413",
          latitude: 47.651388888889,
          longitude: -2.0847222222222,
          href: "#",

        },
        "town-31488": {
          value: "10402",
          latitude: 43.665277777778,
          longitude: 1.505,
          href: "#",

        },
        "town-83049": {
          value: "10389",
          latitude: 43.2375,
          longitude: 6.0708333333333,
          href: "#",

        },
        "town-26057": {
          value: "10381",
          latitude: 45.037777777778,
          longitude: 5.05,
          href: "#",

        },
        "town-78190": {
          value: "10361",
          latitude: 48.877777777778,
          longitude: 2.1422222222222,
          href: "#",

        },
        "town-81060": {
          value: "10361",
          latitude: 44.049166666667,
          longitude: 2.1580555555556,
          href: "#",

        },
        "town-09122": {
          value: "10358",
          latitude: 42.965277777778,
          longitude: 1.6069444444444,
          href: "#",

        },
        "town-69273": {
          value: "10327",
          latitude: 45.668055555556,
          longitude: 4.9019444444444,
          href: "#",

        },
        "town-22136": {
          value: "10324",
          latitude: 48.177777777778,
          longitude: -2.7533333333333,
          href: "#",

        },
        "town-83148": {
          value: "10312",
          latitude: 43.427222222222,
          longitude: 6.4319444444444,
          href: "#",

        },
        "town-76216": {
          value: "10286",
          latitude: 49.469722222222,
          longitude: 1.0497222222222,
          href: "#",

        },
        "town-24520": {
          value: "10279",
          latitude: 44.89,
          longitude: 1.2166666666667,
          href: "#",

        },
        "town-37195": {
          value: "10279",
          latitude: 47.389166666667,
          longitude: 0.66055555555556,
          href: "#",

        },
        "town-86041": {
          value: "10269",
          latitude: 46.5975,
          longitude: 0.34916666666667,
          href: "#",

        },
        "town-35210": {
          value: "10240",
          latitude: 48.147777777778,
          longitude: -1.7738888888889,
          href: "#",

        },
        "town-54159": {
          value: "10239",
          latitude: 48.625,
          longitude: 6.3497222222222,
          href: "#",

        },
        "town-59426": {
          value: "10223",
          latitude: 50.746666666667,
          longitude: 3.1580555555556,
          href: "#",

        },
        "town-91216": {
          value: "10222",
          latitude: 48.673888888889,
          longitude: 2.3272222222222,
          href: "#",

        },
        "town-16374": {
          value: "10216",
          latitude: 45.640277777778,
          longitude: 0.19777777777778,
          href: "#",

        },
        "town-62516": {
          value: "10189",
          latitude: 50.563611111111,
          longitude: 2.4819444444444,
          href: "#",

        },
        "town-21515": {
          value: "10179",
          latitude: 47.314444444444,
          longitude: 5.1061111111111,
          href: "#",

        },
        "town-57019": {
          value: "10167",
          latitude: 49.260833333333,
          longitude: 6.1419444444444,
          href: "#",

        },
        "town-62014": {
          value: "10164",
          latitude: 50.638611111111,
          longitude: 2.3966666666667,
          href: "#",

        },
        "town-62040": {
          value: "10163",
          latitude: 50.735555555556,
          longitude: 2.3025,
          href: "#",

        },
        "town-91200": {
          value: "10151",
          latitude: 48.528888888889,
          longitude: 2.0108333333333,
          href: "#",

        },
        "town-66008": {
          value: "10149",
          latitude: 42.546111111111,
          longitude: 3.0238888888889,
          href: "#",

        },
        "town-38565": {
          value: "10146",
          latitude: 45.297777777778,
          longitude: 5.6369444444444,
          href: "#",

        },
        "town-35055": {
          value: "10145",
          latitude: 48.088611111111,
          longitude: -1.6163888888889,
          href: "#",

        },
        "town-21171": {
          value: "10132",
          latitude: 47.301666666667,
          longitude: 5.1355555555556,
          href: "#",

        },
        "town-97227": {
          value: "10131",
          latitude: 14.468333333333,
          longitude: -60.921666666667,
          href: "#",

        },
        "town-59090": {
          value: "10130",
          latitude: 50.701666666667,
          longitude: 3.0933333333333,
          href: "#",

        },
        "town-62587": {
          value: "10113",
          latitude: 50.427777777778,
          longitude: 2.9297222222222,
          href: "#",

        },
        "town-78674": {
          value: "10106",
          latitude: 48.83,
          longitude: 2.0022222222222,
          href: "#",

        },
        "town-85128": {
          value: "10094",
          latitude: 46.454722222222,
          longitude: -1.1658333333333,
          href: "#",

        },
        "town-84138": {
          value: "10077",
          latitude: 44.384166666667,
          longitude: 4.9902777777778,
          href: "#",

        },
        "town-54482": {
          value: "10070",
          latitude: 48.701111111111,
          longitude: 6.2066666666667,
          href: "#",

        },
        "town-62771": {
          value: "10063",
          latitude: 50.419722222222,
          longitude: 2.8622222222222,
          href: "#",

        },
        "town-69152": {
          value: "10061",
          latitude: 45.703611111111,
          longitude: 4.8241666666667,
          href: "#",

        },
        "town-79329": {
          value: "10061",
          latitude: 46.975,
          longitude: -0.21527777777778,
          href: "#",

        },
        "town-83034": {
          value: "10060",
          latitude: 43.095,
          longitude: 6.0736111111111,
          href: "#",

        },
        "town-57591": {
          value: "10045",
          latitude: 49.249444444444,
          longitude: 6.0947222222222,
          href: "#",

        },
        "town-83071": {
          value: "10017",
          latitude: 43.138055555556,
          longitude: 6.2344444444444,
          href: "#",

        },
        "town-80016": {
          value: "10008",
          latitude: 50.001944444444,
          longitude: 2.6522222222222,
          href: "#",

        },
        "town-67067": {
          value: "10002",
          latitude: 48.731944444444,
          longitude: 7.7083333333333,
          href: "#",

        },
        "town-94055": {
          value: "9990",
          latitude: 48.785833333333,
          longitude: 2.5383333333333,
          href: "#",

        },
        "town-57447": {
          value: "9984",
          latitude: 49.061111111111,
          longitude: 6.1497222222222,
          href: "#",

        },
        "town-44129": {
          value: "9961",
          latitude: 47.436944444444,
          longitude: -2.0877777777778,
          href: "#",

        },
        "town-59324": {
          value: "9935",
          latitude: 50.294444444444,
          longitude: 4.1013888888889,
          href: "#",

        },
        "town-62637": {
          value: "9934",
          latitude: 50.469166666667,
          longitude: 2.9936111111111,
          href: "#",

        },
        "town-76319": {
          value: "9908",
          latitude: 49.3575,
          longitude: 1.0072222222222,
          href: "#",

        },
        "town-76165": {
          value: "9907",
          latitude: 49.280833333333,
          longitude: 1.0211111111111,
          href: "#",

        },
        "town-42005": {
          value: "9893",
          latitude: 45.526111111111,
          longitude: 4.2602777777778,
          href: "#",

        },
        "town-58303": {
          value: "9891",
          latitude: 47.012222222222,
          longitude: 3.1463888888889,
          href: "#",

        },
        "town-59386": {
          value: "9877",
          latitude: 50.675833333333,
          longitude: 3.0661111111111,
          href: "#",

        },
        "town-59636": {
          value: "9864",
          latitude: 50.685277777778,
          longitude: 3.0486111111111,
          href: "#",

        },
        "town-45075": {
          value: "9840",
          latitude: 47.889722222222,
          longitude: 1.8397222222222,
          href: "#",

        },
        "town-59153": {
          value: "9829",
          latitude: 50.449166666667,
          longitude: 3.5905555555556,
          href: "#",

        },
        "town-33051": {
          value: "9826",
          latitude: 44.644166666667,
          longitude: -0.9783333333333299,
          href: "#",

        },
        "town-91661": {
          value: "9825",
          latitude: 48.701388888889,
          longitude: 2.245,
          href: "#",

        },
        "town-63014": {
          value: "9824",
          latitude: 45.750833333333,
          longitude: 3.1108333333333,
          href: "#",

        },
        "town-60282": {
          value: "9819",
          latitude: 49.187777777778,
          longitude: 2.4161111111111,
          href: "#",

        },
        "town-69271": {
          value: "9813",
          latitude: 45.744444444444,
          longitude: 4.9663888888889,
          href: "#",

        },
        "town-33366": {
          value: "9809",
          latitude: 44.994722222222,
          longitude: -0.44583333333333,
          href: "#",

        },
        "town-31451": {
          value: "9795",
          latitude: 43.458611111111,
          longitude: 2.0041666666667,
          href: "#",

        },
        "town-59011": {
          value: "9775",
          latitude: 50.529444444444,
          longitude: 2.9327777777778,
          href: "#",

        },
        "town-13069": {
          value: "9771",
          latitude: 43.631388888889,
          longitude: 5.1505555555556,
          href: "#",

        },
        "town-91122": {
          value: "9769",
          latitude: 48.696666666667,
          longitude: 2.1613888888889,
          href: "#",

        },
        "town-02381": {
          value: "9756",
          latitude: 49.921666666667,
          longitude: 4.0838888888889,
          href: "#",

        }
      }
    });
  }
});