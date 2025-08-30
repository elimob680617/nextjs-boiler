import { Charge } from "@/types/charge.interface";
import { CourseSummary } from "@/types/course-summary.interface";

export type ChargeItemProps = Partial<CourseSummary>;

export type ChargeListProps = {
  charges: Charge[];
};
