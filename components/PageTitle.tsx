import React from 'react'
import { TbPointFilled } from 'react-icons/tb'


export default function PageTitle({title} : { title : string } ) {
  return (
    <div className="flex items-center space-x-5 capitalize">
            <div className="text-primary dark:text-primary font-semibold font-recoleta_bold md:text-4xl text-3xl ">
              {" "}
              {title}
            </div>
            <div className="text-primary dark:text-primary">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
  )
}
