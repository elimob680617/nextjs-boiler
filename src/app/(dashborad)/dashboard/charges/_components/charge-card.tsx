import React from "react";
import { ChargeSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/_components/badge";

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
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div>
          <Badge color="warning">{duration}</Badge>
          {basePrice}
        </div>
      </div>
      <Link href={`/course/${slug}`} className="card-footer justify-center">
        مشاهده جزئیات هزینه
      </Link>
    </div>
  );
};
export default ChargeCard;
