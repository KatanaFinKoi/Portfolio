"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var Footer_1 = require("./components/Footer");
var Header_1 = require("./components/Header");
var Navbar_1 = require("./components/Navbar");
var aboutMe_1 = require("./Pages/aboutMe");
var contact_1 = require("./Pages/contact");
var portfolio_1 = require("./Pages/portfolio");
var resume_1 = require("./Pages/resume");
require("./App.css");
var Layout = function () { return (<div className="container">
    <Header_1.default /> {/* Navbar stays on all pages */}
    <react_router_dom_2.Outlet /> {/* Renders the matched child route's element */}
  </div>); };
function App() {
    return (<div>
      <Header_1.default />
      <Navbar_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Layout />}/>
          <react_router_dom_1.Route path="/aboutMe" element={<aboutMe_1.default />}/>
          <react_router_dom_1.Route path="/portfolio" element={<portfolio_1.default />}/>
          <react_router_dom_1.Route path="/contact" element={<contact_1.default />}/>
          <react_router_dom_1.Route path="/resume" element={<resume_1.default />}/>
      </react_router_dom_1.Routes>
      <Footer_1.default />
    </div>);
}
;
exports.default = App;
