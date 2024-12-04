import React from 'react'

type NavItem = {
  id?: string
  label: string,
  path: string
  icon?: string
  subMenu?: NavItem[]
}

type NavData = NavItem[]

const TopNav = ({ navData }: { navData: NavData }) => {
  console.log(navData);

  return (
    <div className='bg-red-300 flex justify-between py-2' >
      <div className="left">Logo</div>
      <div className="center">
        <ul className='flex'>
          {navData.map(d => <li key={d.id} className='mx-3'>
            {d.label}
          </li>
          )}
        </ul>
      </div>
      <div className="right">Account</div>
    </div>
  )
}

export default TopNav