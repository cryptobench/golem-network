import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import React, { useEffect, useState } from "react"
import Golem from "./svg/Golem"
export default function Stats() {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})
  const [ComputingNow, setComputingNow] = useState()
  const fetchProviders = () => {
    fetch("https://api.stats.golem.network/v1/network/utilization")
      .then((r) => r.json())

      .then((response) => {
        var output = response.data.result[0].values
        let computing = []
        for (var i in output) {
          var time = output[i][0] * 1000
          computing.push([time, output[i][1]])
        }
        setData(computing)
        setData([
          {
            data: computing,
            name: "Providers computing a task",
          },
        ])

        var last_element = computing[computing.length - 1]
        setComputingNow(last_element[1])
        setLoaded(true)
      })
  }

  const state = {
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        zoom: {
          autoScaleYaxis: true,
        },
      },
      tooltip: {
        theme: "light",
        enabled: true,
        x: {
          show: true,
          format: "HH:mm:ss",
          formatter: undefined,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0c14d4"],
      markers: {
        size: 0,
      },
      stroke: {
        width: 4.5,
      },
      yaxis: {
        title: {
          text: "Providers computing",
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "12px",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm:ss",
          },
        },
        title: {
          text: "UTC Time",
          offsetX: 0,
          offsetY: 5,
          style: {
            color: undefined,
            fontSize: "12px",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
    },
  }
  useEffect(() => {
    fetchProviders()
    setInterval(() => {
      fetchProviders()
    }, 15000)
  }, [])
  return loaded ? (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 relative ">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="text-center  lg:col-span-12 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Monitoring</span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Monitor live via Golem Stats</span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
            The Golem Network provides a stats page for the network. Explore data from competing providers and monitor your own provider.
          </p>
        </div>

        <div className=" bg-white col-span-12 shadow-xl rounded-lg p-8">
          <div className="relative">
            <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300 animate-ping"></div>
            <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300"></div>
            <h1 className=" mb-2 font-semibold text-2xl">Network Activity</h1>
            <div className="d-flex align-items-center">
              <dt>
                <div className="absolute bg-golemblue rounded-md p-3">
                  <Golem className="h-6 w-6"></Golem>
                </div>
              </dt>
              <dd className="ml-16 pb-6 sm:pb-7">
                <div className="relative">
                  <p className="text-2xl font-semibold text-gray-900 ">{ComputingNow} Providers</p>
                  <p className="text-sm font-medium text-green-500 truncate">Computing right now</p>
                </div>
              </dd>
            </div>
          </div>
          <div id="chart">
            <Chart options={state.options} series={data} type="line" height={350} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>loading</p>
  )
}
