import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  showDivider?: boolean;
  className?: string;
}

export default memo(function SectionHeading({
  icon: Icon,
  title,
  showDivider = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className={`flex items-center gap-3 ${showDivider ? "mb-3" : "mb-10"}`}>
        <Icon className={`${showDivider ? "w-7 h-7" : "w-6 h-6"} text-gold`} />
        <h2 className="text-2xl font-serif font-bold text-foreground break-words">{title}</h2>
      </div>
      {showDivider && <div className="w-10 h-px bg-gold/30 mb-4" />}
    </div>
  );
});
