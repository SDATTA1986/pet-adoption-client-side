import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AutoSizer from "react-virtualized-auto-sizer";
import NavBar from '../NavBar/NavBar';
import { FixedSizeGrid as Grid } from "react-window";

import DisplayPet from '../../PetListing/DisplayPet';

const SearchCategory = () => {
    const { name } = useParams();
    console.log(name);
    const users=useLoaderData();
    console.log(users);
    const filteredPets=users.filter(singleCategory => singleCategory.PetCategory === (name));
    console.log(filteredPets);
    return (
        <>
        <NavBar></NavBar>
        <div className="min-h-screen">
           
             
                <AutoSizer>
                    {({ height, width }) => {
                        const columnCount = 3;
                        const rowCount = Math.ceil(filteredPets.length / columnCount);
                        const columnWidth = width / columnCount;
                        const rowHeight = 300;

                        return (
                            <Grid
                                className="Grid"
                                height={height}
                                width={width}
                                columnCount={columnCount}
                                columnWidth={columnWidth}
                                rowCount={rowCount}
                                rowHeight={rowHeight}
                            >
                                {({ columnIndex, rowIndex, style }) => {
                                    const index = rowIndex * columnCount + columnIndex;
                                    if (index >= filteredPets.length) {
                                        return null;
                                    }
                                    return (
                                        <div key={filteredPets[index].id} style={style}>
                      <DisplayPet user={filteredPets[index]} />
                    </div>
                                    );
                                }}
                            </Grid>
                        );
                    }}
                </AutoSizer>
            
        </div>
        </>
    
    );
};

export default SearchCategory;