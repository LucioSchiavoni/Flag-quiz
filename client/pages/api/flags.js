import Cors from 'cors';
import axios from 'axios';

const cors = Cors({
    methods: ['GET'],
});

const handler = async (req, res) => {
    await cors(req, res);

    try {
        const URI = 'https://restcountries.com/v3.1/all';
        const response = await axios.get(URI);
        const allFlags = response.data;

        // Aquí puedes realizar cualquier manipulación o filtrado de datos necesarios

        res.status(200).json(allFlags);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default handler;
