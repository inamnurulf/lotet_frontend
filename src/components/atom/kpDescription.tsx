import Image from "next/image";
import CategoryButton from "./categoryButton";

const KPDescription = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const imageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX/////uQB/ugAApO/yUCL/+/T/tAD5wbfxRADyShT2j3vO47R4twCpz3S02/gAoO50wPT4+/R0tQD0+f4Ane771M3xPQD1iXT/rgD95uLL4a5tsgD4s6ejzGj6/f+u2PgAmO3ics+kAAABEElEQVR4nO3biQ2CUBREUVfAXVEBd/qv0sRvBy8/MXhuAZOcAmY0kiRJkiRJkiRJkiRJkiRJv9qljHVOM9dVqGtGYdlUkZr2s3K4rUPdcgqrWaTFMgnrSaiakJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8J+EzSJS9fvftXO7jNTek/CxCfXIKJSk/D2PsZ5pZh4so/DVnyL1+wTsilBdRuF2N420+wqLcaiCkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkHBAwuG/8yRJkiRJkiRJkiRJkiRJUqw3TWrkMTMBDxwAAAAASUVORK5CYII=";

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

      <article
        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-teal-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ml-10"
      >

<div className="flex-col justify-center bg-white w-min h-min p-2 rounded-xl">

<Image className="rounded-lg"
      src= {imageUrl}
      alt="KP Logo"
      width={50}
      height={50}
      />

        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900 text-green-900">
              Data Analyst Internship
            </h3>
            <h3 className="mt-0.5 font-medium text-gray-900 text-blue-800">
              Microsoft Indonesia
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <CategoryButton name="IT" />
            <CategoryButton name="Intern" />
          </div>
        </div> </div>
      </article>

      <div className="justify-center bg-white w-300 h-200 p-4 rounded-xl mt-5 mr-10">
        <h3 className="text-gray-900 font-semibold mb-1 mt-5">Requirements</h3>
        <p className="text-gray-900 font-normal">{lorem}</p>
        <h3 className="text-gray-900 font-semibold mb-1 mt-5">Jobdesks</h3>
        <p className="text-gray-900 font-normal">{lorem}</p>
      </div>
    </div>
  );
};

export default KPDescription;
