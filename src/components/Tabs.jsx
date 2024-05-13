import { Tab } from '@headlessui/react'
import propTypes from 'prop-types'
import classNames from 'classnames'

export default function Tabs({ tabTitles, tabContents, border = false, theme = "default" }) {
    return (
        <Tab.Group >
            <Tab.List>
                {tabTitles.map((title, index) => (
                    <Tab
                        key={index}
                        className={({ selected }) => classNames({
                            "py-2.5 px-4 text-white text-opacity-85 text-base border border-neutral-700 outline-none font-medium transition-all": theme === "default",
                            "rounded-l-md": index === 0 && theme === "default",
                            "rounded-r-md border-l-0": index === tabTitles.length - 1 && theme === "default",
                            "bg-neutral-800 text-opacity-100": selected && theme === "default",
                            "py-2.5 px-10 text-white text-opacity-85 text-base border border-transparent outline-none font-medium transition-all": theme === "minimal",
                            "!text-opacity-100": selected && theme === "minimal",
                        })}
                    >
                        {title}
                    </Tab>
                ))}
            </Tab.List>

            {border && <div className="w-full h-[1px] bg-neutral-700" />}

            <Tab.Panels className="w-full">
                {tabContents.map((content, index) => (
                    <Tab.Panel key={index}>
                        {content}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

Tabs.propTypes = {
    tabTitles: propTypes.array.isRequired,
    tabContents: propTypes.array.isRequired,
    border: propTypes.bool,
    theme: propTypes.oneOf(["default", "minimal"]),
}