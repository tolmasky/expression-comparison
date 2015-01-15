
var fs = require("fs");
var parse = require("acorn").parse;



var reports = ["2-elements", "3-elements", "6-elements", "14-elements"];

for (var index = 0; index < reports.length; ++index)
{
    var statement = parse(fs.readFileSync("./" + reports[index] + "-statement.js", "utf-8"));
    var expression = parse(fs.readFileSync("./" + reports[index] + "-expression.js", "utf-8"));
    console.log(reports[index]);
    console.log("statement: " + countNodes(statement));
    console.log("expression: " + countNodes(expression));
    console.log()
}

function countNodes(anAST)
{
    var count = 0;

    require("estraverse").traverse(anAST, { enter:function()
    {
        ++count;
    }});

    return count;
}
