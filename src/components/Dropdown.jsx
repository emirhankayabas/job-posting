import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

import propTypes from 'prop-types'
import classNames from 'classnames'

import { IoIosArrowDown } from "react-icons/io";
import { RxExternalLink } from "react-icons/rx";

export default function Dropdown({ buttonText, items = [] }) {
    return (
        <div className='relative'>
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className={classNames({
                            "flex gap-x-4 items-center text-sm px-3 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors": true,
                            "text-white bg-neutral-800": open
                        })}>
                            {buttonText}
                            <IoIosArrowDown className={classNames('w-4 h-4 transition-transform', { 'transform rotate-180': open })} />
                        </Menu.Button>
                        <Menu.Items
                            className="flex flex-col gap-y-1 absolute right-0 mt-1.5 w-[340px] rounded-lg bg-neutral-800 shadow-lg outline-none transition-all overflow-hidden p-2 z-10"
                        >
                            {items.map((item, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => {
                                        if (item.to) {
                                            return (
                                                <Link
                                                    to={item.to}
                                                    target={item.target}
                                                    className={classNames({
                                                        'w-full h-12 flex items-center text-sm text-left px-4 py-2.5 text-white text-opacity-85 hover:text-opacity-100 rounded-lg hover:bg-neutral-700 transition-colors': true,
                                                        'text-white': active
                                                    })}
                                                >
                                                    {item.icon && <item.icon className='w-5 h-5 inline-block mr-2' />}
                                                    {item.text}
                                                    {item.target && <RxExternalLink className='w-5 h-5 ml-auto' />}
                                                </Link>
                                            )
                                        } else {
                                            return (
                                                <button
                                                    onClick={item.onClick}
                                                    className={classNames({
                                                        'w-full text-left px-4 h-12 py-2.5 text-sm block text-white text-opacity-85 hover:text-opacity-100 rounded-lg hover:bg-neutral-700 transition-colors': true,
                                                        'text-white': active
                                                    })}
                                                >
                                                    {item.icon && <item.icon className='w-5 h-5 inline-block mr-2' />}
                                                    {item.text}
                                                </button>
                                            )
                                        }
                                    }}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </>
                )}
            </Menu>
        </div>
    )
}

Dropdown.propTypes = {
    buttonText: propTypes.string.isRequired,
    items: propTypes.arrayOf(propTypes.shape({
        text: propTypes.string.isRequired,
        onClick: propTypes.func,
        to: propTypes.string,
    }))
}