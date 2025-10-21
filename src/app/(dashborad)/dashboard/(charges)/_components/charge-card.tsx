import React from "react";
import { ChargeSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/_components/badge";
import { IconArrowLeftFill, IconClock } from "@/app/_components/icons/icons";

export type ChargeCardProps = ChargeSummary & {};

const ChargeCard: React.FC<ChargeCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: ChargeCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-bold dark:text-info px-3 py-2">
        <Badge color="info">{recordStatus}</Badge>
        <Badge color="secondary"> {level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/dashboard/charges/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div>
          <Badge color="warning">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>
          {basePrice}
        </div>
      </div>
      <Link
        href={`/dashboard/charges/${slug}`}
        className="card-footer justify-center"
      >
        مشاهده جزئیات هزینه
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  );
};
export default ChargeCard;
