import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";


const useDonation = () => {
    const axiosSecure=useAxiosSecure();
    const {refetch,data:campaign=[]}=useQuery({
        queryKey:['campaign'],
        queryFn: async()=>{
            const res=await axiosSecure.get('/campaign');
            return res.data;
        }
    })
    return [campaign,refetch]
};

export default useDonation;