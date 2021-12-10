export default function Home() {
    return (
        <main className=" w-full">
            {/* Welcome Section */}
            <div className="container mx-auto h-screen ">
                <div className="mx-8 flex items-left justify-center flex-col pt-20">
                    <h2 className="font-bold text-2xl text-yellow-700">Hi, I'm</h2>
                    <h1 className="font-extrabold  text-6xl text-white">Modestas</h1>
                    <h1 className="font-extrabold text-6xl text-yellow-500">Skirius</h1>
                    <h3 className="font-extrabold text-1xl text-yellow-800 mt-2">Web Developer</h3>
                </div>
            </div>
            {/* Welcome Section Ends */}
        </main>
    );
}
