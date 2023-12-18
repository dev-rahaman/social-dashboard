"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  EditIcon,
  ClassIcon,
  DashboardIcon,
  DonationIcon,
  DropdownIcon,
  EventIcon,
  FeedbackIcon,
  GroupIcon,
  MessageIcon,
  NotificationIcon,
  OrderIcon,
  PhotoIcon,
  ProductsIcon,
  VideoIcon,
} from "@/app/icon/page";

export const Item = ({ menu, link, icon }) => {
  return (
    <ul>
      <li>
        <Link
          href={link}
          className="flex items-center w-full p-2 text-base hover:text-[#9bb200] text-gray-200 transition duration-75 rounded-lg group"
        >
          <div className="me-2">{icon}</div>
          {menu}
        </Link>
      </li>
    </ul>
  );
};

const items = [
  {
    name: "Edit Profile",
    href: "/",
    icon: <EditIcon />,
  },
  {
    name: "Registration",
    href: "/dashboard/authorization/registration",
    icon: <EditIcon />,
  },
  {
    name: "Login",
    href: "/dashboard/authorization/login",
    icon: <EditIcon />,
  },
  {
    name: "Post A Article",
    href: "/dashboard/add-article",
    icon: <DashboardIcon />,
  },
  {
    name: "Publish a Notice",
    href: "/dashboard/notice",
    // icon: <NotchIcon />,
  },
  { name: "Post a Class", href: "/dashboard/class", icon: <ClassIcon /> },
  { name: "Post a Event", href: "/dashboard/event", icon: <EventIcon /> },
  { name: "Post a Video", href: "/dashboard/video", icon: <VideoIcon /> },
  { name: "Post a Photo", href: "/dashboard/photo", icon: <PhotoIcon /> },
  // {
  //   name: "Donation Now",
  //   href: "/dashboard/donation",
  //   icon: <DonationIcon />,
  // },
  { name: "Group", href: "/dashboard/group", icon: <GroupIcon /> },
  { name: "Message", href: "/dashboard/message", icon: <MessageIcon /> },
  {
    name: "Notification",
    href: "/dashboard/notification",
    icon: <NotificationIcon />,
  },
  { name: "Feedback", href: "/dashboard/feedback", icon: <FeedbackIcon /> },
];

const dropdown = [
  {
    title: "Products",
    icon: <ProductsIcon />,
    link: [
      { name: "Add Products", href: "/dashboard/add-product" },
      { name: "All Products", href: "/dashboard/all-product" },
      { name: "Manage Products", href: "/dashboard/manage-product" },
      { name: "Edit Products", href: "/dashboard/edit-product" },
    ],
  },
  {
    title: "Order Management",
    icon: <OrderIcon />,
    link: [
      { name: "All Order", href: "/dashboard/order" },
      { name: "Completed Order", href: "/dashboard/completed-order" },
      { name: "Cancel Order", href: "/dashboard/cancel-order" },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState([]);

  const handleOpen = (idx) => {
    const newOpenState = [...open];
    newOpenState[idx] = !newOpenState[idx];
    setOpen(newOpenState);
  };

  return (
    <aside
      className={`h-[500px] w-[270px] mt-10 rounded-3xl ms-10 pb-[125px]  bg-[#0e6c14] fixed top-14 left-0 z-40 transition-transform sm:translate-x-0`}
    >
      <div className="p-5 mb-5">
        <Link href={"/dashboard"}>
          <Image
            src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
            alt="Jamia Rashidia Feni"
            width={50}
            height={50}
          ></Image>
        </Link>
      </div>
      <div className="overflow-y-auto overflow-x-hidden custom-scrollbar h-full">
        {items.map((item, idx) => (
          <Item
            key={idx}
            icon={item.icon}
            menu={item.name}
            link={`${item.href}`}
          />
        ))}

        <ul>
          {dropdown &&
            dropdown.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleOpen(idx)}
                  className="flex items-center w-full my-2 p-2 text-base text-white hover:text-[#9bb200] transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700"
                  aria-controls={`dropdown-example-${idx}`}
                  data-collapse-toggle={`dropdown-example-${idx}`}
                >
                  {item.icon}
                  <span class="flex-1 ml-2 text-left whitespace-nowrap">
                    {item.title}
                  </span>
                  <DropdownIcon />
                </button>
                {open[idx] && (
                  <div id={`dropdown-example-${idx}`}>
                    {item?.link?.map((linkItem, linkIdx) => (
                      <Link
                        href={linkItem.href}
                        className="flex items-center w-full p-2 ms-3 text-base hover:text-[#9bb200] text-gray-200 transition duration-75 rounded-lg group"
                        key={linkIdx}
                      >
                        {linkItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
