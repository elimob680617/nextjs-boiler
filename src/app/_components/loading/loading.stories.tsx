import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const LoadingSpinnerColors: Story = {
  render: () => (
    <>
      <Loading type="spinner" color="default" />
      <Loading type="spinner" color="primary" />
      <Loading type="spinner" color="secondary" />
      <Loading type="spinner" color="info" />
      <Loading type="spinner" color="success" />
      <Loading type="spinner" color="warning" />
      <Loading type="spinner" color="error" />
    </>
  ),
};

export const LoadingRingColors: Story = {
  render: () => (
    <>
      <Loading type="ring" color="default" />
      <Loading type="ring" color="primary" />
      <Loading type="ring" color="secondary" />
      <Loading type="ring" color="info" />
      <Loading type="ring" color="success" />
      <Loading type="ring" color="warning" />
      <Loading type="ring" color="error" />
    </>
  ),
};

export const LoadingSpinner: Story = {
  render: () => (
    <>
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </>
  ),
};

export const LoadingRing: Story = {
  render: () => (
    <>
      <Loading size="xs" type="ring" />
      <Loading size="sm" type="ring" />
      <Loading size="md" type="ring" />
      <Loading size="lg" type="ring" />
    </>
  ),
};
