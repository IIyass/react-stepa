# 🚀 Installation

```jsx
  npm install react-stepa --save
```

# ✨ Usage

```jsx
import { Stepper, useStepper } from "react-stepper";

const App = () => {
  const initialStep = 0;
  const { nextStep, previousStep, step } = useStepper(initialStep);

  return (
    <Stepper
      steps={[
        {
          label: "Step 1",
          description: "Loremur adipiscing elit, sed do eiusmod tem",
        },
        {
          label: "Step 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et is nostru",
        },
        {
          label: "Step 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnminim veniam, quis nostru",
        },
      ]}
      activeStep={step}
    />
  );
};
```

# 📌 API

| Name                | Type                                                   | Default                                              | Description                                 |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------- |
| steps               | array of {label: string,description: string}           | Steps content.                                       |
| verticalOrientation | boolean                                                | false                                                | Direction of Steps. Vertical or horizantal. |
| activeStep          | number                                                 | 0                                                    | Index of current Step.                      |
| customStyle         | {completed: string, pending: string, progress: string} | {completed:#4BB543,pending:#e9e9e9,progress:#2178FF} | Steps style.                                |

```

```
