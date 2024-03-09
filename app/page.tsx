import Image from "next/image";
import Test from "@/app/ui/background"
import Link from "next/link";
import Guzik from "@/app/ui/guzik"

export default function Home() {
  return (
      <div className="bg-no-repeat h-screen flex items-center justify-center">
          <Test/>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <div id="parent" className="bg-gray-800 bg-opacity-50 px-6 py-4 rounded-lg relative">
                  <h1 className="text-3xl font-bold mb-4">
                      Kochany Piotrusiu po ostatniej zagadce pewnie wiesz, że trzeba zwracać uwagę
                      na rzeczy których{' '}
                      <Link href={'/'}>
                          <h1>nie widać gołym okiem</h1>
                      </Link>{' '}
                  </h1>
                  <div className="mt-4">
                      <Guzik/>
                  </div>
              </div>

              <Link href="/druga_zagadka">
                  <img id="image" src="/bestia.jpg" alt="description_of_your_image"/>
              </Link>
          </div>
      </div>

  );
}
