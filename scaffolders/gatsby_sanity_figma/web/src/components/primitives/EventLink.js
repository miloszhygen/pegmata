/*

   <EventLink content={workshop || talk}/>

*/

import React from "react"
import { Link } from "gatsby"
const EventLink = props => {

  const {
    content={}
  } = props;

  const url = content._type === 'talk' ? `talk` : `workshop`;
  const headerTitle = content._type || 'TALK';

  return (
    <div>
      <Link to={`/${url}/${content.slug.current}`}>
        <div
          className="
            bg-black
            text-white
            p-8 m-10
            uppercase text-center
            max-w-sm
            m-auto
            mt-8
            hover:bg-green hover:text-black"
          >
          <p>{headerTitle}</p>
          <h3 className="text-lg py-10">
            {content.title}
          </h3>
          <div className="text-lg">→</div>
        </div>
      </Link>
    </div>
  )
}

export default EventLink
