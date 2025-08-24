"use client";

import React from "react";
import Link from "next/link";
import { Loading } from "@/app/_components/loading";
import { ButtonProps, styles } from "@/app/_components/button/button.types";

export const Button: React.FC<ButtonProps> = ({
  color,
  variant,
  children,
  className,
  icon,
  iconDir = "start",
  loading,
  size,
  href,
  disabled,
  iconSize = 16,
  isDownload = false,
  linkClassName,
  ...rest
}) => {
  const { base } = styles({
    color,
    variant,
    loading,
    size,
    disabled,
  });

  const renderedContent = (
    <button className={base({ className })} {...rest}>
      {icon &&
        !loading &&
        iconDir === "start" &&
        React.cloneElement(icon as React.ReactSVGElement, {
          width: iconSize,
          height: iconSize,
          style: { marginTop: "-4px" },
        })}
      {loading && <Loading size="xs" color="default" />}
      {loading ? "در حال ارسال درخواست ..." : children}
      {icon &&
        iconDir === "end" &&
        React.cloneElement(icon as React.ReactSVGElement, {
          width: iconSize,
          height: iconSize,
          style: { marginTop: "-4px" },
        })}
    </button>
  );

  if (href) {
    return (
      <Link
        className={linkClassName}
        href={href}
        target={isDownload ? "_blank" : "_self"}
      >
        {renderedContent}
      </Link>
    );
  }
  return renderedContent;
};
