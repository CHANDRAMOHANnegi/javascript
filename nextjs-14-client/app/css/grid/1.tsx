import React from 'react'
// border: 10px solid var(--clr-accent);
export const Grid = () => {
  return (
    <div className="grid  m-10 border-8 border-dark grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px]">
      <div className="p-2 text-white border-8 border-pink bg-accent ">1</div>
      <div className="p-2 text-white border-8 border-pink bg-accent ">2</div>
      <div className="p-2 text-white border-8 border-pink bg-accent ">3</div>
      <div className="p-2 text-white border-8 border-pink bg-accent ">4</div>
    </div>
  )
}
