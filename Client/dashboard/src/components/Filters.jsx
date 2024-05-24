import React from 'react'
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

// Returning a bootstrap dropdown and just a button
const Filters = ({ setMainData, uniqueDataArrays }) => {
    //function to call the getDataFromDB function and passing the 'year' to it entered by the user
    // const handleSelect = (event, data) => {
    //     getDataFromDB(event, data)
    //     // console.log(event);
    // };
    // func to fetch the filtered data by year and update the state
    const getDataFromDB = async (event, data) => {
        try {
            console.log(`http://localhost:8000/api/data/${data}/${event}`)
            const response = await axios.get(`http://localhost:8000/api/data/${data}/${event}`);
            setMainData(response.data.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    // func to handle the "reset filters button" by making another api call and update state 
    const handleReset = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/data/all");
            setMainData(response.data.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const titlesArray = uniqueDataArrays ? uniqueDataArrays.title || [] : [];
    const endYearArray = uniqueDataArrays ? uniqueDataArrays.end_year || [] : [];
    const sectorArray = uniqueDataArrays ? uniqueDataArrays.sector || [] : [];
    const regionArray = uniqueDataArrays ? uniqueDataArrays.region || [] : [];
    const countryArray = uniqueDataArrays ? uniqueDataArrays.country || [] : [];
    const pestleArray = uniqueDataArrays ? uniqueDataArrays.pestle || [] : [];
    const sourceArray = uniqueDataArrays ? uniqueDataArrays.source || [] : [];
    const likelihoodArray = uniqueDataArrays ? uniqueDataArrays.likelihood || [] : [];
    const topicArray = uniqueDataArrays ? uniqueDataArrays.topic || [] : [];

    return (
        <div className='tabsClass' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{width:'40vw', height:'20vh', display: 'flex', flexWrap: 'wrap'}}>
                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'title')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Title
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {titlesArray.map((title, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={title} >{title}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'sector')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Sector
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {sectorArray.map((sector, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={sector} >{sector}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'region')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Region
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {regionArray.map((region, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={region} >{region}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'country')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Country
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {countryArray.map((country, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={country} >{country}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'pestle')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Pestle
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {pestleArray.map((pestle, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={pestle} >{pestle}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'source')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Source
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {sourceArray.map((source, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={source} >{source}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'likelihood')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Likelihood
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {likelihoodArray.map((likelihood, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={likelihood} >{likelihood}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'topic')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By Topic
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {topicArray.map((topic, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={topic} >{topic}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{margin:'1vh'}} onSelect={(e) => getDataFromDB(e, 'year')}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By End Year
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '40vw', height: '20vh', overflow: 'scroll' }}>
                        {endYearArray.map((year, index) => (
                            <div key={index}>
                                <Dropdown.Item eventKey={year} >{year}</Dropdown.Item>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Button variant="danger" onClick={handleReset} style={{ marginLeft: '1vw', width: '10rem' }}>Reset Filters</Button>
        </div>
    )
}

export default Filters