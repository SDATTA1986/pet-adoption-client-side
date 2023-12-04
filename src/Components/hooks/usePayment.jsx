import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    const {refetch,data:payments=[]}=useQuery({
        queryKey:['payments'],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })
    return [payments,refetch]
};

export default usePayment;