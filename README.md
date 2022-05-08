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

````jsx
| Name                 | Type                     | Default            | Description
| ---------------------| -------------------------| -------------------| -----------------------|
| steps                | array of {label: string, |                    | Steps content.         |
|                      |  description: string}    |                    |                        |
| verticalOrientation  | boolean                  | false              | Direction of Steps.    |
|                      |                          |                    | vertical or horizantal.|
| activeStep           | number                   | 0                  | Index of current Step. |
| customStyle          | {completed: string,      |{completed:#4BB543, | Steps style.           |
|                      | pending: string,         | pending:#e9e9e9,   |                        |
|                      | progress: string}        | progress:#2178FF}  |                        |

```
````
