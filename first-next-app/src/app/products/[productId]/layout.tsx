import React from 'react';

const layout = (
    { children }: Readonly<{ children: React.ReactNode }>
) => {
    return (
        <div>
            <h1>This is Product Layout</h1>
            {children}

        </div>
    );
};

export default layout;