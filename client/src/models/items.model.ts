export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: Boolean;
    sold_quantity: number;
    description: string;
}

export interface Items {
    author: Author;
    Items: Item;
    categories?: string[];
}

interface Author {
    name: string;
    lastname: string;
}

interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

export const ProductEmpty = {
    author: {
        name: "",
        lastname: "",
    },
    item: {
        id: "",
        title: "",
        price: {
            currency: "",
            amount: 0,
            decimals: 0,
        },
        picture: "",
        condition: "",
        free_shipping: false,
        sold_quantity: 0,
        description: "",
    },
};
