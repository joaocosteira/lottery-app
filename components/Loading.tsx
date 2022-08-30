import { PropagateLoader } from "react-spinners";

const Loading = () => {

    return(
        <div className='bg-[#091B18] h-screen flex flex-col justify-center items-center'>
        <div  className='flex items-center mb-10 space-x-2'>
          <img 
            className="rounded-full h-20 w-20 mb-10" 
            src="/login_logo.png" 
            alt="login logo"
          />
          <h1 className='text-lg text-white font-bold'>Loading The Draw App</h1>
        </div>
        <PropagateLoader color='white' size={30}/>
      </div>
    )
}

export default Loading;