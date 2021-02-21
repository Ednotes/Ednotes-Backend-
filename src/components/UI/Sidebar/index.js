import React from "react";
import { Box, Text } from "@chakra-ui/react";
import img1 from "../../../images/Group 893.png";
import img2 from "../../../images/bar-chart.png";
import img3 from "../../../images/Icon awesome-tasks.png";
import img4 from "../../../images/add-friend.png";
import img5 from "../../../images/Icon ionic-md-settings.png";
import SingleLink from "./SingleLink";
import {
  HomeIcon,
  UsersIcon,
  RequestsIcon,
  SubscriptionsIcon,
  LogoutIcon,
} from "../Svg/SidebarIcons";

export default function Sidebar() {
  const navLinks = [
    {
      title: "Manager",
      icon: <HomeIcon width={18} height={18} />,
      href: "/",
    },

    {
      title: "Users",
      icon: <UsersIcon />,
      href: "/users/all",
    },

    {
      title: "Requests",
      icon: <RequestsIcon />,
      href: "/requests",
    },

    {
      title: "Subscription",
      icon: <SubscriptionsIcon />,
      href: "/subscriptions",
    },

    {
      title: "Logout",
      icon: <LogoutIcon />,
      href: "/logout",
    },
  ];

  return (
    <Box p="10">
      <Text fontWeight="bold" mb={8}>
        LOGO
      </Text>

      {navLinks.map((linkData, index) => {
        return (
          <SingleLink
            key={index}
            title={linkData.title}
            href={linkData.href}
            icon={linkData.icon}
          />
        );
      })}
      {/* <Flex bg="#F7B928" borderRadius="full" p={1} w="145px" h="35px">
        <Image h={3} mx={2} my="auto" src={img1} />
        <Link as={NavLink} to="/">
          <Text color="#fff">Manager</Text>
        </Link>
      </Flex>

      <Flex my={5}>
        <Image h={3} mx={2} my="auto" src={img2} />
        <Link as={NavLink} to="/users/all">
          <Text>Users</Text>
        </Link>
      </Flex>
      <Flex my={5}>
        <Image h={3} mx={2} my="auto" src={img3} />
        <Link as={NavLink} to="/requests">
          <Text>Requests</Text>
        </Link>
      </Flex>
      <Flex my={5}>
        <Image h={3} mx={2} my="auto" src={img4} />
        <Link as={NavLink} to="/subscriptions">
          <Text>Subscriptions</Text>
        </Link>
      </Flex>
      <Flex my={5}>
        <Image h={3} mx={2} my="auto" src={img5} />
        <Link as={NavLink} to="/">
          <Text>Logout</Text>
        </Link>
      </Flex> */}
    </Box>
  );
}
