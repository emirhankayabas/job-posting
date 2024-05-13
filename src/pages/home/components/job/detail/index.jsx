import useJob from "~/hooks/useJob";

import JobDetailHeader from "./JobDetailHeader";
import JobDetailContent from "./JobDetailContent";
import JobDescription from "./JobDescription";
import Divider from "~/components/Divider";

export default function JobDetail() {
    const { jobDetails } = useJob();

    return (
        <div className="w-7/12 h-full max-h-full min-h-full sticky top-0 right-0">
            {jobDetails._id && (
                <div className="job-detail my-4 border border-neutral-700 rounded-md overflow-hidden">
                    <JobDetailHeader />

                    <Divider direction="row" />

                    <JobDetailContent />
                    
                    <Divider direction="row" />

                    <JobDescription />
                </div>
            )}
        </div>
    )
}
