import Image from "next/image";
import CategoryButton from "./categoryButton";

interface KPDescProps{
  title: string,
  date: string,
  details: string,
  category: string[],
  image: string,
}

const KPDescription: React.FC<KPDescProps> = ({title, date, details, category, image}) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

      <article
        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-teal-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ml-10"
      >

<div className="flex-col justify-center bg-white w-min h-min p-2 rounded-xl">

<Image className="rounded-lg"
      src={"./kerjapraktikImg.png"}
      alt="KP Logo"
      width={50}
      height={50}
      />

        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            {date}{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900 text-green-900">
              {title}
            </h3>
            <h3 className="mt-0.5 font-medium text-gray-900 text-blue-800">
              company
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
          { category && category.length > 0 ? (
        category.map(cat => (
          <CategoryButton key={cat} name={cat} />
        ))
      ) : (
        null
      )}
          </div>
        </div> </div>
      </article>

      <div className="justify-center bg-white w-300 h-200 p-4 rounded-xl mt-5 mr-10">
        <h3 className="text-gray-900 font-semibold mb-1 mt-5">Requirements</h3>
        <p className="text-gray-900 font-normal">{details}</p>
      </div>
    </div>
  );
};

export default KPDescription;
