import * as React from 'react';
import {
    Route,
} from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import User from '../views/User';

export default () =>
    <React.Fragment>
        <Route  key="home" path="/home" exact component={Home} />
        <Route key="about"  path="/about/" component={About} />
        <Route key="user"  path="/user/" component={User} />
    </React.Fragment>

// export default class Routers extends React.Component<{}, {}> {
//     render() {
//         return [
//             <Route  key="home" path="/" exact component={Home} />,
//             <Route key="about"  path="/about/" component={About} />,
//             <Route key="user"  path="/user/" component={User} />,
//         ]
//     }
// }
