'use client';

import Test from "@/app/ui/background";
import { useState } from 'react';
import Link from "next/link";
import Guzik from "@/app/ui/guzik";

export default function Home() {
    return (

    <div className=".bg-no-repeat ">
        <Test/>
        <div
            className="bg-gray-800 bg-opacity-50 px-6 py-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <div>
                <h1>Teścik</h1>
                <h2>Musisz mieć 100% aby przejść do następnego zadania</h2>
                <NatureQuiz/>
            </div>
        </div>
    </div>
    )
        ;
}

const NatureQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: "Jakie miejsce jest uważane za duchowe centrum Indii?",
            options: ["Varanasi", "Delhi", "Rishikesh", "Agra"],
            answer: "Rishikesh"
        },
        {
            question: "Jakie zwierzę jest symbolem mądrości i duchowości w niektórych kulturach?",
            options: ["Orzeł", "Sowa", "Lew", "Wąż"],
            answer: "Sowa"
        },
        {
            question: "Jaki gatunek drzewa jest często uważany za symbol spokoju i harmonii?",
            options: ["Sosna", "Dąb", "Buk", "Bambus"],
            answer: "Bambus"
        },
        {
            question: "W jakim kraju znajduje się Machu Picchu, starożytne miasto Inków?",
            options: ["Peru", "Meksyk", "Boliwia", "Ekwador"],
            answer: "Peru"
        },
        {
            question: "Co oznacza termin 'ekoturystyka'?",
            options: ["Podróżowanie w celu nauki o ekosystemach", "Podróżowanie zminimalizowanym wpływem na środowisko", "Podróżowanie do wyłącznie ekologicznych miejsc", "Podróżowanie po parkach narodowych"],
            answer: "Podróżowanie zminimalizowanym wpływem na środowisko"
        },
        {
            question: "Która z poniższych jest największą wyspą na świecie?",
            options: ["Borneo", "Nowa Gwinea", "Madagaskar", "Grenlandia"],
            answer: "Grenlandia"
        },
        {
            question: "Jakie miejsce w Grecji uważane jest za centrum pielgrzymkowe i duchowe?",
            options: ["Ateny", "Kreta", "Sparta", "Delfy"],
            answer: "Delfy"
        },
        {
            question: "Która z poniższych jest największą pustynią na Ziemi?",
            options: ["Sahara", "Gobi", "Pustynia Australijska", "Antarktyda"],
            answer: "Antarktyda"
        },
        {
            question: "Jak nazywana jest japońska sztuka spacerowania i obserwacji natury?",
            options: ["Kendo", "Karate", "Ikebana", "Shinrin-yoku"],
            answer: "Shinrin-yoku"
        },
        {
            question: "Które z poniższych to popularne miejsca dla praktyki jogi?",
            options: ["Bali", "Tajlandia", "Indie", "Wszystkie powyższe"],
            answer: "Wszystkie powyższe"
        },
        {
            question: "Które z poniższych zwierząt jest często uważane za symbol spokoju i opanowania?",
            options: ["Tygrys", "Żyrafa", "Koń", "Panda"],
            answer: "Panda"
        },
        {
            question: "Który z poniższych jest najwyższym szczytem w Afryce?",
            options: ["Kilimandżaro", "Mount Everest", "Mont Blanc", "Denali"],
            answer: "Kilimandżaro"
        },
        {
            question: "Co to jest geotermia?",
            options: ["Wykorzystanie energii geotermalnej do produkcji energii elektrycznej", "Badanie geograficzne podłoża ziemi", "Proces kształtowania krajobrazu przez rzeźbę lodowcową", "Studium zachowania się zwierząt w ich naturalnym środowisku"],
            answer: "Wykorzystanie energii geotermalnej do produkcji energii elektrycznej"
        },
        {
            question: "Jaki naród słynie z praktykowania filozofii 'Hygge', która promuje prostotę i szczęście?",
            options: ["Japończycy", "Duńczycy", "Włosi", "Szwedzi"],
            answer: "Duńczycy"
        },
        {
            question: "Co to jest kamikadze?",
            options: ["Sztuka walki japońskich samurajów", "Tornado w Azji", "Nazwa japońskiego klasztoru buddyjskiego", "Nazwa japońskich pilotów samobójców z czasów II wojny światowej"],
            answer: "Nazwa japońskich pilotów samobójców z czasów II wojny światowej"
        },
        {
            question: "Jak nazywa się największy las deszczowy na świecie?",
            options: ["Amazonia", "Tajga", "Kongo", "Majowe"],
            answer: "Amazonia"
        },
        {
            question: "Które z poniższych to japońskie ogrody, które odzwierciedlają harmonię z naturą?",
            options: ["Zen", "Karesansui", "Ryokan", "Kaiyu-shiki-teien"],
            answer: "Kaiyu-shiki-teien"
        },
        {
            question: "Co to jest zjawisko zorzy polarnej?",
            options: ["Skręcanie liści przez mrówki wokół ich gniazd", "Jasne zjawisko atmosferyczne spowodowane cząstkami wiatru słonecznego", "Katastrofa naturalna w Arktyce", "Dźwięk słyszany podczas trzęsienia ziemi"],
            answer: "Jasne zjawisko atmosferyczne spowodowane cząstkami wiatru słonecznego"
        },
        {
            question: "Które z poniższych to największe jezioro słodkowodne na Ziemi?",
            options: ["Jezioro Wiktorii", "Jezioro Michigan", "Jezioro Bajkał", "Jezioro Tanganika"],
            answer: "Jezioro Bajkał"
        },
        {
            question: "Co to jest gejzer?",
            options: ["Duży ptak żyjący w Australii", "Rodzaj wulkanu", "Naturalne źródło wody gorącej, która okresowo wybucha parą i wodą", "Nazwa japońskiego sportu walki"],
            answer: "Naturalne źródło wody gorącej, która okresowo wybucha parą i wodą"
        },
        {
        question: "Który z poniższych jest najwyższym szczytem w Afryce?",
        options: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley", "Mount Elbrus"],
        answer: "Mount Kilimanjaro"
        },
        {
            question: "Co oznacza termin 'wanderlust'?",
            options: ["Pragnienie podróży i odkrywania nowych miejsc", "Strach przed podróżami", "Podróżowanie z przyjaciółmi", "Podróżowanie wyłącznie samolotem"],
            answer: "Pragnienie podróży i odkrywania nowych miejsc"
        },{

    question: "Która rzeka uznawana jest za świętą w hinduizmie?",
        options: ["Nil", "Amazonka", "Ganges", "Jangcy"],
        answer: "Ganges"
        }, {
            question: "Jak nazywa się zjawisko, kiedy turysta zostaje zjednoczony z naturą i staje się jednym z jej elementów?",
            options: ["Bioluminescencja", "Synteza", "Ekstaza", "Wspólnota"],
            answer: "Ekstaza"
        }, {
            question: "W którym kraju znajduje się Park Narodowy Yellowstone?",
            options: ["Kanada", "Stany Zjednoczone", "Australia", "Rosja"],
            answer: "Stany Zjednoczone"
        },{
    question: "Jak nazywa się japońska sztuka układania kwiatów, która ma głębokie znaczenie duchowe?",
        options: ["Kendo", "Karate", "Ikebana", "Shinrin-yoku"],
        answer: "Ikebana"
        },{
    question: "Która z poniższych jest największą wyspą na Pacyfiku?",
        options: ["Hawaje", "Tahiti", "Nowa Zelandia", "Borneo"],
        answer: "Nowa Zelandia"
        },{
    question: "Co oznacza termin 'biodegradacja'?",
        options: ["Proces rozkładu organicznych substancji przez mikroorganizmy", "Ochrona różnorodności biologicznej", "Zatrzymywanie procesów rozkładu", "Przemysłowe wykorzystanie zasobów naturalnych"],
        answer: "Proces rozkładu organicznych substancji przez mikroorganizmy"
        },{
    question: "Jak nazywa się długi szlak pieszy przebiegający przez Pacyfik od granicy Meksyku z USA do Kanady?",
        options: ["Pacific Trail", "Appalachian Trail", "Pacific Crest Trail", "Grand Canyon Trail"],
        answer: "Pacific Crest Trail"
        }, {
            question: "Który z poniższych parków narodowych słynie z barwnych gejzerów i gorących źródeł?",
            options: ["Yellowstone", "Yosemite", "Grand Canyon", "Rocky Mountain"],
            answer: "Yellowstone"
            // Add more questions here
        },{
            question: "Jak nazywa się japońska praktyka medytacyjna polegająca na powtarzaniu mantry?",
            options: ["Zazen", "Tao", "Zaświaty", "Załamanie"],
            answer: "Zaświaty"
        },{

            question: "Który kontynent jest znany jako 'zielone płuca Ziemi' ze względu na swoje obszary leśne?",
            options: ["Afryka", "Ameryka Południowa", "Europa", "Azja"],
            answer: "Ameryka Południowa"
        },{

            question: "Co oznacza termin 'bioluminescencja'?",
            options: ["Zjawisko świecenia się organizmów na skutek reakcji chemicznej", "Zjawisko związane z migracją ptaków", "Proces rozkładu materii organicznej", "Rekombinacja genów w organizmach"],
            answer: "Zjawisko świecenia się organizmów na skutek reakcji chemicznej"
        },{

            question: "Które z poniższych zwierząt jest symbolem ducha wolności i podróży?",
            options: ["Wilk", "Kruk", "Orzeł", "Delfin"],
            answer: "Orzeł"
        },{

            question: "Które z poniższych miejsc słynie z fenomenu zwanego 'złotym godzinkiem', kiedy światło jest idealne do robienia zdjęć?",
            options: ["Paris", "Santorini", "Banff", "Machu Picchu"],
            answer: "Paris"
        },{

            question: "Jak nazywa się japońska sztuka naprawiania stłuczonych przedmiotów, zwaną również 'sztuką pięknych złamań'?",
            options: ["Ikebana", "Kintsugi", "Haiku", "Shibari"],
            answer: "Kintsugi"
        },{

            question: "Która z poniższych planów wodnych słynie z egzotycznych wysp i raf koralowych?",
            options: ["Wyspy Karaibskie", "Wyspy Kanaryjskie", "Wyspy Galapagos", "Wyspy Eolskie"],
            answer: "Wyspy Karaibskie"
        },{

            question: "Które z poniższych zwierząt jest uważane za symbol mądrości w wielu kulturach?",
            options: ["Żyrafa", "Sowa", "Wilk", "Orzeł"],
            answer: "Sowa"
        },{

            question: "Jakie miasto jest uważane za kolebkę jogi?",
            options: ["Bangkok", "Rishikesh", "Rio de Janeiro", "Kyoto"],
            answer: "Rishikesh"
        },{

            question: "Które z poniższych drzew jest uważane za symbol życia i nieśmiertelności w niektórych kulturach?",
            options: ["Baobab", "Sekwoja", "Dąb", "Bambus"],
            answer: "Baobab"
        },{

            question: "Jakie miejsce uważane jest za święte dla trzech głównych monoteistycznych religii: judaizmu, chrześcijaństwa i islamu?",
            options: ["Mekka", "Jerozolima", "Rzym", "Kair"],
            answer: "Jerozolima"
        },{

            question: "Co to jest geotermalne źródło ciepła, które może być używane do produkcji energii elektrycznej i ogrzewania?",
            options: ["Wiatr", "Słońce", "Gejzer", "Lawa wulkaniczna"],
            answer: "Gejzer"
        },{

            question: "Jak nazywa się szlak pielgrzymkowy do Santiago de Compostela w Hiszpanii?",
            options: ["Szlak Inki", "Camino de Santiago", "Szlak Jedwabny", "The Great Trail"],
            answer: "Camino de Santiago"
        },{

            question: "Która z poniższych miejscowości znana jest z festiwalu Holi, nazywanego również 'festiwalem kolorów'?",
            options: ["Jaipur", "Kolkata", "Varanasi", "Vrindavan"],
            answer: "Vrindavan"
        },{

            question: "Co to jest 'krajobraz kulturowy'?",
            options: ["Obszar, gdzie dominuje jedna kultura", "Unikalne środowisko naturalne", "Obszar, gdzie natura łączy się z kulturą", "Sztuczny krajobraz utworzony przez człowieka"],
            answer: "Obszar, gdzie natura łączy się z kulturą"
        },{

            question: "Które z poniższych zwierząt jest uznawane za symbol szczęścia i długiego życia w kulturze chińskiej?",
            options: ["Smok", "Tygrys", "Żyrafa", "Żółw"],
            answer: "Żółw"
        },{

            question: "Co oznacza termin 'ekosystem'?",
            options: ["Grupa organizmów zamieszkujących konkretny obszar", "Wszystkie żyjące organizmy na Ziemi", "Wymiana materii i energii między organizmami a ich środowiskiem", "Człowiek zajmujący się badaniem ekologii"],
            answer: "Wymiana materii i energii między organizmami a ich środowiskiem"
        },{

            question: "Jak nazywa się japońska sztuka łucznictwa, która ma głębokie znaczenie duchowe?",
            options: ["Kendo", "Karate", "Kyudo", "Sumo"],
            answer: "Kyudo"
        },{

            question: "Która z poniższych planet ma największą ilość zróżnicowanej biosfery?",
            options: ["Mars", "Ziemia", "Wenus", "Jowisz"],
            answer: "Ziemia"
        },{

            question: "Które z poniższych miast słynie z kultury kawiarnianej i kanałów?",
            options: ["Paryż", "Amsterdam", "Berlin", "Wiedeń"],
            answer: "Amsterdam"
        }
    ];

    const handleOptionSelect = (option:string) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            window.location.replace("http://localhost:3000/trzecia_zagadka");
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption('');
        setScore(0);
        setShowResult(false);
    };

    return (
        <div className="max-w-md mx-auto my-8">
            {showResult ? (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2 className="mb-4">Question {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <ul className="mt-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <li key={index} className={`text-black my-2 p-2 rounded cursor-pointer ${
                                option === selectedOption
                                    ? 'bg-blue-200' // Change this to the color you want for selected option
                                    : 'bg-gray-100 hover:bg-gray-200'
                            }`} onClick={() => handleOptionSelect(option)}>{option}</li>
                        ))}
                    </ul>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextQuestion} disabled={!selectedOption}>Next</button>
                </div>
            )}
        </div>
    );
};

