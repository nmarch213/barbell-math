import React from "react";
import { CalculateWeightLbs } from "~/utils/CalcuateWeightLbs";

type ShowWeightsProps = {
  weight: number;
  isLbs: boolean;
};

export type Weights = {
  plate: number;
  pairs: number;
};

function ShowWeights({ weight, isLbs }: ShowWeightsProps) {
  const [barbell, setBarbell] = React.useState<45 | 35>(45);
  if (!weight) return null;

  const onBarbellChange = () => {
    if (barbell === 45) {
      setBarbell(35);
    } else {
      setBarbell(45);
    }
  };

  const weights = [
    { plate: 45, pairs: 2 },
    { plate: 35, pairs: 1 },
    { plate: 25, pairs: 1 },
    { plate: 10, pairs: 1 },
    { plate: 5, pairs: 1 },
    { plate: 2.5, pairs: 1 },
    { plate: 1.25, pairs: 1 },
  ];

  const weightToCalc = weight - barbell;

  const plates = CalculateWeightLbs(weights, weightToCalc);

  return (
    <div>
      <button
        className="rounded-md border-2 border-white p-2 text-2xl font-bold text-white"
        onClick={() => onBarbellChange()}
      >
        Swap Barbell
      </button>
      <div className="flex flex-row space-x-2">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">Weight</h2>
          {weight && (
            <p className="text-2xl font-bold text-white">
              {weight}
              {weight && isLbs ? " lbs" : " kg"}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">Barbell</h2>
          <p className="text-2xl font-bold text-white">
            {barbell}
            {isLbs ? " lbs" : " kg"}
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white">Plates</h2>
      {plates.map((plate, index) => {
        if (plate) {
          return (
            <p key={index} className="text-2xl font-bold text-white">
              {plate.count} x {plate.plate}
              {isLbs ? " lbs" : " kg"}
            </p>
          );
        }
      })}
    </div>
  );
}

export default ShowWeights;
