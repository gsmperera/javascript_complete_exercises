// -----------------------------------------
// -----------Function Expressions----------
// -----------------------------------------

// --Function declaration--
// function functionName(parameter01, parameter02){}

// --Function expression--
var profession = function(job, firstName){
    switch(job){
        case 'doctor':
            return firstName+' is treating patients.';
        case 'teacher':
            return firstName+' is teaching students.';
        case 'engineer':
            return firstName+' is working with buildings.';
        default:
            return firstName+' is doing something else.';
    }
}

// Calling
console.log(profession('doctor', 'Kasun'));
console.log(profession('engineer', 'Sashini'));
console.log(profession('professor', 'Kamal'));
