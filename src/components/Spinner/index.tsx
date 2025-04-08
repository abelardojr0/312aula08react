// src/components/Spinner.tsx

import React from "react";
import { CircleLoader } from "react-spinners";

interface SpinnerProps {
  loading: boolean;
  size?: number; // O tamanho do spinner
  color?: string; // A cor do spinner
}

const Spinner: React.FC<SpinnerProps> = ({
  loading,
  size = 200,
  color = "#36d7b7",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Centraliza o spinner na tela
      }}
    >
      <CircleLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default Spinner;
