import React from "react";
import PropTypes from "prop-types";

type ShowWeightsProps = {
  weight: number;
  isLbs: boolean;
};

function ShowWeights({ weight, isLbs }: ShowWeightsProps) {
  if (!weight) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">Weight</h2>
      {weight && (
        <p className="text-2xl font-bold text-white">
          {weight}
          {weight && isLbs ? " lbs" : " kg"}
        </p>
      )}
    </div>
  );
}

export default ShowWeights;
