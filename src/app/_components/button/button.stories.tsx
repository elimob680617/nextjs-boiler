import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
  render: () => (
    <>
      <Button variant="filled">Default</Button>
      <Button color="primary" variant="filled">
        Primary
      </Button>
      <Button color="secondary" variant="filled">
        Secondary
      </Button>
      <Button color="warning" variant="filled">
        Warning
      </Button>
      <Button color="info" variant="filled">
        Info
      </Button>
      <Button color="error" variant="filled">
        Error
      </Button>
      <Button color="success" variant="filled">
        Success
      </Button>
      <Button variant="outline">Outline</Button>
      <Button isLink={true}>Link</Button>
    </>
  ),
};

export const OutlineStateButtons: Story = {
  render: () => (
    <>
      <Button variant="outline">Default</Button>
      <Button color="primary" variant="outline">
        Primary
      </Button>
      <Button color="secondary" variant="outline">
        Secondary
      </Button>
      <Button color="warning" variant="outline">
        Warning
      </Button>
      <Button color="info" variant="outline">
        Info
      </Button>
      <Button color="error" variant="outline">
        Error
      </Button>
      <Button color="success" variant="outline">
        Success
      </Button>
    </>
  ),
};

export const ButtonsSizes: Story = {
  render: () => (
    <>
      <Button size="xs">Xsmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  ),
};

export const FullButton: Story = {
  render: () => (
    <>
      <Button shape="full">Full Button</Button>
    </>
  ),
};

export const WideButton: Story = {
  render: () => (
    <>
      <Button shape="wide">Wide Button</Button>
    </>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <>
      <Button variant="filled" disabled>
        Disabled Button
      </Button>
    </>
  ),
};

export const IconButton: Story = {
  render: () => (
    <>
      <Button variant="filled">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
      </Button>
      <Button variant="filled">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </>
  ),
};

export const SqureButtons: Story = {
  render: () => (
    <>
      <Button size="xs" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="sm" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="md" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="lg" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
    </>
  ),
};

export const ButtonWithLoading: Story = {
  render: () => (
    <>
      <Button color="default" isLoading={true} loadingText="Loading"></Button>
      <Button
        color="default"
        isLoading={true}
        loadingType={"ring"}
        loadingText="Loading"
      ></Button>
      <Button color="primary" isLoading={true} loadingText="Loading"></Button>
      <Button
        color="info"
        isOutline
        isLoading={true}
        loadingType={"ring"}
        loadingText="Loading"
      ></Button>
    </>
  ),
};
