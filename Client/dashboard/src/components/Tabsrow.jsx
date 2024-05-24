import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import CardsForData from './CardsForData';
import AccordionForCharts from './AccordionForCharts';
import Filters from './Filters';
import axios from 'axios';

const Tabsrow = ({ data, setMainData }) => {
    // state to store the number of data cards we want to display at a time, we'll update it on click of a button
    const [limit, setLimit] = useState(4);
    const limitedData = data.slice(0, limit);
    // state to store the search bar text
    const [search, setSearch] = useState("");

    const createUniqueArrays = (data) => {
        if (!data || data.length === 0) return {};
        const keys = Object.keys(data[0]);
        const uniqueArrays = {};

        keys.forEach(key => {
            uniqueArrays[key] = [...new Set(data.map(item => item[key]))];
        });

        return uniqueArrays;
    };

    // Call the function to create unique arrays
    const uniqueDataArrays = createUniqueArrays(data);

    // function to make an api call to get the filtered data
    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='tabsClass'>
            <Tabs
                defaultActiveKey="data"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="data" title="Data">
                    <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Filters setMainData={setMainData} uniqueDataArrays={uniqueDataArrays}/>

                    {limitedData && limitedData.length === 0 ? (
                        <div style={{ margin: '1rem' }}>No data found, or please wait for a while.</div>
                    ) : limitedData && limitedData.length > 0 ? (
                        <CardGroup style={{ padding: '3vw' }}>
                            {limitedData.map((e, i) => {
                                return <CardsForData item={e} key={i} />
                            })}
                        </CardGroup>
                    ) : (
                        <div>Loading...</div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Button variant="primary" onClick={() => setLimit(prev => prev + 4)}>Show More</Button>
                        <Button variant="primary" onClick={() => setLimit(prev => prev - 4)}>Show Less</Button>
                    </div>
                </Tab>
                <Tab eventKey="chart" title="Interactive Insights/Dashboard">
                    <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Filters setMainData={setMainData} />
                    <AccordionForCharts data={data} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Tabsrow