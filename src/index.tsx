import React from "react";
import ReactDOM from "react-dom";
import { ExerciseOne } from "./components/Exercise1";
import { ExerciseTen } from "./components/Exercise10";
import { ExerciseEleven } from "./components/Exercise11";
import { ExerciseTwo } from "./components/Exercise2";
import {
  ExerciseThreeWithClass,
  ExerciseThreeWithFunction,
} from "./components/Exercise3";
import { ExerciseFour } from "./components/Exercise4";
import { ExerciseFive } from "./components/Exercise5";
import { ExerciseSix } from "./components/Exercise6";
import { ExerciseSeven } from "./components/Exercise7";
import { ExerciseEigth } from "./components/Exercise8";
import { ExerciseNine } from "./components/Exercise9";

ReactDOM.render(
  <React.StrictMode>
    {/* <ExerciseOne /> */}
    {/* <ExerciseTwo numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} /> */}
    {/* <ExerciseThreeWithClass /> */}
    {/* <ExerciseThreeWithFunction /> */}
    {/* <ExerciseFour initialValueCounter={3} /> */}
    {/* <ExerciseFive /> */}
    {/* <ExerciseSix /> */}
    {/* <ExerciseSeven /> */}
    {/* <ExerciseEigth /> */}
    {/* <ExerciseNine /> */}
    {/* <ExerciseTen /> */}
    <ExerciseEleven />
  </React.StrictMode>,
  document.getElementById("root")
);
