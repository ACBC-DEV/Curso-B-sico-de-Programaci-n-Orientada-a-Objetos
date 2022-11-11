const natalia ={
    name:'Natalia',
    age:19,
    cursosAprabados:['html','css','basico de js' ],
    aprobarCurso(nuevoCurso){
        this.cursosAprabados.push(nuevoCurso)
    }
};

// Hacer que natalia apruebe otro curso
natalia.cursosAprabados.push('css grid');

function student(name,age,cursosAprabados){
    this.name = name;
    this.age = age;
    this.cursosAprabados = cursosAprabados;
}
student.prototype.aprobarCurso=function(nuevoCurso){
    this.cursosAprabados.push(nuevoCurso)
}
const juanita=new student('juanita',21,['css','html']);

//protipos con la sintaxis de clase

class Student2{
    constructor({name,age,cursosAprabado=[ ],email}){
        this.name = name;
        this.age = age;
        this.cursosAprabados = cursosAprabado;
        this.email = email;
    }
    aprobarCurso(nuevocurso){
        this.cursosAprabados.push(nuevocurso);
    }
}
const mingelito =new Student2({name:'Migel',age:12,cursosAprabado:['css','html'],email:'migel@gmail.com'});
