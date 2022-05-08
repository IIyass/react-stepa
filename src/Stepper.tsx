import React from "react";
import styled from "styled-components";
import { device } from "./device";

const colors = {
  pending: "#e9e9e9",
  completed: "#4BB543",
  progress: "#2178FF",
};

enum StepState {
  progress = "PROGRESS",
  completed = "COMPLETED",
  pending = "PENDING",
}

interface StyledStepper {
  activeStep: number;
  verticalOrientation?: boolean;
}

interface StyledStep {
  state: StepState;
  display: boolean;
  verticalOrientation?: boolean;
  customStyle?: CustomStyle;
}

interface CustomStyle {
  completed: string;
  pending: string;
  progress: string;
}

interface IStepperProps {
  steps: { label: string; description: string }[];
  verticalOrientation?: boolean;
  customStyle?: CustomStyle;
  activeStep: number;
}

export const Stepper = ({
  steps,
  customStyle,
  verticalOrientation,
  activeStep,
}: IStepperProps) => {
  return (
    <StyledStepper
      activeStep={activeStep}
      verticalOrientation={verticalOrientation}
    >
      {steps.map((step, index) => {
        return (
          <StyledStep
            key={index}
            state={
              activeStep > index
                ? StepState.completed
                : activeStep === index
                ? StepState.pending
                : StepState.progress
            }
            display={steps.length !== index + 1}
            verticalOrientation={verticalOrientation}
            customStyle={customStyle}
          >
            <div className="content">
              <div className="pointer">{index + 1}</div>
              <div className="description">
                <h1>{step.label}</h1>
                <p>{step.description}</p>
              </div>
            </div>
            <hr className="bridge" />
          </StyledStep>
        );
      })}
    </StyledStepper>
  );
};

const StyledStepper = styled.div<StyledStepper>`
  display: flex;
  width: 100%;
  flex-direction: ${({ verticalOrientation }) =>
    verticalOrientation ? "column" : "row"};
`;

const StyledStep = styled.div<StyledStep>`
  width: 100%;
  display: flex;
  flex-direction: ${({ verticalOrientation }) =>
    verticalOrientation ? "column" : "row"};
  position: relative;
  flex: 1;

  .content {
    display: flex;
    flex-direction: ${({ verticalOrientation }) =>
      verticalOrientation ? "row" : "column"};
    align-items: ${({ verticalOrientation }) =>
      verticalOrientation ? "none" : "center"};
    flex: 1;

    .pointer {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: #fff;
      width: 30px;
      height: 30px;
      z-index: 2;
      background-color: ${({ state, customStyle }) =>
        state === StepState.progress
          ? customStyle?.pending || colors.pending
          : state === StepState.completed
          ? customStyle?.completed || colors.completed
          : customStyle?.progress || colors.progress};
    }

    .description {
      text-align: center;
      word-break: break-word;
      flex: 1;

      h1 {
        font-size: 16px;
        margin-bottom: 0px;
      }

      p {
        font-size: 14px;
        padding: 10px;
        margin-top: 0px;
      }
      @media ${device.tablet} {
        h1 {
          font-size: 12px;
        }

        p {
          font-size: px;
          padding: 8px;
        }
      }
    }
  }

  .bridge {
    flex: 1;
    width: ${({ verticalOrientation }) =>
      verticalOrientation ? "1px" : "85%"};
    height: ${({ verticalOrientation }) =>
      verticalOrientation ? "100%" : "1px"};
    left: ${({ verticalOrientation }) =>
      verticalOrientation ? "15px" : "57.5%"};
    top: ${({ verticalOrientation }) => (verticalOrientation ? "0px" : "13px")};
    margin: 0px;

    border: none;
    display: ${({ display }) => (display ? "block" : "none")};
    position: absolute;
    background-color: ${({ state, customStyle }) =>
      state === StepState.progress
        ? customStyle?.pending || colors.pending
        : state === StepState.completed
        ? customStyle?.completed || colors.completed
        : customStyle?.progress || colors.progress};
  }
`;
