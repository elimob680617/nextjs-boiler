import { ChargeSummary } from "@/types/course-summary.interface";
import ChargeCard from "@/app/(dashborad)/dashboard/(charges)/_components/charge-card";
import React from "react";

type ChargeListProps = {
  charges: ChargeSummary[];
};

export const ChargeCardList: React.FC<ChargeListProps> = ({ charges }) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-3">
      {charges.map((charge) => (
        <ChargeCard key={`charge-${charge.id}`} {...charge} />
      ))}
    </div>
  );
};
