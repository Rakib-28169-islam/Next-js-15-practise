import React from 'react';
import Counter from './Counter';

export const metadata = {
    title: "Counter Page",
    description: "This is counter page"
};
const page = () => {
    return (
        <Counter/>
    );
};

export default page;