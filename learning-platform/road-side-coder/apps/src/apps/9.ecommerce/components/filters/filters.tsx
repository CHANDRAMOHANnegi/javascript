import React, { useEffect } from 'react'
import { useFilterService } from '../../context/filter-context/context'
import { StarRating } from '../../../7.star-rating/star-rating'
import { useSearchParams } from 'react-router-dom'

const filterMap = {
  price: "SORT_BY_PRICE",
  rating: "SORT_BY_RATING",
  stock: "SORT_BY_STOCK",
  searchQuery: "FILTER_BY_SEARCH"
}

export const CartFilters = () => {

  const { state: filterState, dispatch: filterDispatch } = useFilterService()

  const { price, rating, stock } = filterState
  const { asc, } = price

  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.size) {
      const filterObj = {
        stock: {
          apply: searchParams.has("stock"),
        },
        price: {
          apply: searchParams.has("sort"),
          min_price: 0,
          max_price: Infinity,
          asc: true
        },
        rating: {
          apply: searchParams.has("rating"),
          rate: JSON.parse(searchParams.get("rating")),
        },
        searchQuery: JSON.parse(searchParams.get("searchQuery")) ?? ""
      }
      // console.log(filterObj);

      for (const key in filterObj) {
        // console.log('key', key, filterMap[key],);

        filterDispatch({
          type: filterMap[key],
          payload: filterObj[key]
        })
      }
    }

  }, [searchParams, filterDispatch])

  useEffect(() => {
    console.log(filterState);
    setSearchParams({
      ...(filterState.price.apply && filterState.price.asc && { sort: `${filterState.price.apply}` })
    })
  }, [filterState, setSearchParams])

  const handleFilterByPriceDispatch = (asc) => {
    filterDispatch({
      type: "SORT_BY_PRICE",
      payload: {
        ...price,
        apply: true,
        asc
      }
    })
  }

  const handleFilterByStockDispatch = () => {
    filterDispatch({
      type: "SORT_BY_STOCK", payload: {
        ...stock,
        apply: !stock.apply,
      }
    })
  }

  const handleRatingFilter = (rate) => {
    filterDispatch({
      type: "SORT_BY_RATING",
      payload: {
        ...rating,
        apply: true,
        rate
      }
    })
  }

  const handleClearFilter = () => {
    filterDispatch({
      type: "CLEAR_ALL_FILTERS",
    })
  }

  return (
    <div className='flex flex-col w-96'>
      <span className='font-bold'> Filter </span>

      <span>
        <input type="radio" className='mr-2' id='Ascending' name='sort'
          onChange={() => handleFilterByPriceDispatch(true)}
          checked={price.apply && asc}
        />
        <label htmlFor="sort">Price low to high</label>
      </span>

      <span>
        <input type="radio" className='mr-2' id='Ascending' name='sort'
          onChange={() => handleFilterByPriceDispatch(false)}
          checked={price.apply && !asc}

        />
        <label htmlFor="sort">Price high to low</label>
      </span>

      <span>
        <input type='checkbox' id='stock' name="stock" checked={!!stock.apply} onChange={handleFilterByStockDispatch} />
        <label htmlFor="stock" className='ml-2'>Remove out of stock</label>
      </span>

      <StarRating onChange={handleRatingFilter} rating={rating.rate} size={5} />
      <button onClick={handleClearFilter}>Clear All Filters</button>
    </div>
  )
}
