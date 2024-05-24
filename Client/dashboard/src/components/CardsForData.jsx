import React from 'react'
import Card from 'react-bootstrap/Card';

// Returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    return (
        <div className='cardDiv'>
            <Card bg='light' border='dark' style={{ width: '20vw', margin: '1.1vw', borderRadius:'30px' }}>
                <Card.Body>
                    <div style={{ textAlign: 'center' }}>
                        <Card.Title>Project Details</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.sector ? item.sector : "Sector"}</Card.Subtitle>
                    </div>
                    <Card.Text className='cardText'>
                        <ul type='square'>
                            <li> <strong>Topic:</strong> {item.topic ? item.topic.charAt(0).toUpperCase() + item.topic.slice(1).toLowerCase() : "--"} </li>
                            <li> <strong>Title:</strong> {item.title ? item.title : "--"} </li>
                            <li> <strong>Sector:</strong> {item.sector ? item.sector : "--"} </li>
                            <li> <strong>Insight:</strong> {item.insight ? item.insight : "--"} </li>
                            <li> <strong>URL:</strong> {item.url ? <a href={item.url}>{item.url}</a> : "--"} </li>
                            <li> <strong>Region:</strong> {item.region ? item.region : "--"} </li>
                            <li> <strong>Country:</strong> {item.country ? item.country : "--"} </li>
                            <li> <strong>Source:</strong> {item.source ? item.source : "--"} </li>
                            <li> <strong>Pestle:</strong> {item.pestle ? item.pestle : "--"} </li>
                            <li> <strong>Start Year:</strong> {item.start_year ? item.start_year : "--"} </li>
                            <li> <strong>End Year:</strong> {item.end_year ? item.end_year : "--"} </li>
                            <li> <strong>Added:</strong> {item.added ? item.added : "--"} </li>
                            <li> <strong>Published:</strong> {item.published ? item.published : "--"} </li>
                            <li> <strong>Intensity:</strong> {item.intensity ? item.intensity : "--"} </li>
                            <li> <strong>Impact:</strong> {item.impact ? item.impact : "--"} </li>
                            <li> <strong>Relevance:</strong> {item.relevance ? item.relevance : "--"} </li>
                            <li> <strong>Likelihood:</strong> {item.likelihood ? item.likelihood : "--"} </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsForData