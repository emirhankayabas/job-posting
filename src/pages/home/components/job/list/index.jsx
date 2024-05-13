import classNames from "classnames";

import useJob from '~/hooks/useJob';

import formatPrice from "~/utils/formatPrice";
import TextFormatter from "~/utils/TextFormatter";

import Dropdown from "~/components/Dropdown";
import Title from "~/components/Title";
import Text from "~/components/Text";

import { IoSend, IoBookmarkOutline, IoFlagOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfilePicture from "~/utils/ProfilePicture";

export default function JobList() {
    const { jobLists, jobDetails, setJobDetails } = useJob();

    return (
        <div className="w-5/12">
            {jobLists.map((jobList) => (
                <div
                    key={jobList._id}
                    className={classNames({
                        "flex gap-x-3 border border-neutral-700 rounded-md my-4 pl-2 pr-4 py-4  cursor-pointer group relative": true,
                        "outline outline-neutral-500": jobDetails._id == jobList._id
                    })}
                    onClick={() => setJobDetails(jobList)}
                >

                    <div>
                        <ProfilePicture name={jobList.company_name} />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        {jobList.position_count > 1 && (
                            <div className="flex">
                                <div className="text-xs px-2 py-1 rounded-md font-semibold -ml-1 bg-[#36091c] text-[#d669a6] border border-[#34383a]">Birden fazla kişiyi işe alıyor</div>
                            </div>
                        )}

                        <div className="group-hover:underline" >
                            <Title variant="h4">{jobList.position_name}</Title>

                            <div
                                className="absolute top-2 right-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Dropdown dropDownCircle={false} buttonText={<BsThreeDotsVertical />} items={[
                                    { text: "Kaydet", icon: IoBookmarkOutline, onClick: () => { console.log("dropdown kaydet") }, redirectToSignIn: true },
                                    { text: "Şikayet et", icon: IoFlagOutline, onClick: () => { console.log("dropdown şikayet et") }, redirectToSignIn: true },
                                ]} />
                            </div>
                        </div>

                        <div>
                            <Text>{jobList.company_name}</Text>
                            <Text>{jobList.position_location}</Text>
                        </div>

                        <div className="flex items-center gap-x-2 mt-1">
                            {jobList.position_salary && (
                                <div className="bg-zinc-800 py-1 px-3 rounded-md inline-block font-semibold">Ayda {formatPrice(jobList.position_salary)}</div>
                            )}
                            <div className={classNames({
                                "py-1 px-3 rounded-md inline-block font-semibold": true,
                                "bg-green-900 text-green-300": jobList.position_types == "Tam zamanlı",
                                "bg-blue-900 text-blue-300": jobList.position_types == "Yarı zamanlı",
                                "bg-yellow-900 text-yellow-300": jobList.position_types == "Stajyer",
                                "bg-purple-900 text-purple-300": jobList.position_types == "Uzaktan",

                            })}>{jobList.position_types}</div>
                        </div>

                        <div className="flex items-center gap-x-2 font-medium text-white mt-2">
                            <span
                                className="text-blue-500"
                            >
                                <IoSend size={20} />
                            </span>
                            Kolayca başvuru
                        </div>

                        <div className="line-clamp-3 mt-2">
                            <Text variant="small">
                                {TextFormatter({ data: jobList.position_description })}</Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}