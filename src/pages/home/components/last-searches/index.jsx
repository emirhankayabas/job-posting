import uniqid from 'uniqid';
import useSearch from "~/hooks/useSearch"
import useJob from "~/hooks/useJob";

import { getSearchedJobPostings } from "~/services";
import { AiOutlineClose } from "react-icons/ai";

import Text from "~/components/Text";

export default function LastSearches() {
    const { searchHistory, deleteSearchHistory, addSearchHistory } = useSearch()
    const { setJobList, setJobDetails } = useJob();

    const handleSubmit = (values) => {
        deleteSearchHistory(searchHistory.findIndex((search) => search.id === values.id));

        const data = {
            position_name: values.position_name,
            position_location: values.position_location,
        }

        getSearchedJobPostings(data).then((response) => {
            if (response.status == "OK") {
                setJobList(response.post);
                addSearchHistory({
                    id: uniqid(),
                    position_name: values.position_name,
                    position_location: values.position_location,
                });
                if (response.post.length > 0) {
                    setJobDetails(response.post[0]);
                }
            }
        })
    }
    return (
        <div className="max-w-xl mx-auto">
            <ul className="flex flex-col gap-y-2 transition-all">
                {searchHistory.map((search, index) => (
                    <li
                        onClick={() => handleSubmit(search)}
                        key={index}
                        className="min-h-[62px] flex items-center justify-between border border-neutral-700 py-2 gap-x-2 cursor-pointer px-3 rounded-md transition-colors hover:bg-neutral-800"
                    >
                        <div>
                            <span className="text-white">{search.position_name}</span>
                            {search.position_location && <Text variant="small">{search.position_location} bölgesinde</Text>}
                        </div>
                        <button
                            className="p-2 rounded-md hover:bg-neutral-700 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteSearchHistory(index)
                            }}>
                            <AiOutlineClose />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
