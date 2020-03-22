/*
  <SpeakerHero
    person={foredragsholdere}
    talktitle={true}
    title="mastering Continuous Innovation"
    course="Talk (NO)"
    details={true}
    time="10:15 — 11:00"
    day="Thursday"
  />
*/

import React from "react"
import Plx from "react-plx"
const SpeakerHero = props => {
  // if (props.person.lenght != 1) return null
  //onst { person[] } = props

  const name = [
    {
      start: "self",
      startOffset: 0,
      duration: 400,
      easing: "easeInExpo",
      properties: [
        {
          startValue: 0,
          endValue: -30,
          property: "rotate",
          unit: "deg",
        },
        {
          startValue: 0,
          endValue: -600,
          property: "translateX",
        },
        {
          startValue: 0,
          endValue: -600,
          property: "translateY",
        },
      ],
    },
  ]

  const talk = [
    {
      start: "self",
      startOffset: 0,
      duration: 200,
      easing: "easeInExpo",
      properties: [
        {
          startValue: 0,
          endValue: -30,
          property: "rotate",
          unit: "deg",
        },
        {
          startValue: 0,
          endValue: -600,
          property: "translateX",
        },
        {
          startValue: 0,
          endValue: -600,
          property: "translateY",
        },
      ],
    },
  ]

  const details = [
    {
      start: "self",
      startOffset: 0,
      duration: 200,
      easing: "easeInExpo",
      properties: [
        {
          startValue: 0,
          endValue: 10,
          property: "rotate",
          unit: "deg",
        },
        {
          startValue: 0,
          endValue: 300,
          property: "translateX",
        },
        {
          startValue: 0,
          endValue: -300,
          property: "translateY",
        },
      ],
    },
  ]

  const arbeidsgiver = [
    {
      start: "self",
      startOffset: 0,
      duration: 500,
      easing: "easeInExpo",
      properties: [
        {
          startValue: 0,
          endValue: 45,
          property: "rotate",
          unit: "deg",
        },
        {
          startValue: 0,
          endValue: -300,
          property: "translateY",
        },
        {
          startValue: 0,
          endValue: 100,
          property: "translateX",
        },
      ],
    },
  ]

  const stilling = [
    {
      start: "self",
      startOffset: 0,
      duration: 600,
      easing: "easeInExpo",
      properties: [
        {
          startValue: 0,
          endValue: 30,
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
          endValue: 550,
          property: "translateX",
        },
      ],
    },
  ]

  const person = props.person

  return (
    <>
      <div className="
        relative
        md:pt-8
      ">

        {props.talktitle && (
          <Plx
            parallaxData={talk}
            className="
              relative md:absolute
              top-0 left-0
              z-10
            "
          >
            <div
              className="
                table-caption
                fit-content
                p-4
                title-load
                bg-black text-white
                uppercase
              "
            >
              <p className="text-green">{props.course}</p>
              <h1 className="text-huge">{props.title}</h1>
            </div>
          </Plx>
        )}

        {props.details && (
          <div
            className="
              intro1
              inline-block
              relative sm:absolute
              top-0 right-0
              mr-8 mt-10
              z-10
              "
          >
            <Plx
              parallaxData={details}
              className="
                p-4
                bg-green text-black
                uppercase
              "
            >
              {props.time && props.time.day && (
                <h3 className="text-lg">
                  {props.time.day} <br />
                  {props.time.start} - {props.time.end}
                </h3>
              )}
              <p>{props.stage}</p>
            </Plx>
          </div>
        )}

        {person.image && (
          <div className="
            speaker
            relative
            max-w-full
            -my-2
          ">
            <img
              className="mx-auto max-h-2-3 object-cover"
              src={person.image.asset.url}
              alt={person.name}
            />
          </div>
        )}

        {person.name && !props.talktitle && (
          <Plx
            parallaxData={name}
            className="
              inline-block
              relative md:absolute
              md:top-0
              -mt-8 md:mt-0
              p-4
              bg-green text-black
            "
          >
            <h1 className="
              table-caption
              text-huge
              uppercase
            ">{person.name}</h1>
          </Plx>
        )}

        {person.arbeidsgiver && (
          <div 
            className="
              intro4
              inline-block
              relative md:absolute
              md:right-0 md:bottom-2
              mb-4
              z-50
            "
          >
            <Plx 
              parallaxData={arbeidsgiver}
              className="
                p-2
                bg-black
                text-green
              "
            >
              <p>{person.arbeidsgiver}</p>
            </Plx>
          </div>
        )}

        {person.stilling && (
          <div 
            className="
              intro3
              inline-block
              relative md:absolute
              md:right-0 md:bottom-0
              z-50
            "
          >
            <Plx 
              parallaxData={stilling}
              className="
                p-2
                bg-black text-white
              "
            >
              <p>{person.stilling}</p>
            </Plx>
          </div>
        )}

      </div>
    </>
  )
}

export default SpeakerHero
