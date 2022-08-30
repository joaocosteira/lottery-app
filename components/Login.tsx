import { useMetamask } from "@thirdweb-dev/react";

const Login = () =>{

    const connectwithMetamask = useMetamask();

    return(
        <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center mb-10">
                <img 
                    className="rounded-full h-56 w-56 mb-10" 
                    src="/login_logo.png" 
                    alt="login logo"
                />
                <h1 className="text-6xl text-white font-bold">Draw Game</h1>
                <h2 className="text-white">Get Started With Your Metamask</h2>

                <button 
                    onClick={connectwithMetamask}
                    className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
                >
                    Login With Metamask
                </button>
            </div>
        </div>
    )
}

export default Login;