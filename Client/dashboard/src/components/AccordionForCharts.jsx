import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

//import from files
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const AccordionForCharts = ({ data }) => {
    // defaultActiveKey="0"
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Polar Area - Represents number of Countries, Sectors, Topics, Pestles, Sources, etc are involved.</Accordion.Header>
                    <Accordion.Body>
                        <PolarChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Doughnut Charts - Represents number of Countries, Sectors, Topics, Pestles, Sources, etc are involved.</Accordion.Header>
                    <Accordion.Body>
                        <DoughnutChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Bar Chart- Represents number of projects in each Sector.</Accordion.Header>
                    <Accordion.Body>
                        <BarChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Line Chart- Represents number of projects as per Pestle.</Accordion.Header>
                    <Accordion.Body>
                        <LineChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Radar Charts- Represents number of projects as per Pestle.</Accordion.Header>
                    <Accordion.Body>
                        <RadarChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Pie Charts- Represents number of projects as per Pestle.</Accordion.Header>
                    <Accordion.Body>
                        <PieChart serverData={data} />
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}

export default AccordionForCharts