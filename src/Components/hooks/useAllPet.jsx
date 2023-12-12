import { useQuery } from "@tanstack/react-query";


import useAxiosSecure from "./useAxiosSecure";



const useAllPet = () => {
    const axiosSecure=useAxiosSecure();
    
    const {refetch,data:Pets=[]}=useQuery({
        queryKey:['Pets'],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/AllPets`);
            return res.data;
        }
    })
    return [Pets,refetch]
};

export default useAllPet;