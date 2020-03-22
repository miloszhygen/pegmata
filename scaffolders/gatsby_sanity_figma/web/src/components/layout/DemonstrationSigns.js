import React, { useState } from "react"
import Plx from "react-plx"

const sign1Text = [
  { text: "We have 1 seat left at this price" },
  { text: "You are #17 in line, please hold" },
  { text: "Password must contain all of the things" },
  { text: "We see you are using an ad blocker" },
  { text: "Your session has timed out" },
  { text: "I can't help with that yet" },
  { text: "Un- subscribe and miss out on so much" },
]

const sign2Text = [
  { text: "Ready to eat avocadoes" },
  { text: "Password does not match" },
  { text: "Wifi included*         *T&C apply" },
  { text: "Error code 82030. Good luck." },
  { text: "lorem ipsum dolor sit amet" },
  { text: "Your privacy is important to us" },
  { text: "Are you still planning your trip?" },
]

const sign3Text = [
  { text: "Employees must wash hands" },
  { text: "Verify you are human" },
  { text: "Let me put you through to my colleague" },
  { text: "The seat you selected has sold out" },
  { text: "Keep your streak going!" },
  { text: "I have read the Terms and Conditions" },
  { text: "Dear <first_ name><last_ name>," },
]

const sign4Text = [
  { text: "I didn't quite get that" },
  { text: "We value your feedback" },
  { text: "Select all the images with street signs" },
  { text: "89 people are looking at this room" },
  { text: "What is the name of your first school" },
  { text: "Track your period and share on Facebook" },
  { text: "Rate us on facebook" },
]

const sign1 = [
  {
    start: "self",
    startOffset: 0,
    duration: 200,
    easing: "easeInExpo",
    properties: [
      {
        startValue: 0,
        endValue: -70,
        property: "rotate",
        unit: "deg",
      },
      {
        startValue: 0,
        endValue: -500,
        property: "translateX",
      },
    ],
  },
]

const sign2 = [
  {
    start: "self",
    startOffset: 0,
    duration: 300,
    easing: "easeInExpo",
    properties: [
      {
        startValue: 0,
        endValue: -45,
        property: "rotate",
        unit: "deg",
      },
      {
        startValue: 0,
        endValue: -600,
        property: "translateY",
      },
    ],
  },
]

const sign3 = [
  {
    start: "self",
    startOffset: 0,
    duration: 400,
    easing: "easeInExpo",
    properties: [
      {
        startValue: 0,
        endValue: -95,
        property: "rotate",
        unit: "deg",
      },
      {
        startValue: 0,
        endValue: -500,
        property: "translateY",
      },
      {
        startValue: 0,
        endValue: 300,
        property: "translateX",
      },
    ],
  },
]

const sign4 = [
  {
    start: "self",
    startOffset: 0,
    duration: 500,
    easing: "easeInExpo",
    properties: [
      {
        startValue: 0,
        endValue: 120,
        property: "rotate",
        unit: "deg",
      },
      {
        startValue: 0,
        endValue: -400,
        property: "translateY",
      },
      {
        startValue: 0,
        endValue: 200,
        property: "translateX",
      },
    ],
  },
]

const sign5 = [
  {
    start: "self",
    startOffset: 0,
    duration: 600,
    easing: "easeInExpo",
    properties: [
      {
        startValue: 0,
        endValue: -35,
        property: "rotate",
        unit: "deg",
      },
      {
        startValue: 0,
        endValue: 300,
        property: "translateY",
      },
      {
        startValue: 0,
        endValue: 500,
        property: "translateX",
      },
    ],
  },
]

const DemonstrationSigns = props => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(Math.floor(Math.random() * Math.floor(6)))

  const randomNumber1 = textArray => {
    setCount(Math.floor(Math.random() * Math.floor(textArray.length)))
  }
  const randomNumber2 = textArray => {
    setCount(Math.floor(Math.random() * Math.floor(textArray.length)))
  }
  const randomNumber3 = textArray => {
    setCount(Math.floor(Math.random() * Math.floor(textArray.length)))
  }
  const randomNumber4 = textArray => {
    setCount(Math.floor(Math.random() * Math.floor(textArray.length)))
  }

  return (
    <div
      className="
      relative
      flex flex-wrap justify-center
      transition-all
      z-50
    "
    >
      {/* pt-4 md:pt-12 lg:pt-12
      mb-2 md:mb-12 lg:mb-12 */}
      {/* "Hidden" down arrows behind signs */}
      <span
        className="
          slow-fade-in
          inline-block
          absolute t-50
          w-1/2
          pt-8 md:pt-24 xl:pt-0
          flex justify-center
          text-massive"
      >
        <span
          className="
          block
          pt-48 sm:pt-64 md:pt-32 lg:pt-16 xl:pt-0
          uppercase
          "
        >
          Hassle
        </span>
      </span>

      {/* Box 1 */}
      <button
        onClick={() => randomNumber1(sign1Text)}
        className="
          intro1
          w-5/6 md:w-2/6 xl:w-1/5
          transform scale-125
          hover:z-50
          focus:outline-none
          delay-transition
          cursor-default
          "
      >
        <Plx
          parallaxData={sign1}
          className="
            md:min-h-48
            p-4
            pb-8 md:pb-4
            bg-green
          "
        >
          <h3 className="md:text-lg text-left leading-0 hyphens-auto uppercase">
            {sign1Text[count].text}
          </h3>
        </Plx>
      </button>

      {/* Box 2 */}
      <button
        onClick={() => randomNumber2(sign2Text)}
        className="
          intro2
          w-5/6 md:w-2/6 xl:w-1/5
          -mt-8 md:mt-0 xl:mt-8
          mb-8 md:mb-0
          transform scale-125 rotate-3neg
          hover:z-50
          focus:outline-none
          delay-transition
          cursor-default
        "
      >
        <Plx
          parallaxData={sign2}
          className="
              md:min-h-48
              p-4
              pb-8 md:pb-4
              bg-black text-white
            "
        >
          <h3 className="md:text-lg text-left hyphens-auto uppercase">
            {sign2Text[count].text}
          </h3>
        </Plx>
      </button>

      {/* Box 3 */}
      <button
        onClick={() => randomNumber3(sign3Text)}
        className="
          intro3
          w-5/6 md:w-2/6 xl:w-1/5
          -mt-8 md:mt-0
          mb-8 md:mb-0
          transform scale-125 rotate-3
          hover:z-50
          focus:outline-none
          delay-transition
          cursor-default
      "
      >
        <Plx
          parallaxData={sign3}
          className="
            md:min-h-48
            p-4
            pb-8 md:pb-4
            bg-green
          "
        >
          <h3 className="md:text-lg text-left hyphens-auto uppercase">
            {sign3Text[count].text}
          </h3>
        </Plx>
      </button>

      {/* Box 4 */}
      <button
        onClick={() => randomNumber4(sign4Text)}
        className="
          intro4
          w-5/6 md:w-2/6 xl:w-1/5
          -mt-8 md:mt-0 xl:mt-8
          mb-8 md:mb-0
          transform scale-125 rotate-2neg
          hover:z-50
          focus:outline-none
          delay-transition
          cursor-default
        "
      >
        <Plx
          parallaxData={sign4}
          className="
            md:min-h-48
            p-4
            pb-8 md:pb-4
            bg-black text-white
            md:translate-y-16
          "
        >
          <h3 className="md:text-lg text-left hyphens-auto uppercase">
            {sign4Text[count].text}
          </h3>
        </Plx>
      </button>

      {/* Box 5 - Y */}
      <button
        className="
        intro5
        w-5/6 md:w-2/6 xl:w-1/5
        -mt-8 md:mt-0
        mb-8 md:mb-0
        transform scale-125 rotate-4
        transition-transform transition-all duration-100 ease-out
        hover:z-50
        delay-transition
        cursor-default
        "
      >
        <Plx
          parallaxData={sign5}
          className="
            flex
            p-4
            md:min-h-48
            bg-green
          "
        >
          <h3
            className="
          w-full
          text-center text-massive leading-none uppercase
        "
          >
            Y
          </h3>
        </Plx>
      </button>
    </div>
  )
}

export default DemonstrationSigns
