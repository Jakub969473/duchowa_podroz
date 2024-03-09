'use client';

import Test from "@/app/ui/background";
import { useState } from 'react';
import TicTacToe from '@/app/trzecia_zagadka/TTT';

export default function Home() {
    return (

        <div className=".bg-no-repeat ">
            <Test/>
            <div
                className="bg-gray-800 bg-opacity-50 px-6 py-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div>
                    <h1>Mam nadzieje, że podobał się quiz. Wierzę na słowo, że miałeś 100% i tego nie sprawdzałem</h1>
                    <h2>Teraz musisz wykazać się sprytem i pokonać AI w tic-tac-toe</h2>
                    <TicTacToe/>
                </div>
            </div>
        </div>
    )
        ;
}