import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
// import Navtop from './components/Navtop/Navtop';
import States from "./components/States/states";
import Sidebar from "./components/Sidebar/Sidebar";
import Courses from "./components/Courses/courses";
import CoursesOutline from "./components/Courses/courses-outline";
import Faculties from "./components/Faculties/Faculties";
import AddFaculties from "./components/Faculties/AddFaculties";
function App() {
  return (
    <Router>
      <Box>
        <Box bg="#003049" h="10rem" color="#fff">
          <Flex float="right" mt={8} mx={14}>
            <Text color="#fff" mr={2}>
              Asfandyer Butt
            </Text>
            <Image
              rounded="full"
              h="30px"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              alt="image"
            />
          </Flex>
        </Box>
        <Flex bg="#F8F8F8" minH="100vh">
          <Box rounded="lg" mx={20} h="600px" w="280px" bg="#fff" mt={-100}>
            <Sidebar />
          </Box>
          <Box>
            <Switch>
              <Route exact path="/" component={States} />
              <Route path="/manager" component={States} />
              <Route path="/courses" component={Courses} />
              <Route path="/courses-outline" component={CoursesOutline} />
              <Route path="/faculties" component={Faculties} />
              <Route path="/add-faculties" component={AddFaculties} />
            </Switch>
          </Box>
        </Flex>
      </Box>
    </Router>
  );
}

export default App;
