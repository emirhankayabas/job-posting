import JobDetail from "./detail";
import JobList from "./list";

export default function Job() {
    return (
        <div className="flex gap-x-4 max-w-5xl mx-auto">
            <JobList />
            <JobDetail />
        </div>
    )
}
