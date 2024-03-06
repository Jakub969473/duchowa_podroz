import Test from "@/app/ui/background";


export default function Home() {
    return (
        <div className=".bg-no-repeat ">
            <Test/>
            <div
                className="bg-gray-800 bg-opacity-50 px-6 py-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div>
                    <h1>Gratulacje udało Ci się przejść mój test. Co prawda nie liczyłem punktów ale ufam na słowo</h1>
                </div>
            </div>
        </div>
    );
}