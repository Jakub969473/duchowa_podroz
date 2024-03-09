import Test from "@/app/ui/background";


export default function Home() {
    return (

        <div className=".bg-no-repeat ">
            <Test/>
            <div
                className="bg-gray-800 bg-opacity-50 px-6 py-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div>
                    <h1>Yupiiiiiii</h1>
                    <h2>Udało Ci się pokonać AI lub szło Ci tak źle, że zostałeś poprostu przepuszczony.
                        Tak czy siak gratulację, oto Twoja nagroda *klucz do gry*</h2>
                </div>
            </div>
        </div>
    )
        ;
}