import React from "react";
import { Loading } from "@/app/_components/loading";

const HomePage = () => {
  return (
    <div className="flex justify-center text-primary-content bg-primary">
      <Loading type="ring" size="xs" />
      <Loading type="ring" size="sm" />
      <Loading type="ring" size="md" />
      <Loading type="ring" size="lg" />
      <Loading type="spinner" size="xs" />
      <Loading type="spinner" size="sm" />
      <Loading type="spinner" size="md" />
      <Loading type="spinner" size="lg" />
      <h6>Elham text-xs</h6>
      <div className="text-xs">Elham test xs</div>
    </div>
  );
};
export default HomePage;
