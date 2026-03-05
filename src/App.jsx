import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function App() {

    const cards = [
        {
            question: "What is React?",
            answer: "A JavaScript library for building user interfaces"
        },
        {
            question: "What is useState?",
            answer: "A React hook for managing state"
        },
        {
            question: "What is JSX?",
            answer: "JavaScript syntax extension for writing UI"
        }
    ];

    const [showAnswer, setShowAnswer] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowAnswer(false);
        }
    };

    const nextCard = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false);
        }
    };

    const progressPercentage = Math.round(((currentIndex + 1) / cards.length) * 100);

    return (
        <div className="app flex flex-col gap-2 px-10 py-20 max-w-200">

            <h1 className="text-2xl font-bold">Flash Cards</h1>

            {/* Progress Bar */}
            <div className="progress-bar flex gap-2 justify-between items-center px-2 py-1 border rounded-md w-200">

                <div className="progress flex gap-2 justify-start items-center w-full">

                    <div
                        className="rect min-h-10 bg-gray-500 rounded-md transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    />

                    <p>{progressPercentage}%</p>

                </div>

                <div className="q-right whitespace-nowrap">
                    {currentIndex + 1} of {cards.length}
                </div>

            </div>

            {/* Flashcard */}
            <div className="flashcard flex flex-col gap-2 px-2 py-2 border rounded-md w-200 perspective-[1000px]">

                <div
                    className={`relative min-h-50 transition-transform duration-500 transform-style-preserve-3d
          ${showAnswer ? "rotate-x-180" : ""}`}
                >

                    {/* FRONT */}
                    <div className="absolute inset-0 flex justify-center items-center bg-gray-200 rounded-md backface-hidden">

                        <h2 className="text-center">
                            {cards[currentIndex].question}
                        </h2>

                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 flex justify-center items-center bg-gray-200 rounded-md rotate-x-180 backface-hidden">

                        <h2 className="text-center">
                            {cards[currentIndex].answer}
                        </h2>

                    </div>

                </div>

                {/* Navigation */}
                <div className="navs flex gap-2 justify-between items-center px-2 py-1 bg-gray-200 rounded-md">

                    <button
                        className="cursor-pointer flex items-center gap-1"
                        onClick={prevCard}
                    >
                        <FiChevronLeft /> Previous
                    </button>

                    <button
                        className="cursor-pointer"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        {showAnswer ? "Show Question" : "Show Answer"}
                    </button>

                    <button
                        className="cursor-pointer flex items-center gap-1"
                        onClick={nextCard}
                    >
                        Next <FiChevronRight />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default App;