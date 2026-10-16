const TechnologyCard = ({
    tech,
    addTech,
    selectedTech
}: any) => {

    const isAdded = selectedTech.find(
        (item: any) => item.id === tech.id
    )

    return (

        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">

            <div className="flex justify-between items-start">

                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                />

                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                    {tech.badge}
                </span>

            </div>


            <h3 className="text-lg font-bold mt-4">
                {tech.name}
            </h3>


            <p className="text-sm text-gray-500 mt-2 min-h-[60px]">
                {tech.description}
            </p>


            <div className="flex justify-between text-xs text-gray-500 mt-4">

                <span>
                    {tech.category}
                </span>

                <span>
                    {tech.level}
                </span>

                <span>
                    ⭐ {tech.rating}
                </span>

            </div>


            <button
                onClick={() => addTech(tech)}
                className="brand-gradient w-full text-white py-2 mt-5 rounded-lg"
            >

                {isAdded
                    ? "Added"
                    : "Add to Stack"
                }

            </button>

        </div>
    )
}

export default TechnologyCard