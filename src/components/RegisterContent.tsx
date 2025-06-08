function RegisterContent() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
            <div className="p-8 rounded-xl bg-zinc-800 border border-gray-700 shadow-xl w-full max-w-md">
                <h1 className="text-white font-bold text-3xl mb-2 text-center">Create an Account</h1>
                <p className="text-gray-400 text-center mb-6">
                    Enter your credentials below to get started
                </p>

                <div className="mb-4">
                    <label htmlFor="name" className="text-white mb-1 block">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full p-3 rounded-md bg-zinc-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="text-white mb-1 block">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        className="w-full p-3 rounded-md bg-zinc-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="text-white mb-1 block">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full p-3 rounded-md bg-zinc-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition cursor-pointer">
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default RegisterContent;
