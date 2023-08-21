import React from 'react'

function TopButtons({setQuery}) {
    const Cities=[
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'Delhi'
        },
        {
            id:3,
            title:'Tokyo'
        },
        {
            id:4,
            title:'Chandigarh'
        },
        {
            id:5,
            title:'Bhubaneswar'
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
       { Cities.map((Cities)=>{
        return(
        <button key={Cities.id} onClick={()=>setQuery(Cities.title)} className='text-white text-lg font-medium'>{Cities.title}</button> 
        ) }
       )
    }
    </div>
  )
}

export default TopButtons