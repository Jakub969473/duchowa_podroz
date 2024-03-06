import Image from "next/image";
import Test from "@/app/ui/background"
import Link from "next/link";

export default function Home() {
  return (
      <div className=".bg-no-repeat ">
          <Test/>
          <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <div className="bg-gray-800 bg-opacity-50 px-6 py-4 rounded-lg">
                  <h1 className="text-3xl font-bold mb-4">
                      Kochany Piotrusiu po ostatniej zagadke pewnie wiesz, że trzeba zwracać uwage
                      na rzeczy których
                      <Link href="/druga_zagadka">
                          <h1 className="underline text-yellow-400 hover:text-yellow-500
                           transition duration-300 ease-in-out pulsate">nie widać gołym okiem</h1>
                      </Link>{" "}
                      reszta tekstu
                  </h1>
              </div>
          </div>
      </div>
  );
}
