import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
// import Navtop from './components/Navtop/Navtop';
import Manager from "./components/Manager";
import Courses from "./components/Courses";
import CoursesOutline from "./components/CoursesOutline";
import Faculties from "./components/Faculties";
import AddFaculties from "./components/Faculties/AddFaculties";
import State from "./components/State";
import NewCourse from "./components/Courses/newCourse";
import AllUsers from "./components/Users/AllUsers";
import NotFound from "./components/NotFound";
import Requests from "./components/Request";
import Subscriptions from "./components/Subscription";
import Forum from "./components/Forum";
import Stats from "./components/Stats";
import Sidebar from "./components/UI/Sidebar";
import PastPapers from "./components/PastPapers";
import Universities from "./components/Universities";
import Departments from "./components/Departments";

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
              <Route exact path="/" component={Manager} />
              <Route exact path="/courses-outline" component={CoursesOutline} />
              <Route exact path="/faculties" component={Faculties} />
              <Route exact path="/add-faculty" component={AddFaculties} />
              <Route exact path="/states" component={State} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/new" component={NewCourse} />
              <Route exact path="/users/all" component={AllUsers} />
              <Route exact path="/subscriptions" component={Subscriptions} />
              <Route exact path="/requests" component={Requests} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/pastPapers" component={PastPapers} />
              <Route exact path="/universities" component={Universities} />
              <Route exact path="/departments" component={Departments} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Box>
        </Flex>
      </Box>
    </Router>
  );
}

export default App;
