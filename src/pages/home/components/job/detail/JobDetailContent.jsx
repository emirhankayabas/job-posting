import classNames from "classnames";
import useJob from "~/hooks/useJob";

import Text from "~/components/Text";
import Title from "~/components/Title";
import formatPrice from "~/utils/formatPrice";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

export default function JobDetailContent() {
    const { jobDetails } = useJob();

    return (
        <div className="flex flex-col gap-y-5 py-6 px-4">
            <Title variant="h4">İş detayları</Title>

            {jobDetails.position_salary && (
                <div className="flex gap-x-2">
                    <Text> <FaMoneyBillWave size={22} /></Text>
                    <div className="flex flex-col gap-y-2 justify-center">
                        <Text>Maaş</Text>
                        {jobDetails.position_salary && (
                            <div className="bg-zinc-800 py-1 px-3 rounded-md inline-block text-sm font-semibold">Ayda {formatPrice(jobDetails.position_salary)}</div>
                        )}
                    </div>
                </div>
            )}

            {jobDetails.position_types && (
                <div className="flex gap-x-2">
                    <Text> <MdOutlineWorkOutline size={22} /></Text>
                    <div className="flex flex-col gap-y-2 justify-center">
                        <Text>İş türü</Text>
                        <div className={classNames({
                            "py-1 px-3 rounded-md inline-block font-semibold text-sm border": true,
                            "bg-[#10381d] text-[#90dd9f] border-[#1a5720]": jobDetails.position_types == "Tam zamanlı",
                            "bg-blue-900 text-blue-300 border-blue-700": jobDetails.position_types == "Yarı zamanlı",
                            "bg-yellow-900 text-yellow-300 border-yellow-700": jobDetails.position_types == "Stajyer",
                            "bg-purple-900 text-purple-300 border-purple-700": jobDetails.position_types == "Uzaktan",
                        })}>{jobDetails.position_types}</div>
                    </div>
                </div>
            )}

            {jobDetails.position_location && (
                <div className="flex gap-x-2">
                    <Text> <IoLocationOutline size={22} /></Text>
                    <div className="flex flex-col gap-y-2 justify-center">
                        <Text>Konum</Text>
                        <div className="border border-neutral-700 bg-zinc-800 text-sm py-1 px-3 rounded-md inline-block font-semibold">{jobDetails.position_location}</div>
                    </div>
                </div>
            )}
        </div>
    )
}