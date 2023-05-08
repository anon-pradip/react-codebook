import { createContext, useContext } from "react"

const filterInitialState = {
  produuctList: [],
  onlyInStock: false,
  betSellerOnly: false,
  sortBy: null,
  ratings: null,
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({ children }) => {
  const value = {
    productList: [1, 2, 3]
  }
  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  return context
}