import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Components/hooks/useAuth";

import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";


const PaymentHistory = ({PetName}) => {
    const axiosSecure=useAxiosSecure();
    const { user } = useAuth();

    const { data: payments=[] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payment/${user.email}`);
            console.log(res.data);
            const res1=res.data.filter(selected=>selected.PetName===PetName)
            
            return res1;
        }
    })
    
    return (
        <div>
            <h2 className="text-3xl">Total payments:{payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Name</th>
                            <th>Donation Amount</th>
                            <th>Transaction Id</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment,index)=><tr key={payment._id}>
                            <th>{index+1}</th>
                            <td>{payment.name}</td>
                            <td>${payment.donatedAmount}</td>
                            <td>{payment.transactionId}</td>
                        </tr>
                        )}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;