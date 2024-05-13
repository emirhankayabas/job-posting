import { useState, useEffect } from "react";
import classNames from "classnames";
import AdminLayout from "~/layouts/admin";
import { getApprovedJobPostings, getPendingJobPostings } from "~/services";

import ProfilePicture from "~/utils/ProfilePicture";
import Title from "~/components/Title";
import Text from "~/components/Text";
import Button from "~/components/Form/Button";

export default function Admin() {
    const [pendingJobPostings, setPendingJobPostings] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        getPendingJobPostings()
            .then((response) => {
                setPendingJobPostings(response.posts);
                setSelectedPost(response.posts[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleApproved = (id) => () => {
        getApprovedJobPostings(id).then((response) => {
            if (response.status == "OK") {
                setPendingJobPostings(pendingJobPostings.filter((post) => post._id !== id));

                if (selectedPost > 0 && selectedPost._id === id) {
                    setSelectedPost(null);
                }
            }
        })
    }

    const handleSelectPost = (id) => {
        setSelectedPost(selectedPost === id ? null : id);
    }

    return (
        <AdminLayout>
            <div className="flex items-center justify-between px-4 py-2 h-[60px]">
                <Title variant="h4">Onay Bekleyen İş İlanları</Title>
            </div>

            <div className="w-full flex gap-x-4 px-4 py-2">

                <div className="w-2/3 flex flex-col gap-y-2">
                    {pendingJobPostings && pendingJobPostings.map((post) => (
                        <div
                            key={post._id} className="bg-neutral-950 p-4 rounded-md shadow-md cursor-pointer transition-all"
                            onClick={() => handleSelectPost(post)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <ProfilePicture name={post.company_name} />
                                    <div>
                                        <Title variant="h6">{post.position_name}</Title>
                                        <Text>{post.company_name}</Text>
                                    </div>
                                </div>
                                <div className="flex gap-x-2">
                                    <div>
                                        <Button variant="success" onClick={handleApproved(post._id)}>
                                            Onayla
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="danger" onClick={(e) => {
                                            e.stopPropagation();
                                        }}>
                                            Reddet
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classNames({
                    "w-1/3 h-full overflow-auto max-h-[800px]": true,
                    "hidden": !selectedPost
                })}>
                    {selectedPost && (
                        <div className="bg-neutral-950 p-4 rounded-md shadow-md job-detail">
                            <div className="overflow-auto" dangerouslySetInnerHTML={{ __html: selectedPost.position_description }}></div>
                        </div>
                    )}
                </div>


            </div>
        </AdminLayout>
    )
}