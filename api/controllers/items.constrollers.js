import axios from "axios";

const author = {
    name: "Stiben",
    lastname: "Velez"
}


export const getItems = async (req, res) => {
    const { q } = req.query;

    try {
        const {data} = await axios.get(
            `https://api.mercadolibre.com/sites/MCO/search?q=${q || ""}`
        );

        const categories = data.filters[0]?.values.map(item => item.name) || []

        const items = data.results.map(
            ({
                id,
                title,
                price,
                currency_id,
                thumbnail,
                condition,
                shipping,
            }) => ({
                id,
                title,
                price: {
                    currency: currency_id,
                    amount: price,
                    decimals: 0,
                },
                picture: thumbnail,
                condition,
                free_shipping: shipping.free_shipping,
            })
        );

        const itemFormat = {
            author,
            categories,
            items,
        };
        res.json(itemFormat);
    } catch (error) {
        
        console.log(error);
        res.status(400).json({ msg: "Hubo un error" });
    }
};

export const getItem = async (req, res) => {
    const { id } = req.params;

    try {
        const { data: item } = await axios.get(
            `https://api.mercadolibre.com/items/${id}`

        );
        const { data: description } = await axios.get(
            `https://api.mercadolibre.com/items/${id}/description`
        );

        const itemFormat = {
            author,
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 0,
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: description.plain_text,
            },
        };

        res.json(itemFormat);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Hubo un error" });
    }
};
