// Write your solution in this file!



//- `updateEmployeeWithKeyAndValue()`: this function should take in three
//arguments: a `employee` `Object`, a `key` and a `value`. This function should
//not mutate the `employee`; it should return a _new_ `Object` that has an
//updated `value` for the `key` passed in.

//- `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
//same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
//`employee` `Object` passed in.

//- `deleteFromEmployeeByKey()`: this function should take in a `employee`
//`Object` and a `key`. It should delete the property with that `key` from the
//`employee` `Object`. This should not mutate the original `employee` `Object`;
//it should return a _new_ `Object` that doesn't include the identified
//key-value pair.

//- `destructivelyDeleteFromEmployeeByKey()`: this function should work the same
//as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.

const employee = {
    name: 'John Smith',
    streetAddress: 'Downton'
}

function updateEmployeeWithKeyAndValue(employee, key ,value ){
   const newUser = {...employee}

   newUser[key] = value ;

   return newUser;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key ,value ){
    employee[key] = value;

    return employee;

}

function deleteFromEmployeeByKey(employee, key){
    const newUserTwo = {...employee}

    delete newUserTwo[key];

    return newUserTwo;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}