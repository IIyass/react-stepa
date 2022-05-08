import * as React from "react";

const useStepper = (initialStep?: number) => {
  const [step, setStep] = React.useState(initialStep || 0);

  const next = () => {
    setStep(step + 1);
  };

  const previous = () => {
    setStep(step - 1);
  };

  return { next, previous, step };
};

export { useStepper };
