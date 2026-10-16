const YourStack = ({
    selectedTech,
    removeTech,
    removeAll
}: any) => {

    return (

        <div
            id="stack"
            className="border border-gray-200 rounded-xl p-5 bg-white h-fit"
        >

            <h2 className="text-xl font-bold">
                Your Stack
            </h2>


            <p className="text-sm text-gray-400 mt-1">

                {selectedTech.length}
                {" "}
                Technology Selected

            </p>


            {selectedTech.length === 0 ? (

                <div className="border border-dashed border-gray-300 rounded-lg p-8 mt-5 text-center text-gray-400">

                    Your stack is empty.

                </div>

            ) : (

                <div className="mt-5">


                    {selectedTech.map((tech: any) => (

                        <div
                            key={tech.id}
                            className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-3"
                        >

                            <div className="flex items-center gap-3">

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-8 h-8 object-contain"
                                />


                                <div>

                                    <h3 className="text-sm font-bold">
                                        {tech.name}
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        {tech.category}
                                    </p>

                                </div>

                            </div>


                            <button
                                onClick={() => removeTech(tech.id)}
                                className="text-gray-400 text-xl hover:text-red-500"
                            >
                                ×
                            </button>

                        </div>

                    ))}


                    <button
                        onClick={removeAll}
                        className="w-full border border-red-400 text-red-500 py-2 rounded-lg mt-4"
                    >
                        Remove All
                    </button>

                </div>
            )}

        </div>
    )
}

export default YourStack