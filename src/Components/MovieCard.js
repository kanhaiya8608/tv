import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const product = props.product
  return (
    <Card className="my-3 -3 rounded">
      <Link to={`${product.show.url}`}>
        <Card.Img src={product.show.image.medium} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`${product.show.url}`}>
          <Card.Title as="div">
            <strong>{product.show.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          Genre:{' '}
          {product.show.genres?.map((genre) => {
            return genre + ' '
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
