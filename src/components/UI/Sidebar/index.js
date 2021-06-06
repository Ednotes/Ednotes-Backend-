import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import SingleLink from "./SingleLink";
import {
  HomeIcon,
  UsersIcon,
  RequestsIcon,
  SubscriptionsIcon,
  LogoutIcon,
} from "../Svg/SidebarIcons";

export default function Sidebar() {
  const logoutHandler = () => {
    localStorage.removeItem("ed-toke");
    window.location.href = "/";
  };
  const navLinks = [
    {
      title: "Universities",
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
      <Flex
        cursor="pointer"
        mb={3}
        borderRadius="full"
        py={2}
        px={3}
        onClick={logoutHandler}
      >
        <Text mr={2} my="auto">
          <LogoutIcon />
        </Text>
        <Text textDecor="none" fontSize="15px" my="auto">
          Logout
        </Text>
      </Flex>
    </Box>
  );
}
