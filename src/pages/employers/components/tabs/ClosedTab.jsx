import { useState } from "react";
import { useEffect } from "react"
import Button from "~/components/Form/Button";
import Title from "~/components/Title";
import useAuth from "~/hooks/useAuth"
import { getClosedJobPostings } from "~/services"
import EmptyJobPostings from "../EmptyJobPostings";

export default function ClosedTab() {
  const { user } = useAuth();
  const [closedJobPostings, setClosedJobPostings] = useState();

  useEffect(() => {
    if (user.company_id) {
      getClosedJobPostings(user.company_id).then(response => {
        if (response.status == "OK") {
          setClosedJobPostings(response.post);
          console.log(response);
        }
      })
    }
  }, [user.company_id])

  return (
    <div className="flex flex-col gap-y-2 py-4">
      {closedJobPostings && closedJobPostings.map((jobPosting, index) => (
        <div key={index} className="bg-neutral-950 p-4 rounded-md shadow-md mt-4">
          <div className="flex items-center justify-between">
            <Title variant="h6">{jobPosting.position_name}</Title>
            <div className="flex gap-x-2">
              <Button>Düzenle</Button>
              <Button><span className="px-4">Sil</span></Button>
            </div>
          </div>
        </div>
      ))}

      {!closedJobPostings && (
        <EmptyJobPostings />
      )}
    </div>
  )
}
