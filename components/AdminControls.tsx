import { 
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon
 } from "@heroicons/react/24/solid";
import { 
    useContract, 
    useContractCall, 
    useContractData 
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { currency } from "../constants";

const AdminControls = () =>  {

    const { contract } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
    const { data: totalCommission } = useContractData(contract, "operatorTotalCommission");
    const { mutateAsync: DrawWinnerTicket } = useContractCall(contract, "DrawWinnerTicket");
    const { mutateAsync: RefundAll } = useContractCall(contract, "RefundAll");
    const { mutateAsync: restartDraw } = useContractCall(contract, "restartDraw")
    const { mutateAsync: WithdrawCommission } = useContractCall(contract, "WithdrawCommission")


    const drawWinner = async () => {

        const notification = toast.loading("Buying your tickets...");

        try{
            const data = await DrawWinnerTicket([{}]);
            
            toast.success("Winner was Selected",{
              id : notification
            });
    
          }catch(e){
            toast.error("Whoops something went wrong!",{
              id : notification,
            })
    
            console.error("Contract called failure",e);
          }
    }

    const onWithdrawCommission = async () => {

        const notification = toast.loading("Withdrawing comissions...");

        try{
            const data = await WithdrawCommission([{}]);
            
            toast.success("Your comission has been withdraw successfully",{
              id : notification
            });
    
          }catch(e){
            toast.error("Whoops something went wrong!",{
              id : notification,
            })
    
            console.error("Contract called failure",e);
          }
    } 
    
    const onRestartDraw = async () => {

        const notification = toast.loading("Withdrawing comissions...");

        try{
            const data = await restartDraw([{}]);
            
            toast.success("Draw restarted successfully",{
              id : notification
            });
    
          }catch(e){
            toast.error("Whoops something went wrong!",{
              id : notification,
            })
    
            console.error("Contract called failure",e);
          }
    }     
    

    const onRefundAll= async () => {

        const notification = toast.loading("Withdrawing comissions...");

        try{
            const data = await RefundAll([{}]);
            
            toast.success("All Refunded Successfully",{
              id : notification
            });
    
          }catch(e){
            toast.error("Whoops something went wrong!",{
              id : notification,
            })
    
            console.error("Contract called failure",e);
          }
    }     
        
    


    return(
        <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
            <h2 className="font-bold">Admin Controls</h2>
            <p className="mb-5">Total Commission to be withdraw: {
                totalCommission && ethers.utils.formatEther(totalCommission?.toString())}{` ${currency}`}
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <button onClick={drawWinner} className="admin-button">
                    <StarIcon className="h-6 mx-auto mb-2"/>
                    Draw Winner
                </button>
                <button onClick={onWithdrawCommission} className="admin-button">
                    <CurrencyDollarIcon className="h-6 mx-auto mb-2"/>
                    Withdraw Commission
                </button>
                <button onClick={onRestartDraw} className="admin-button">
                    <ArrowPathIcon className="h-6 mx-auto mb-2"/>
                    Restart Draw
                </button>
                <button onClick={onRefundAll} className="admin-button">
                    <ArrowUturnDownIcon className="h-6 mx-auto mb-2"/>
                    Fefund All
                </button>
            </div>
        </div>
    )
}

export default AdminControls;