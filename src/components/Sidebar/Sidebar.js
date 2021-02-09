import React from 'react'
import {Box, Flex, Text, Image} from '@chakra-ui/react'
import img1 from '../../images/Group 893.png'
import img2 from '../../images/bar-chart.png'
import img3 from '../../images/Icon awesome-tasks.png'
import img4 from '../../images/add-friend.png'
import img5 from '../../images/Icon ionic-md-settings.png'
import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <Box p="10">
            <Text fontWeight="bold" mb={8}>LOGO</Text>
            <Flex bg="#F7B928"borderRadius="full" p={1} w="145px" h="35px">
                <Image h={3} mx={2} my="auto" src={img1} /><Link to="/manager"><Text color="#fff">Manager</Text></Link>
            </Flex>
            <Flex my={5}>
                <Image h={3} mx={2} my="auto" src={img2} /><Link to="/users"><Text>Users</Text></Link>
            </Flex>
            <Flex my={5}>
                <Image h={3} mx={2} my="auto" src={img3} /><Link to="/requests"><Text>Requests</Text></Link>
            </Flex>
            <Flex my={5}>
                <Image h={3} mx={2} my="auto" src={img4} /><Link to="/subscriptions"><Text>Subscriptions</Text></Link>
            </Flex>
            <Flex my={5}>
                <Image h={3} mx={2} my="auto" src={img5} /><Link to="/"><Text>Logout</Text></Link>
            </Flex>

        </Box>
    )
}
