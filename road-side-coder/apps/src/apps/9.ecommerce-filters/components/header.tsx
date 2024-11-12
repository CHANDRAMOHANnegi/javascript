import { useRef } from "react"
import { useFilterService } from "../context/filter-context/context"

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
      <h2 className='text-2xl font-mono'>Road side coder</h2>
      <input ref={inputRef} type="text" placeholder='Search a Product...' className="p-2"
        onChange={handleSearchDispatch}
      />
    </nav>
  )
}
