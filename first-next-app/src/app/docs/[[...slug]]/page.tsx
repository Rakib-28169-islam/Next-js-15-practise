import React from 'react';

const page = async(
    {
        params,
    }: {
        params: Promise<{ slug: string[] }>;
    }
) => {

    const {slug} =  await params;

    const len = slug?.length || 0;
    switch(len)
    {
        case 1:
            return <h1 className='bg-blue-700'>This is docs page for {slug[0]}</h1>;
        case 2:
            return <h1 className='bg-red-600'>This is docs page for {slug[0]} and {slug[1]}</h1>;
        case 3:
            return <h1 className='bg-green-600'>This is docs page for {slug[0]}, {slug[1]} and {slug[2]}</h1>;    
        default:
            return <h1>This is docs page</h1>;

    }

  
};

export default page;