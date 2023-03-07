import { Weights } from "~/components/ShowWeights";

export const CalculateWeightLbs = (
  weights: Weights[],
  weightToCalc: number
) => {
  return weights.map(({ plate, pairs }) => {
    if (weightToCalc <= 0 || !pairs) return;
    let plateCount = 0;

    for (let i = 0; i < pairs; i++) {
      if (weightToCalc >= plate * 2) {
        weightToCalc -= plate * 2;
        plateCount++;
      }
    }

    if (plateCount === 0) return null;
    return { plate, count: plateCount };
  });
};
