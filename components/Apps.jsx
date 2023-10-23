import { SearchIcon } from "@heroicons/react/solid"
import Image from "next/image"
const frameworks = [
    {
        id: 1,
        type: "Javascript",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDxI08KhrPx6HHfIQdxILFjI--bni9ZBPCtG_hsqg4w&s",
        title: "golem-js",
        description: "A JavaScript library for building apps on top of Golem Network.",
    },
    {
        id: 2,
        type: "Javascript",
        img: "https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg",
        
        title: "React SDK",
        description: "A React library for building apps on top of Golem Network.",
    },
    {
        id: 3,
        type: "Python",
        img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
        title: "Yapapi",
        description: "A Python library for building apps on top of Golem Network.",
    },
    {
        id: 3,
        type: "Python",
        img: "https://avatars.githubusercontent.com/u/22125274?s=200&v=4",
        title: "Ray on Golem",
        description: "A Python library for quickly scaling applications on the Golem Network using Ray.",
    },
]
export default function Apps() {
    return (
        <section className=" relative apps py-24 ">
            <div data-aos="fade-up" data-aos-duration="1000" className=" mx-auto max-w-7xl px-4 sm:px-6   w-full z-40 relative">
                <div className="grid grid-cols-12 ">
                    <span className="block col-span-12  text-sm font-semibold uppercase tracking-wide text-golemblue ">Tools and frameworks</span>
                    <div className="col-span-12  mt-1  ">
                        <h3 className="text-3xl tracking-tight font-extrabold sm:text-3xl xl:text-5xl">Develop using our SDK&apos;s</h3>
                    </div>
                    <div className="col-span-12 md:col-span-6  mt-1  ">
                        <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                            Step into the next-gen of cloud computing. Our SDK&apos;s are tailored for both JavaScript and Python developers,
                            ensuring a smooth transition to the decentralized world of Golem Network.
                        </p>
                    </div>
                    <div className="col-span-12  mt-1  "></div>

                    <div className="col-span-12 lg:col-span-4 md:col-span-6 mt-8">
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                                Find framework
                            </label>

                            <div className="mt-1 relative flex items-center">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Quick search..."
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                                />
                                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                    <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                                        ⌘K
                                    </kbd>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="  col-span-12  py-2  grid grid-cols-12  gap-4 mt-4 rounded-r-lg rounded-bl-lg">
                        {frameworks.map((app) => (
                            <div
                                key={app.id}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="col-span-12 md:col-span-6 lg:col-span-3 p-6 grid app bg-gray-900 rounded-xl "
                            >
                                <div className="inline-block relative">
                                    <div className="h-20 w-20 relative">
                                        <Image
                                            src={app.img}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg shadow-lg mb-2 inline-block"
                                        />
                                    </div>
                                    <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-golemblue text-sm px-2 py-1 rounded text-white">
                                        {app.type}
                                    </span>
                                </div>
                                <h5 className="text-white text-lg tracking-tight font-medium">{app.title}</h5>
                                <p className="text-slate-400 text-md tracking-tight font-medium mb-1">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
