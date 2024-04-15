import { useState, useEffect } from "react";
import { getJobPostingsById } from "~/services";
import { Link } from "react-router-dom";

import EmployersLayout from "~/layouts/employers";
import useAuthRedirect from "~/middlewares/authRedirect";
import useAuth from "~/hooks/useAuth";
import Title from "~/components/Title";
import Button from "~/components/Form/Button";

import employersHomeSvg from "~/assets/images/employers-home.svg";
import Text from "~/components/Text";

export default function Employers() {
  // Tasarım 100% değişecek.

  useAuthRedirect();
  const { user } = useAuth();
  const [jobPostings, setJobPostings] = useState();

  useEffect(() => {
    getJobPostingsById(user.company_id).then(response => {
      if (response.status == "OK") {
        setJobPostings(response.post);
        console.log(response);
      }
    })
  }, [user.company_id])

  return (
    <EmployersLayout>
      <div className="flex items-center justify-between px-4 py-2">
        <Title variant="h4">İş İlanları</Title>
        <div><Button>
          <Link to="/employers/posting">İş İlanı yayınla</Link>
        </Button></div>
      </div>

      <div className="flex flex-col gap-y-2 px-4">
        {jobPostings && jobPostings.map((jobPosting, index) => (
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
      </div>

      {!jobPostings && (
        <div className="flex items-center flex-col gap-y-4 justify-center mt-10">
          <img src={employersHomeSvg} alt="İş ilanı yok" className="h-full" />
          <Title variant="h3">4 kata kadar daha fazla başvuru alın. İlk iş ilanınızı doğrudan yayınlayın.</Title>
          <Text variant="medium">Başvuruları kariyer web sitesinize yönlendirmeye kıyasla dört kata kadar daha fazla başvuru alın. Başvurmayı kolaylaştırın ve daha hızlı işe alım yapın.</Text>
          <div>
            <Button>
              <Link to="/employers/posting">İş İlanı yayınla</Link>
            </Button>
          </div>
        </div>

      )}

    </EmployersLayout>
  )
}