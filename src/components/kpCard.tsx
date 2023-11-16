'use client';

interface KPCardProps {
  title: string;
  company: string;
  date: string;
  location: string
}

const KPCard: React.FC<KPCardProps> = ({ title, company, date, location }) => {
  const onclick = () =>{
    alert("click")
  }
  return (
    <div className="bg-white w-[1096px] h-[184px] mx-auto flex items-center justify-between px-5 py-4 rounded-md
  overflow-hidden shadow-lg my-4 hover:shadow-2xl transition duration-300 cursor-pointer">

  <div className="flex items-center gap-3">
    <img
      src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
      className="flex-shrink-0 object-cover rounded-full btn- w-24 h-24"
    />
    <div>
      <span className="text-green-800 text-lg font-semibold">{company}</span>
      <h1 className="font-bold text-2xl mt-2">{title}</h1>
      <div className="flex items-center gap-3 mt-2">
        <span className="bg-white-100 text-green-700 rounded-full px-3 py-1 text-sm">{date}</span>
        <span className="text-slate-600 text-sm flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>{" "}
          {location}
        </span>
      </div>
    </div>
  </div>

  <button className="bg-blue-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center" onClick={onclick}>
    Check Out!
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>

</div>


  );
};

export default KPCard;
