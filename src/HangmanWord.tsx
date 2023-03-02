import "./HangmanWord.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="words">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            className={`
              ${
                guessedLetters.includes(letter) || reveal ? "visible" : "hidden"
              }
              ${
                !guessedLetters.includes(letter) && reveal ? " red" : " black"
              }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
