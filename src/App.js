import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navtop from './components/Navtop/Navtop';
import Manager from "./components/Manager";
import Courses from "./components/Courses";
import CoursesOutline from "./components/CoursesOutline";
import NewOutline from "./components/CoursesOutline/newOutline";
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
import PastPapers from "./components/PastPapers";
import Universities from "./components/Universities";
import Departments from "./components/Faculties/SingleFaculty/Departments";
import Login from "./components/Auth/Login";
import { loggedIn } from "./helpers/localStorage";
// import { SubscriptionsIcon } from "./components/UI/Svg/SidebarIcons";
import Layout from "./components/UI/Layout";

function App() {
  const loggedInRoutes = [
    {
      path: "/",
      component: Universities,
    },
    {
      path: "/manager/:id",
      component: Manager,
    },
    {
      path: "/courses-outline",
      component: CoursesOutline,
    },
    {
      path: "/courses-outline/new",
      component: NewOutline,
    },
    {
      path: "/manager/:id/faculties",
      component: Faculties,
    },
    {
      path: "/add-faculty",
      component: AddFaculties,
    },

    {
      path: "/manager/:id/faculties/:facultyId/departments",
      component: Departments,
    },
    {
      path: "/states",
      component: State,
    },
    {
      path: "/courses",
      component: Courses,
    },
    {
      path: "/courses/new",
      component: NewCourse,
    },
    {
      path: "/users/all",
      component: AllUsers,
    },
    {
      path: "/subscriptions",
      component: Subscriptions,
    },
    {
      path: "/requests",
      component: Requests,
    },
    {
      path: "/users/all",
      component: AllUsers,
    },
    {
      path: "/forum",
      component: Forum,
    },

    {
      path: "/stats",
      component: Stats,
    },

    {
      path: "/pastPapers",
      component: PastPapers,
    },

    {
      path: "/universities",
      component: Universities,
    },

    {
      path: "*",
      component: NotFound,
    },
  ];

  return (
    <Router>
      {loggedIn ? (
        <Layout>
          <Switch>
            {loggedInRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Layout>
      ) : (
        <Switch>
          <Route exact path="/" component={Login}>
            <Login />
          </Route>

          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
