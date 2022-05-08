import * as React from "react";

const useStepper = (initialStep: number) => {
  const [step, setStep] = React.useState(initialStep);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  return { nextStep, previousStep, step };
};

export { useStepper };
