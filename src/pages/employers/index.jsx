import { Link } from "react-router-dom";
import EmployersLayout from "~/layouts/employers";

import Tabs from "~/components/Tabs";
import OpenTab from "./components/tabs/OpenTab";
import ClosedTab from "./components/tabs/ClosedTab";
import Title from "~/components/Title";
import Button from "~/components/Form/Button";

export default function Employers() {

  return (
    <EmployersLayout>
      <div className="flex items-center justify-between px-4 py-2">
        <Title variant="h4">İş İlanları</Title>
        <div>
          <Button>
            <Link to="/employers/posting">İş İlanı yayınla</Link>
          </Button>
        </div>
      </div>

      <div className="w-full px-4 py-2">
        <Tabs
          tabTitles={["Açık ve duraklatılmış", "Kapalı"]}
          tabContents={[
            <OpenTab key="1" />,
            <ClosedTab key="2" />
          ]}
        />
      </div>
    </EmployersLayout>
  )
}