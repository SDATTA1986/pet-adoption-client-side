import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Category from "../../Shared/Category/Category";


const PetsCategory = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://pet-adoption-server-side-iota.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <section>
            <SectionTitle heading={"Pet's Category"}></SectionTitle>
            <div className="mt-[70px] grid grid-cols-2 ">
                    {
                        categories && categories?.map(category => <Category key={category.id} category={category} ></Category>)
                    }
                </div>
        </section>
        
    );
};

export default PetsCategory;