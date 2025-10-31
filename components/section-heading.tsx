import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  tag: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ tag, title, description, className, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">{tag}</div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
