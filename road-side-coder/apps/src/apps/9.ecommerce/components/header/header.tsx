import { useRef } from "react"
import { useFilterService } from "../../context/filter-context/context"
import { Link } from "react-router-dom"
import { CartStateIcon } from "./cart-state-button"

export const Header = () => {
  const { dispatch: filterDispatch } = useFilterService()

  const inputRef = useRef<HTMLInputElement>()

  const handleSearchDispatch = () => {
    filterDispatch({
      type: "SORT_BY_QUERY",
      payload: inputRef.current?.value.trim() ?? ""
    })
  }

  return (
    <nav className='h-5 flex items-center justify-between'>
      <Link to={"/"}>
        <h2 className='text-2xl font-mono'>Road side coder</h2>
      </Link>
      <input ref={inputRef} type="text" placeholder='Search a Product...' className="p-2"
        onChange={handleSearchDispatch}
      />
      <CartStateIcon />
    </nav>
  )
}
