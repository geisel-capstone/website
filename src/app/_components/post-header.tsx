import Avatar from "./avatar";
import CoverImage from "./cover-image";
import { PostTitle } from "@/app/_components/post-title";
import DateFormatter from "@/app/_components/date-formatter";

type Props = {
  title: string;
  coverImage: string;
  author: string;
  date?: string;
};

export function PostHeader({ title, coverImage, author, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author} />
        </div>
        {date && <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>}
      </div>
    </>
  );
}
