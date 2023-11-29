import { useQuery } from "@tanstack/react-query";
import axiosSecure from "./useAxiosSecure";


const useDonation = () => {
    const {data:campaign=[]}=useQuery({
        queryKey:['campaign'],
        queryFn: async()=>{
            const res=await axiosSecure.get('/campaign');
            return res.data;
        }
    })
    return [campaign]
};

export default useDonation;