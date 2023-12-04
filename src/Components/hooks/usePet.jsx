import { useQuery } from "@tanstack/react-query";


import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePet = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    const {refetch,data:Pets=[]}=useQuery({
        queryKey:['Pets'],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/Pets?email=${user.email}`);
            return res.data;
        }
    })
    return [Pets,refetch]
};

export default usePet;