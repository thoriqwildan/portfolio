import { Skeleton } from "@/components/ui/skeleton"

export function AboutSkeleton() {
    return (
        <div>
            <Skeleton className="w-full h-48 md:h-80 rounded-lg"/>
        </div>
    )
}

export function ProjectSkeleton() {
    return (
        <div>
            <Skeleton className="w-full h-44 rounded-lg"></Skeleton>
        </div>
    )
}