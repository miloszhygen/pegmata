import React from "react"
import renderer from "react-test-renderer"
import SpeakerHero from "./SpeakerHero"
describe("SpeakerHero", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SpeakerHero person={{}}  />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})