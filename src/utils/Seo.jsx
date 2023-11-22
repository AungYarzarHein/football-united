import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Seo = ({title,description,type,imageUrl}) => {
  // console.log("Hellllll", title,description,type,imageUrl)
  return (
    <Helmet>
        <title> {title} </title>
        <meta name='description' content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
    </Helmet>
  )
}

