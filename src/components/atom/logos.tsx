import Image from "next/image";
export default function Socialmedia({
  from,
  name,
  link,
}: {
  from: any;
  name: string;
  link: any;
}) {
  return (
    <div>
      <a href={link}>
        <Image
          src={from}
          alt={name}
          height={30}
          width={30}
          className="m-2 opacity-50 hover:opacity-100 hover:cursor-pointer"
        />
      </a>
    </div>
  );
}
