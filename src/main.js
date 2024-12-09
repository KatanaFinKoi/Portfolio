"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_tsx_1 = require("./App.tsx");
var react_router_dom_1 = require("react-router-dom");
var client_1 = require("react-dom/client");
var aboutMe_1 = require("./Pages/aboutMe");
var portfolio_1 = require("./Pages/portfolio");
var contact_1 = require("./Pages/contact");
var resume_1 = require("./Pages/resume");
require("./index.css");
require("./App.css");
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <App_tsx_1.default />,
        children: [
            {
                index: true,
                element: <aboutMe_1.default />
            },
            {
                path: "/portfolio",
                element: <portfolio_1.default />
            },
            {
                path: "/contact",
                element: <contact_1.default />
            },
            {
                path: "/resume",
                element: <resume_1.default />
            },
        ]
    }
]);
var rootElement = document.getElementById("root");
if (rootElement) {
    client_1.default.createRoot(rootElement).render(<react_router_dom_1.RouterProvider router={router}/>);
}
