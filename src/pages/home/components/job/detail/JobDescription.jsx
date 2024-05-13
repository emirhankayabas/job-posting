import Title from "~/components/Title";
import useJob from "~/hooks/useJob";

export default function JobDescription() {
    const { jobDetails } = useJob();

    return (
        <div className="p-4 flex flex-col gap-y-4">
            <Title variant="h4">Tam İş Tanımı</Title>
            <div className="overflow-auto" dangerouslySetInnerHTML={{ __html: jobDetails.position_description }}></div>
        </div>
    )
}
