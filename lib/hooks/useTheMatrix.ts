import { RANDOM_BINARY_STRING } from "lib/constant";
import { useEffect, useState } from "react";

export function useTheMatrix() {
  const [matrix, setMatrix] = useState(RANDOM_BINARY_STRING);

  useEffect(() => {
    const matrixInterval = setInterval(() => {
      setMatrix(matrix => matrix.substring(1) + matrix.substring(0, 1));
    }, 300);

    return () => clearInterval(matrixInterval);
  }, []);

  return matrix;
}
