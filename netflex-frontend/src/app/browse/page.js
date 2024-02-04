import Header from '@/components/global/blocks/header'
import React from 'react'
import Index from '@/components/pages/home'
import { servermovieApi } from '@/lib/network/servermethod'
import Link from 'next/link'

const Page = async (props) => {

  const record = await getAllRecord(props?.searchParams)
  console.log(record);


  return (
    <div className='bg-gray-700 min-h-screen '>
      <header className=' sticky top-0 z-50'>
        <Header></Header>
      </header>
      <Index />
      <div>

        <Link href="?modal=true">
          <button type="button" className="bg-blue-500 text-white p-2">Open Modal</button>
        </Link>
      </div>
    </div>
  )
}

export default Page


export const getAllRecord = async (query) => {

  const params = {
    method: "get",
    header: {},
    query: { ...query },
  };
  const result = await servermovieApi(
    `/movie/latest`,
    params
  );


  return result

}
