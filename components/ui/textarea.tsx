import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <>
      <style jsx>{`
        @keyframes border-blink {
          0%, 100% {
            border-color: rgb(var(--color-primary));
            box-shadow: 0 0 8px rgba(var(--color-primary), 0.3);
          }
          50% {
            border-color: rgb(var(--color-primary));
            box-shadow: 0 0 16px rgba(var(--color-primary), 0.8);
          }
        }

        .textarea-focus-animate:focus-visible {
          animation: border-blink 1.5s ease-in-out infinite;
        }
      `}</style>
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-primary bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm textarea-focus-animate",
          className
        )}
        ref={ref}
        {...props}
      />
    </>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
