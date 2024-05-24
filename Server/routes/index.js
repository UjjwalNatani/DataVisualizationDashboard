import express from 'express';
import mongoose from "mongoose";
//creating a router
const router = express.Router();

mongoose.connect('mongodb+srv://ujjwalnatani10:Ugnatani@cluster0.yxotofl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({}, { strict: false });
const Data = mongoose.model('Data', DataSchema);

//api to get all the data
router.get('/all', async (req, res) => {
    try {
        const allData = await Data.find();
        
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No data found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All data",
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
});

// api to get data filtered by year
router.get("/year/:year", async (req, res) => {
    try {
        const { year } = req.params;
        if (year.length !== 4) {
            return res.status(400).json({
                success: false,
                message: "Invalid year",
            })
        }
        // ----------- important -----------
        // using '$or' operator to which includes multiple conditions
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({
            $or: [
                { start_year: year },
                { end_year: year },
                { published: { $regex: year, $options: 'i' } },
                { added: { $regex: year, $options: 'i' } }
            ]
        });
        
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by year ${year}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by topic
router.get("/topic/:topic", async (req, res) => {
    try {
        const { topic } = req.params;
        if (topic.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid topic",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ topic: { $regex: topic, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by topic: ${topic}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by title
router.get("/title/:title", async (req, res) => {
    try {
        const { title } = req.params;
        if (title.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid title",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ title: { $regex: title, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by title: ${title}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by sector
router.get("/sector/:sector", async (req, res) => {
    try {
        const { sector } = req.params;
        if (sector.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid sector",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ sector: { $regex: sector, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by sector: ${sector}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by region
router.get("/region/:region", async (req, res) => {
    try {
        const { region } = req.params;
        if (region.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid region",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ region: { $regex: region, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by region: ${region}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by country
router.get("/country/:country", async (req, res) => {
    try {
        const { country } = req.params;
        if (country.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid country",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ country: { $regex: country, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by country: ${country}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by pestle
router.get("/pestle/:pestle", async (req, res) => {
    try {
        const { pestle } = req.params;
        if (pestle.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid pestle",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ pestle: { $regex: pestle, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by pestle: ${pestle}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by source
router.get("/source/:source", async (req, res) => {
    try {
        const { source } = req.params;
        if (source.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid source",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({ source: { $regex: source, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by source: ${source}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by intensity
router.get("/intensity/:intensity", async (req, res) => {
    try {
        const { intensity } = req.params;
        const allData = await Data.find({ intensity: parseInt(intensity) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by intensity: ${intensity}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by likelihood
router.get("/likelihood/:likelihood", async (req, res) => {
    try {
        const { likelihood } = req.params;
        const allData = await Data.find({ likelihood: parseInt(likelihood) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by likelihood: ${likelihood}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

// api to get data filtered by any
router.get("/any/:search", async (req, res) => {
    try {
        const { search } = req.params;
        if (search.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid search",
            })
        }
        // ----------- important -----------
        // using '$or' operator to which includes multiple conditions
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await Data.find({
            $or: [{ sector: { $regex: search, $options: 'i' } }, { topic: { $regex: search, $options: 'i' } },
            { insight: { $regex: search, $options: 'i' } }, { title: { $regex: search, $options: 'i' } },
            { pestle: { $regex: search, $options: 'i' } }, { source: { $regex: search, $options: 'i' } },
            { url: { $regex: search, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by search ${search}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

export default router;