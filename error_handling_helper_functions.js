// TODO: Create a function that validates user input
console.log("==== Welcome to the Error Handling exercise! ====")
console.log("---------------------------------------------------------------- \n");
console.log("==== This function is called returns true if the input is not empty and false if it is. ====\n");
let validateInput = (input) => {
    if (input) {
        return true;
    }
    return false;
}

console.log(validateInput());
console.log(validateInput('hello, I am an imput'));

console.log("---------------------------------------------------------------- \n");
// TODO: Create a function that demonstrates multiple error types
console.log("==== This function demonstrates multiple error types. ====\n");
console.log("The following functions will throw errors: \n");
function errorTypes(input) {
    try{
        if (typeof input !== 'number') {
            throw new TypeError("WRONG INPUT, Input must be a number");
        }
        
        if (input === 0){
            throw new RangeError("WRONG INPUT, Value cannot be zero");
        }

        if (input < 0)  {
            throw new Error("WRONG INPUT, Value cannot be negative");
        }

        console.log("Input is valid, my brother.", input);
    }
    catch (error) {
        if (error instanceof TypeError){
            console.error("Caught TypeError:", error.message);
        }
        else if (error instanceof RangeError){
            console.error("Caught RangeError:", error.message);
        }
        else {
            console.error("Caught Error:", error.message); 
        }
    }
}
errorTypes("Hi, I'm a string!");
errorTypes(0);
errorTypes(-25);

// TODO: Create a collection of helper functions for string manipulation

const OverwatchAgents =[
    {name: "Genji", role: "DPS"},
    {name: "McCree", role: "DPS"},
    {name: "Reinhardt", role: "Tank"},
    {name: "Soldier: 76", role: "DPS"},
    {name: "Mercy", role: "Support"},
    {name: "Ana", role: "Support"}
];

function filter_Agents(OverwatchAgents){
    return OverwatchAgents.role == "DPS";
}

const filtered_Agents = OverwatchAgents.filter(filter_Agents);
console.log(JSON.stringify(filtered_Agents, null, 2));

// TODO: Create helper functions for array operations