import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

const Section: React.FC<SectionProps> = ({ className, ...props }) => {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props} />
  );
};

export default Section;





