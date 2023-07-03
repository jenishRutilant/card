import React, { useState } from "react";
import { FaChevronRight, FaAngleDoubleRight } from "react-icons/fa";
import "./Card.css";

const Card = () => {

    const sections = [
        { id: 1, title: "Section1" },
        { id: 2, title: "Section2" },
        { id: 3, title: "Section3" },
        { id: 4, title: "Section4" },
        { id: 5, title: "Section5" },
        { id: 6, title: "Section6" },
        { id: 7, title: "Section7" },
        { id: 8, title: "Section8" },
    ]

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const numbers = "1234567890";

    const [cards, setCards] = useState([{ inputValue1: "", inputValue2: "" }]);
    console.log(cards);

    const [cardCount, setCardCount] = useState(1); // Updated cardCount value

    const handleInputChange1 = (event, cardIndex) => {
        const value = event.target.value;
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[cardIndex] = {
                ...updatedCards[cardIndex],
                inputValue1: value,
            };
            return updatedCards;
        });
    };

    const handleInputChange2 = (event, cardIndex) => {
        const value = event.target.value;
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[cardIndex] = {
                ...updatedCards[cardIndex],
                inputValue2: value,
            };
            return updatedCards;
        });
    };

    const handleKeyClick1 = (key, cardIndex) => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];

            if (!updatedCards[cardIndex]) {
                updatedCards[cardIndex] = { inputValue1: '' };
            }

            updatedCards[cardIndex] = {
                ...updatedCards[cardIndex],
                inputValue1: (updatedCards[cardIndex].inputValue1 || '') + key,
            };

            return updatedCards;
        });
    };

    const handleKeyClick2 = (key, cardIndex) => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];

            if (!updatedCards[cardIndex]) {
                updatedCards[cardIndex] = { inputValue2: '' };
            }

            updatedCards[cardIndex] = {
                ...updatedCards[cardIndex],
                inputValue2: (updatedCards[cardIndex].inputValue2 || '') + key,
            };

            return updatedCards;
        });
    };

    const handleNextCard = (cardIndex) => {
        const inputs = document.querySelectorAll(".main_card input");
        let isValid = true;

        inputs.forEach((input, index) => {
            if (index > cardIndex && input.value.trim() === "") {
                isValid = false;
                return;
            }
            input.disabled = index !== cardIndex;
        });

        if (isValid) {
            setCardCount((prevCount) => prevCount + 1);
            setCards((prevCards) => [
                ...prevCards,
                { inputValue1: "", inputValue2: "" },
            ]);
        }
    };

    const handleSubmit = () => {
        console.log("Form submitted!");
    };

    const renderCards = () => {
        return Array.from({ length: cardCount }, (_, i) => {
            const card = cards[i] || { inputValue1: "", inputValue2: "" };
            const isLastCard = i === cardCount - 1;
            console.log(i);
            const isSubmitButtonVisible = i > 1 && isLastCard;
            console.log(isSubmitButtonVisible);
            const isDisabled =
                i > 0 && (!cards[i - 1]?.inputValue1 || !cards[i - 1]?.inputValue2);
            return (
                <div className="section" key={i}>
                    <div className="in1">
                        <h3 className="s1">{sections[i].title}</h3>
                        <FaChevronRight />
                    </div>
                    <div className="main_card">
                        <input
                            className="i1"
                            type="text"
                            placeholder="Enter your name"
                            onChange={(event) => handleInputChange1(event, i)}
                            value={card.inputValue1}
                            disabled={isDisabled}
                            maxlength="200"
                        />
                        <div>
                            {alphabet.split("").map((character) => (
                                <button
                                    key={character}
                                    className="key"
                                    onClick={() => handleKeyClick1(character, i)}
                                    disabled={isDisabled}
                                >
                                    {character}
                                </button>
                            ))}
                        </div>
                        <input
                            className="i2"
                            type="number"
                            placeholder="Mobile number"
                            value={card.inputValue2}
                            onChange={(event) => handleInputChange2(event, i)}
                            disabled={isDisabled}
                        />
                        <div>
                            {numbers.split("").map((number) => (
                                <button
                                    key={number}
                                    className="key"
                                    onClick={() => handleKeyClick2(number, i)}
                                    disabled={isDisabled}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="licon">
                        {isSubmitButtonVisible ? (
                            <button
                                id="submitBtn"
                                disabled={!card.inputValue1 || !card.inputValue2}
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    handleNextCard();
                                    handleSubmit();
                                }}
                                disabled={!card.inputValue1 || !card.inputValue2 || isDisabled}
                            >
                                <FaAngleDoubleRight />
                            </button>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <section className="main_section">
                <h1>Page One</h1>
                <div className="main_part">{renderCards()}</div>
            </section>
        </>
    );
};
export default Card;