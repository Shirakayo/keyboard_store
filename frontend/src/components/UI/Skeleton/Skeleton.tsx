import React from 'react';
import ContentLoader from "react-content-loader";


const Skeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={312}
            viewBox="0 0 280 312"
            backgroundColor="#FFFFFF"
            foregroundColor="#ecebeb"
        >
            <rect x="-2" y="1" rx="0" ry="0" width="335" height="156"/>
            <rect x="2" y="200" rx="0" ry="0" width="313" height="44"/>
            <rect x="46" y="257" rx="0" ry="0" width="183" height="21"/>
        </ContentLoader>
    )
}

export default Skeleton;




