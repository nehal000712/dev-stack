import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import TechnologyCard from "./TechnologyCard"
import YourStack from "./YourStack"

const TechnologySection = () => {

    const [technologies, setTechnologies] = useState<any[]>([])
    const [selectedTech, setSelectedTech] = useState<any[]>([])
    const [loading, setLoading] = useState(true)


    // JSON load
    useEffect(() => {

        fetch("/Technologies.json")

            .then(res => res.json())

            .then(data => {
                setTechnologies(data)
                setLoading(false)
            })

            .catch(error => {
                console.log(error)
                setLoading(false)
            })

    }, [])


    // Add Technology
    const addTech = (tech: any) => {

        const found = selectedTech.find(
            item => item.id === tech.id
        )

        if (found) {

            toast.warning(`${tech.name} already added!`)

        } else {

            setSelectedTech([
                ...selectedTech,
                tech
            ])

            toast.success(`${tech.name} added to stack!`)
        }
    }


    // Remove Technology
    const removeTech = (id: number) => {

        const tech = selectedTech.find(
            item => item.id === id
        )

        const newList = selectedTech.filter(
            item => item.id !== id
        )

        setSelectedTech(newList)

        toast.info(`${tech.name} removed`)
    }


    // Remove All
    const removeAll = () => {

        setSelectedTech([])

        toast.error("All technologies removed")
    }


    // Loading
    if (loading) {

        return (
            <div className="text-center py-20">

                <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin mx-auto">
                </div>

                <p className="mt-4 text-gray-500">
                    Loading Technologies...
                </p>

            </div>
        )
    }


    return (

        <section
            id="technologies"
            className="max-w-7xl mx-auto px-6 py-20"
        >

            <div className="mb-10">

                <h2 className="text-4xl font-bold text-slate-900">

                    Explore the{" "}

                    <span className="brand-text">
                        Technologies
                    </span>

                </h2>

                <p className="text-gray-500 mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>


            <div className="grid lg:grid-cols-[1fr_300px] gap-8">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {technologies.map((tech) => (

                        <TechnologyCard
                            key={tech.id}
                            tech={tech}
                            addTech={addTech}
                            selectedTech={selectedTech}
                        />

                    ))}

                </div>


                <YourStack
                    selectedTech={selectedTech}
                    removeTech={removeTech}
                    removeAll={removeAll}
                />

            </div>

        </section>
    )
}

export default TechnologySection