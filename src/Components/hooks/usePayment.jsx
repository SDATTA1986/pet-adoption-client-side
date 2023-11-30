import { useQuery } from "@tanstack/react-query";
import axiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePayment = () => {
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