import React from 'react'
import {Container, Service} from '..'

function ServiceListing() {
  return (
    <Container>
      <div>
        <h1>Our Services</h1>
        <Service videoLink="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4" label="Fast Food" category="fast-food" />
        <Service videoLink="https://media.istockphoto.com/id/1328141050/video/woman-takes-packed-products-from-the-shelf-packed-mushrooms-and-puts-them-in-a-trolley-little.mp4?s=mp4-640x640-is&k=20&c=uzh-dCjZ3O1FyhSsYfDmuQV1fBcdTUstS9EobYOd5Wc=" type="video/mp4" label="Groceries" cat="grocery"/>
      </div>
    </Container>
  )
}

export default ServiceListing