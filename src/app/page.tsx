import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-w-screen min-h-screen bg-primary justify-center items-center flex flex-col backgroundsection">
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
        <div className="mt-8 transform transition-transform hover:scale-105 bg-secondary px-5 py-2 rounded-xl hover:bg-white text-white hover:text-secondary">
          <a
            href="/home"
            className="text-xl font-semibold"
          >
            Start
          </a>
        </div>
      </section>
    </main>
    
  )
}
