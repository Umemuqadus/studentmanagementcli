
import inquirer from "inquirer";

async function studentmanagement(){
    var list : string[] = [];
while(true){
    
    
    const students = await inquirer.prompt([{
    name : 'students',
    message : "Whant you wanna do?",
    type : 'list',
    choices : ['Add student' , "Remove student" , "Show Students information"]
   
   
}])

if(students.students === "Add student"){
        
    const studentname = await inquirer.prompt([{
        name : 'studentname',
        message : 'Add the student name .',
        type : 'input'
    }])
    const Idnumber = await inquirer.prompt([{
        name : 'Idnumber',
        message : 'Id number of the student.',
        type : 'Input'
    }])
    const grade = await inquirer.prompt([{
        name : 'grade',
        message : 'Grade of the student.',
        type : 'input'
       }])
       list.push(`Student name = ${studentname.studentname} , Id number = ${Idnumber.Idnumber} , Grade = ${grade.grade}`)
       console.log( list)}

      if(students.students == "Show Students information"){
        console.log(list)
       }
       else if(students.students === "Remove student"){
        const removestudent = await inquirer.prompt([{
            name : 'removestudent',
            type : "list",
            message : 'Select the student ',
            choices : list
        }])
        const studentremove = removestudent.removestudent
       list = list.filter(students => students !== studentremove)
       console.log(studentremove)}
       console.log(list)



}}
studentmanagement()
