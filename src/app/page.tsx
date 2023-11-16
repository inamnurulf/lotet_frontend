import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen bg-primary justify-center items-center flex flex-col">
        <div className="w-96 h-52 text-center text-white text-4xl font-bold">
          Welcome to
          <Image
             src={"./Logo-wht.svg"}
             width={155}
             alt="Logo"
             height={64}
             className="w-80 h-44"
          />
          
          </div>
        <div className="mt-8 transform transition-transform hover:scale-105">
          <a
            href="/home"
            className="text-white text-xl font-semibold hover:underline"
          >
            Start
          </a>
        </div>
      </div>
    </main>
    
  )
}
