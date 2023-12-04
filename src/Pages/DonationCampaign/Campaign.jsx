



// import DisplayPet from "./DisplayPet";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
// import Select from 'react-select';
import DisplayCampaign from "./DisplayCampaign";
import useDonation from "../../Components/hooks/useDonation";
import NavBar from "../Shared/NavBar/NavBar";



const Campaign = () => {
    // const [allCampaigns, setAllCampaigns] = useState([]);
    const [campaigns]=useDonation();
    const allCampaigns=campaigns.sort((a, b) => new Date(b.DateOfCampaign) - new Date(a.DateOfCampaign));
    // useEffect(() => {
    //     fetch('https://pet-adoption-server-side-iota.vercel.app/campaign')
    //         .then(res => res.json())
    //         .then(data => {
    //             const sortedCampaigns = data.sort((a, b) => new Date(b.DateOfCampaign) - new Date(a.DateOfCampaign));
    //             setAllCampaigns(sortedCampaigns);
    //         }
    //         )
    // }, [])
    
    return (
        <>
        <NavBar></NavBar>
        <div className="min-h-screen">
           <div className="flex justify-center items-center">
           
            {/* <select className="select select-secondary w-1/3">
                <option disabled selected>Pick by category</option>
                <option>Cat</option>
                <option>Dog</option>
                <option>Rabbit</option>
                <option>Fish</option>
                
            </select> */}
            {/* <Select className=" w-1/3 " 
        defaultValue={selectedOption}
        onChange={handleCategoryChange}
        options={options}
        
      /> */}
           </div>
            {allCampaigns.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <AutoSizer>
                    {({ height, width }) => {
                        const columnCount = 3;
                        const rowCount = Math.ceil(allCampaigns.length / columnCount);
                        const columnWidth = width / columnCount;
                        const rowHeight = 400;

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
                                    if (index >= allCampaigns.length) {
                                        return null;
                                    }
                                    return (
                                        <div key={allCampaigns[index].id} style={style}>
                      <DisplayCampaign  user={allCampaigns[index]} />
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

export default Campaign;