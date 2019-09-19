import "./styles.css";

import runTernaries from "./ternaries";
import runTemplateLiteras from "./template-literals";
import runShorthandPropertys from "./shorthand-propertys";
import runArrowFunctions from "./arrow-functions";
import runDestructuring from "./destructuring";
import runParametersDefault from "./parameters-default";
import runSpreadOperator from "./spread-operator";

document.getElementById("app").innerHTML = `
<h1>Ecmascript 6 (ES6) Workshop</h1>
<img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/11/1480354939es6-meme.jpg"/>
<br />
<h3>
  <a href="https://codesandbox.io/s/es6-945s1">THE CODE</a>
</h3>
`;

runTernaries();
// runTemplateLiteras();
// runShorthandPropertys();
// runArrowFunctions();
// runDestructuring();
// runParametersDefault();
// runSpreadOperator();
