import useAuth from "~/hooks/useAuth";
import useJob from "~/hooks/useJob";
import { getNewApplication } from "~/services";

import ProfilePicture from "~/utils/ProfilePicture";
import Button from "~/components/Form/Button";
import Title from "~/components/Title";
import Text from "~/components/Text";

import { IoBookmarkOutline } from "react-icons/io5";
import { MdBlockFlipped, } from "react-icons/md";

export default function JobDetailHeader() {
    const { user, update } = useAuth();
    const { jobDetails } = useJob();

    const handleApply = (job) => {
        const data = {
            user_id: user.user_id,
            post_id: job._id,
            post_detail: {
                position_name: job.position_name,
                company_name: job.company_name,
                position_location: job.position_location,
                position_types: job.position_types,
            }
        }

        getNewApplication(data).then((response) => {
            if (response.status === "OK") {
                update({ applications: [...user.applications || [], response.data._id] });
            }
        })
    }

    const userHasApplied = () => {
        return jobDetails.applications == user?.user_id;
    }

    return (
        <header className="flex flex-col gap-y-2 p-4">
            <ProfilePicture size="large" name={jobDetails.company_name} />

            <Title variant="h4">{jobDetails.position_name}</Title>

            <div>
                <Text>{jobDetails.company_name}</Text>
                <Text>{jobDetails.position_location}</Text>
            </div>

            <div className="flex items-center gap-x-2 mt-2">
                <Button
                    redirectToSignIn
                    onClick={() => handleApply(jobDetails)}
                    disabled={userHasApplied()}
                >
                    {userHasApplied() ? "Başvuruldu" : "Başvur"}
                </Button>
                <div>
                    <Button redirectToSignIn onClick={() => console.log("Kayıt")} variant="secondary">
                        <IoBookmarkOutline />
                    </Button>
                </div>
                <div>
                    <Button redirectToSignIn onClick={() => console.log("Report")} variant="google">
                        <MdBlockFlipped />
                    </Button>
                </div>
            </div>
        </header>
    )
}