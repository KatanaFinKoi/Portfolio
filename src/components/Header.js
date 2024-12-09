"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var navigate = (0, react_router_dom_1.useNavigate)();
var Header = function () {
    return (<div>
    <h1>
      Liam Rayback
    </h1>
    <nav>
      <ul>
        <li onClick={function () { return navigate("/"); }}>About Me</li>
        <li onClick={function () { return navigate("/portfolio"); }}>Portfolio</li>
        <li onClick={function () { return navigate("/contact"); }}>Contact</li>
        <li onClick={function () { return navigate("/resume"); }}>Resume</li>
      </ul>
    </nav>
  </div>);
};
exports.default = Header;
