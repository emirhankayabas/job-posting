import { useState, useEffect } from 'react';
import { getJobPostingsById } from '~/services';

import useAuth from '~/hooks/useAuth';
import Button from '~/components/Form/Button';
import Title from '~/components/Title';
import EmptyJobPostings from '../EmptyJobPostings';

export default function OpenTab() {
  const { user } = useAuth();
  const [jobPostings, setJobPostings] = useState();

  useEffect(() => {
    if (user?.company_id) {
      getJobPostingsById(user?.company_id).then(response => {
        if (response.status == "OK") {
          setJobPostings(response.post);
        }
      })
    }
  }, [user?.company_id])

  return (
    <div className="flex flex-col gap-y-2 py-4">
      {jobPostings && jobPostings.map((jobPosting, index) => (
        <div key={index} className="bg-neutral-950 p-4 rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <Title variant="h6">{jobPosting.position_name}</Title>
            <div className="flex gap-x-2">
              <Button>Düzenle</Button>
              <Button><span className="px-4">Sil</span></Button>
            </div>
          </div>
        </div>
      ))}

      {!jobPostings && (
        <EmptyJobPostings />
      )}
    </div>
  );
}