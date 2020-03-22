import React from "react"
import { Link } from "gatsby"
import Plx from "react-plx"

const ConfirmedSpeaker = ({ person }) => {
  if (!person) return null
  const { name, image, confirmationText } = person

  // An array of parallax effects to be applied - see below for detail
  const speakerConfirmed = [
    {
      start: "self",
      duration: 400,
      easing: "easeInExpo",
      properties: [
        {
          startValue: 1,
          endValue: 1.3,
          property: "scale",
        },
        {
          startValue: 5,
          endValue: 0,
          property: "rotate",
        },
      ],
    },
  ]
  return (
    <>
      <h2 className="text-huge mt-12 md:mt-24 text-center uppercase">
        ↓↓ joining us ↓↓
      </h2>

      <Link
        to={`/speaker/${person.slug.current}`}
        className="
        flex content-center
        flex-row md:flex-col
        mt-12 md:mt-24
        relative
        speaker
        "
      >
        <div className="max-w-full  self-center">
          <img src={image.asset.url} alt={name} />
        </div>
        <div
          className="
            uppercase
            absolute
            z-10
            self-start md:self-end
            start-it"
        >
          <Plx
            className="
            bg-black text-white
            mt-0 md:mt-8 mr-0 md:mr-12 p-4"
            parallaxData={speakerConfirmed}
          >
            <h3 className="text-lg">{confirmationText}</h3>
          </Plx>
        </div>

        <div
          className="
          bg-green text-black
          hover:bg-black hover:text-white
          p-4
          max-w-md
          uppercase
          absolute
          bottom-0
          stop-it"
        >
          <h1 className="text-huge">{name}</h1>
        </div>
      </Link>
      <div className="mt-16 flex justify-center">
        <Link
          to={`/speakers`}
          className="
            bg-black text-white
            hover:bg-green hover:text-black
            p-4
            text-lg uppercase"
        >
          See all confirmed speakers
        </Link>
      </div>
    </>
  )
}

export default ConfirmedSpeaker
