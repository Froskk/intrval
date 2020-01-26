import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from 'app';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// https://create-react-app.dev/docs/making-a-progressive-web-app/
// https://www.freecodecamp.org/news/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3/
serviceWorker.unregister();
