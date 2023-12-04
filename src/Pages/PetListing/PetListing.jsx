import { useEffect, useState } from "react";

import DisplayPet from "./DisplayPet";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Select from 'react-select';

import NavBar from "../Shared/NavBar/NavBar";

const options = [
  { value: 'Cat', label: 'Cat' },
  { value: 'Dog', label: 'Dog' },
  { value: 'Rabbit', label: 'Rabbit' },
  { value: 'Fish', label: 'Fish' },
];

const PetListing = () => {
    const [allPets, setAllPets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/pet')
            .then(res => res.json())
            .then(data => {
                const sortedPets = data.sort((a, b) => new Date(b.DateOfAdvertisement) - new Date(a.DateOfAdvertisement));
                setAllPets(sortedPets);
            }
            )
    }, [])
    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);
      };
      const handleCategoryChange = (selectedOption) => {
        setSelectedOption(selectedOption);
      };
      const filteredPets = allPets.filter(pet => {
        if (searchTerm) {
          return pet.PetName.toLowerCase().includes(searchTerm);
        }
        if (selectedOption) {
          return pet.PetCategory.includes(selectedOption.value);
        }
        return true; // No filtering if neither search term nor category is selected
      });
    return (
        <>
        <NavBar></NavBar>
        <div className="min-h-screen">
           <div className="flex justify-center items-center">
           <input onChange={handleSearch} type="text" placeholder="Search by Name" className="input input-bordered input-primary w-2/3 my-4" />
            {/* <select className="select select-secondary w-1/3">
                <option disabled selected>Pick by category</option>
                <option>Cat</option>
                <option>Dog</option>
                <option>Rabbit</option>
                <option>Fish</option>
                
            </select> */}
            <Select className=" w-1/3 " 
        defaultValue={selectedOption}
        onChange={handleCategoryChange}
        options={options}
        
      />
           </div>
            {allPets.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <AutoSizer>
                    {({ height, width }) => {
                        const columnCount = 3;
                        const rowCount = Math.ceil(allPets.length / columnCount);
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
            )}
        </div>
        </>
    );
};

export default PetListing;