import { Button } from "@/components/ui/button";

export function CustomButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Button
      className={`bg-navy-blue text-white font-crimson font-bold text-md shadow-brand-yellow w-fit ${className}`}
    >
      {text}
    </Button>
  );
}
