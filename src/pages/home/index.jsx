import Header from "~/components/Header/Header";
import JobSearch from "./components/search";
import Job from "./components/job";
import Tabs from "~/components/Tabs";
import LastSearches from "./components/last-searches";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <JobSearch />
        <div className="mx-auto flex flex-col items-center gap-y-3">
          <Tabs
            tabTitles={["İş ilanı akışı", "Son aramalar"]}
            tabContents={[
              <Job key="1" />,
              <LastSearches key="2" />
            ]}
            border={true}
            theme="minimal"
          />
        </div>
      </main >
    </>
  )
}