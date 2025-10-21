import { RatingProps } from "@/app/_components/rating/rating.types";
import { IconStar } from "@/app/_components/icons/icons";
import { Size } from "@/app/_components/types/size.type";
const sizeClasses: Record<Size, number> = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 30,
};

export const Rating: React.FC<RatingProps> = ({
  rate,
  className,
  size = "normal",
  color = "warning",
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((index) => (
        <IconStar
          key={`star-${index}}`}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          fill={rate >= index ? `var(--color-${color})` : ""}
          color={rate >= index ? `var(--color-${color})` : "currentColor"}
        />
      ))}
    </div>
  );
};
