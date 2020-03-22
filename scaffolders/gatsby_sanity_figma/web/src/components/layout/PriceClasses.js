import React from "react"
const PriceClasses = props => {
  return (
    <>
      <div className="max-w-sm mx-auto mt-2-5vw mb-7-5vw">
        <div className="price mb-4">
          <div
            className="
            bg-black text-white
            fit-content
            p-2
            z-50
            relative"
          >
            First in line
          </div>
          <div className="bg-green ml-4 p-4 -mt-2 z-0">
            <span className="flex">
              <h3 className="text-xl mr-3">5700 NOK</h3>
              <p className="netlife-sans self-end ">eks mva</p>
            </span>
            <p>March 1st — May 1st</p>
          </div>
        </div>

        <div className="price mb-4">
          <div
            className="
            bg-black text-white
            fit-content
            p-2
            z-50
            relative"
          >
            Mid Line
          </div>
          <div className="border border-solid border-black ml-4 p-4 -mt-2 z-0">
            <span className="flex">
              <h3 className="text-xl mr-3">6700 NOK</h3>
              <p className="netlife-sans self-end ">eks mva</p>
            </span>
            <p>May 1st — June 1st</p>
          </div>
        </div>

        <div className="price mb-4">
          <div
            className="
            bg-black text-white
            fit-content
            p-2
            z-50
            relative"
          >
            Last in line
          </div>
          <div className="border border-solid border-black ml-4 p-4 -mt-2 z-0">
            <span className="flex">
              <h3 className="text-xl mr-3">7700 NOK</h3>
              <p className="netlife-sans self-end ">eks mva</p>
            </span>
            <p>June 1st — July 1st</p>
          </div>
        </div>

        <div className="price mb-4">
          <div
            className="
            bg-black text-white
            fit-content
            p-2
            z-50
            relative"
          >
            Last minute
          </div>
          <div className="border border-solid border-black ml-4 p-4 -mt-2 z-0">
            <span className="flex">
              <h3 className="text-xl mr-3">8700 NOK</h3>
              <p className="netlife-sans self-end ">eks mva</p>
            </span>
            <p>After 1st of August</p>
          </div>
        </div>
      </div>
      {/* <div
        className="
        flex flex-wrap items-end
        max-w-screen-md mx-auto"
      >
        <div
          className="
            w-full md:w-6/12
            p-2
            "
        >
          <a href="#checkin_registration">
            <div
              className="
              bg-green
              hover:bg-black hover:text-white
              p-4
              min-h-32
              border-solid border-black border"
            >
              <h3 className="text-lg">Until 1st May</h3>
              <h3 className="text-xl">5700 NOK</h3>
              <p className="netlife-sans">eks. mva</p>
            </div>
          </a>
        </div>
        <div
          className="
            w-full md:w-6/12
            p-2
            "
        >
          <div href="#checkin_registration">
            <div className="p-4 min-h-32 border-solid border-black border">
              <h3 className="text-lg">1st May — 1st June</h3>
              <h3 className="text-xl">6700 NOK</h3>
              <p className="netlife-sans">eks. mva</p>
            </div>
          </div>
        </div>
        <div
          className="
            w-full md:w-6/12
            p-2"
        >
          <div href="#checkin_registration">
            <div className="p-4 min-h-32 border-solid border-black border">
              <h3 className="text-lg">1st June — 1st July</h3>
              <h3 className="text-xl">7700 NOK</h3>
              <p className="netlife-sans">eks. mva</p>
            </div>
          </div>
        </div>
        <div
          className="
            w-full md:w-6/12
            p-2
            "
        >
          <div href="#checkin_registration">
            <div className="p-4 min-h-32 border-solid border-black border">
              <h3 className="text-lg">After 14th of August</h3>
              <h3 className="text-xl">8700 NOK </h3>
              <p className="netlife-sans">eks. mva</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default PriceClasses
