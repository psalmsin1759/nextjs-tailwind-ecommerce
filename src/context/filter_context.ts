import { useContext, createContext, useReducer } from 'react';
import { searchReducerFunc } from '@/components/product/search_reduce_func';


const initialState = {
    price: "",
    productOption: ""
};
const FilterContext = createContext(initialState);

const FilterProvider = ({children}) => {
    const [state, filterDispatch] = useReducer(searchReducerFunc, {
        price: "",
        productOption: ""
    });

    return (
        <FilterContext.Provider value={{state, filterDispatch}}>
        {children}
        </FilterContext.Provider>
    );
    
)};
