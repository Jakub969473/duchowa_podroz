import Image from "next/image";
import Test from "@/app/ui/background"

export default function Home() {
  return (
          <div className=".bg-no-repeat ">
              <Test/>
              <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <h1 className="text-3xl font-bold mb-4">Welcome to my Next.js App</h1>
                  <div className="mx-auto" style={{width: '300px', height: '200px'}}>
                      <Image
                          src="/images/example.jpg"
                          alt="Example Image"
                          layout="responsive"
                          width={300}
                          height={200}
                      />
                  </div>
              </div>
          </div>
  );
}
