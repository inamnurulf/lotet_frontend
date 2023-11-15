
interface SeminarCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ title, date, location, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg my-4">
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default SeminarCard;
