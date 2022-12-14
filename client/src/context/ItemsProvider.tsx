import axios from "axios";
import { FC, useState } from "react";
import { createContext } from "react";

interface ContextState {
    items: any;
    handleGetItems: any;
    loading: boolean;
    setSearchTerm: any;
    searchTerm:any
}

const ItemsContext = createContext({} as ContextState);

const ItemsProvider: FC<ContextState> = ({ children }: any) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")

    const handleGetItems = async (term: string) => {
        try {
            setLoading(true);
            const response = await axios(
                `http://localhost:4000/api/items?q=${term}`
            );
            setItems(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setItems([]);
        }
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                loading,
                searchTerm,
                handleGetItems,
                setSearchTerm,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export { ItemsProvider };

export default ItemsContext;
