import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

// components
import ManagerComponent from "./ManagerComponent";
import CustomHeader from "../UI/CustomHeader";
import { useParams } from "react-router";

export default function Manager() {
  const { id } = useParams();

  const allManagement = [
    {
      title: "Manage Courses",
      href: "/courses",
      icon: "",
    },

    {
      title: "Manage Course Outlines",
      href: "/courses-outline",
      icon: "",
    },

    // {
    //   title: "Manage Universities",
    //   href: "/universities",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width={24}
    //       height={24}
    //       viewBox="0 0 32 30"
    //     >
    //       <defs>
    //         <clipPath id="prefix__a">
    //           <path
    //             data-name="Rectangle 16894"
    //             transform="translate(1510 372)"
    //             fill="#003049"
    //             stroke="#707070"
    //             d="M0 0h32v30H0z"
    //           />
    //         </clipPath>
    //       </defs>
    //       <g
    //         data-name="Mask Group 7"
    //         transform="translate(-1510 -372)"
    //         clipPath="url(#prefix__a)"
    //       >
    //         <path data-name="Path 987" d="M1511 372h30v30h-30z" fill="none" />
    //         <path
    //           data-name="Path 988"
    //           d="M1526 375.75l-13.75 7.5 5 2.725v7.5l8.75 4.775 8.75-4.775v-7.5l2.5-1.363v8.638h2.5v-10zm8.525 7.5L1526 387.9l-8.525-4.65 8.525-4.65zm-2.275 8.737L1526 395.4l-6.25-3.413v-4.65l6.25 3.413 6.25-3.412v4.65z"
    //           fill="#003049"
    //         />
    //       </g>
    //     </svg>
    //   ),
    // },

    {
      title: "Manage Faculties",
      href: `/manager/${id}/faculties`,
      icon: "",
    },

    {
      title: "Manage Departments",
      href: "/departments",
      icon: "",
    },
    {
      title: "Manage States",
      href: "/states",
      icon: "",
    },
    {
      title: "Manage Past Papers",
      href: "/pastPapers",
      icon: "",
    },
    {
      title: "Manage Forum",
      href: "/forum",
      icon: "",
    },
  ];

  return (
    <Box mt={-100} ml={-14} w="65vw">
      <CustomHeader title="Manager" showButtons={false} />

      <Box mt={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {allManagement.map((manager, index) => {
            return (
              <ManagerComponent
                key={`0${index}`}
                title={manager.title}
                href={manager.href}
                icon={manager.icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
