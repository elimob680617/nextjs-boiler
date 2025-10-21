import { ChargeAsideProps } from "@/app/(dashborad)/dashboard/(charges)/charges/[slug]/_components/charge-aside/charge-aside.types";
import { Rating } from "@/app/_components/rating";
import {
  IconArrowLeft,
  IconArrowLeftFill,
  IconClock,
  IconDoc,
  IconDownload,
  IconLevel,
  IconRecord,
  IconStudents,
} from "@/app/_components/icons/icons";
import { Progress } from "@/app/_components/progress";
import { CourseLevel } from "@/enums/course-level.enum";
import { Color } from "@/app/_components/types/color.type";
import { Button } from "@/app/_components/button";

const levelProgress: Record<CourseLevel, Color> = {
  0: "warning",
  1: "info",
  2: "success",
};

const levelColor: Record<CourseLevel, number> = {
  0: 25,
  1: 50,
  2: 100,
};

export const ChargeAside: React.FC<ChargeAsideProps> = ({
  basePrice,
  numberOfLectures,
  numOfStudents,
  duration,
  recordStatus,
  isDownloadable,
  averageReviewRating,
  level,
  numOfReviews,
  authorName,
  authorSpecialty,
  profileImageId,
  levelNumber,
}) => {
  return (
    <aside className="flex flex-col gap-5 sticky top-5">
      <div className="flex items-center justify-between">
        {/*Price*/}
        <Rating rate={averageReviewRating} />
      </div>
      <div className="flex border border-rounded dark:border-base-content/10 mb-4">
        <div className="flex-1 border-1 dark:border-base-content/10 p-3 flex">
          <IconStudents width={22} />
          <span className="font-bold">{numOfStudents}</span>
          شرکت کننده
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <IconLevel width={22} />
            {level}
          </div>
          <Progress
            size="xs"
            value={levelProgress[levelNumber]}
            color={levelColor[levelNumber]}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconDoc width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">تعداد مباحث :</span>
          <span className="dark:text-info">{numberOfLectures}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconClock width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">مدت آموزش :</span>
          <span className="dark:text-info">{duration}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconRecord width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">وضعیت ضبط :</span>
          <span className="dark:text-info">{recordStatus}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconDownload width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">قابلیت دانلود :</span>
          <span className="dark:text-info">
            {isDownloadable ? "دارد" : "ندارد"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <IconDownload width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">تعداد دیدگاهها :</span>
          <span className="dark:text-info">{numOfReviews}</span>
        </div>
      </div>

      <div>Enrollment in course component</div>

      <div className="border-t border-dashed dark:border-base-content/20 my-5">
        <div>
          <span className="font-semibold">{authorName}</span>
          <p className="font-semibold darl: text-base-content/60">
            {authorSpecialty}
          </p>
        </div>
      </div>
      <Button
        color="default"
        shape="full"
        className="font-semibold"
        animatedIcon={true}
      >
        مشاهده پروفایل
        <IconArrowLeftFill fill="currentColor" />
      </Button>
    </aside>
  );
};
