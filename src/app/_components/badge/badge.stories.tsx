import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/app/_components/badge/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  args: {
    color: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BrandColors: Story = {
  render: () => (
    <>
      <Badge>Default</Badge>
      <Badge color="default">Neutral</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
    </>
  ),
};

export const StateColors: Story = {
  render: () => (
    <>
      <Badge color="info">Info</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="error">Error</Badge>
    </>
  ),
};

export const BadgeSizes: Story = {
  render: () => (
    <>
      <Badge color="primary" size="xs">
        Xsmall
      </Badge>
      <Badge color="primary" size="sm">
        Small
      </Badge>
      <Badge color="primary" size="md">
        Medium
      </Badge>
      <Badge color="primary" size="lg">
        Large
      </Badge>
    </>
  ),
};
