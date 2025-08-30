import React from "react";
import { ChargeItemProps } from "@/app/(dashborad)/dashboard/charges/types/charge-item.types";

const ChargeItem: React.FC<ChargeItemProps> = ({ title }) => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <label className="block">
        <input type="checkbox" className="peer hidden" />
        <div className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded">
          Toggle
        </div>

        <div className="overflow-hidden transition-all duration-500 ease-in-out h-0 peer-checked:h-[280px]">
          <div className="p-4 bg-gray-100">
            <p>{title}</p>
          </div>
        </div>
      </label>
    </div>
  );
};
export default ChargeItem;
