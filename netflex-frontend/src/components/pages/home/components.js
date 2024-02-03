
import { MovieSlider } from "@/components/global/blocks/sliderList";
import { Select } from "@/components/global/fields/SelectField";
import {
    MdInfoOutline,
    MdPlayArrow,
    MdReplay,
    MdVolumeOff,
    MdVolumeUp,
} from "react-icons/md";

export const Genre = [
    { label: "Adventure", value: "adventure" },
    { label: "Comedy", value: "comedy" },
    { label: "Crime", value: "crime" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Historical", value: "historical" },
    { label: "Horror", value: "horror" },
    { label: "Romance", value: "romance" },
    { label: "Sci-fi", value: "sci-fi" },
    { label: "Thriller", value: "thriller" },
    { label: "Western", value: "western" },
    { label: "Animation", value: "animation" },
    { label: "Drama", value: "drama" },
    { label: "Documentary", value: "documentary" },
];

export const Feature = (props) => {
    return (
        <div className=" min-h-screen relative w-full">
            <div className=" min-h-screen absolute top-0 z-0">
                <img src="./assets/images/homeImg.jpg" className=" opacity-40 object-cover  object-center z-0 "></img>
            </div>
            <div className="z-10 block relative pt-20 max-w-7xl mx-auto min-h-screen text-white  ">
                <div className=" text-gray-50 ">
                    <Select
                        options={Genre}
                        id={"Genre"}
                        label={"Tv Shows"}
                        additionalAttrs={{ class: "w-40 text-white bg-[#00000060]", parentClass: "flex gap-10 items-center", labelClass: 'text-3xl font-Semibold' }}
                        placeholder={"Select"}
                        optionkeys={{ key: "lavel", value: "value" }}
                    />
                </div>
                <div className=" z-10 absolute left-0 bottom-24  max-w-lg flex flex-col gap-2  ">
                    <h2 className=" text-3xl">This is Going to Title</h2>
                    <p>
                        {" "}
                        This will link your title and description to the root dialog component
                        via the aria-labelledby and aria-describedby attributes, ensuring
                        their contents are announced to users using screenreaders when your
                        dialog opens.
                    </p>
                    <div className=" flex items-center gap-4">
                        <button className="relative px-4 py-2 rounded-md flex items-center gap-2 bg-white text-gray-900">
                            <MdPlayArrow /> <span>Play</span>
                        </button>
                        <button className="relative px-4 py-2 rounded-md flex items-center gap-2 bg-gray-500 text-white">
                            <MdInfoOutline /> <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="z-10 absolute right-0 bottom-24 text-white flex gap-3">
                <button className="relative rounded-full  p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <MdVolumeOff className="w-5 h-5" />
                </button>
                <button>
                    <MdVolumeUp className="w-5 h-5" />
                </button>
                <button>
                    <MdReplay className="w-5 h-5" />
                </button>
                <span className="w-40  h-10 border-l-white border-l-4 border-spacing-2 flex items-center pl-3 bg-[#00000020]">U/A 16+</span>
            </div>

           

        </div>
    );
};
