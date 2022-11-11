class Comment{
    constructor({content,studentName,studentRole='estuadiante'}){
        this.content=content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.likes=0;
    }
    publicar(){
        console.log(this.studentName+'('+this.studentRole+')');
        console.log(this.likes+' Likes');
        console.log(this.content)
    }
}






function videoPlay(id){
    const urlSc='https://platziSecreat';
    console.log('se esta reproduciones'+urlSc)
}
function videoStop(id){
    const urlSc='https://platziSecreat';
    console.log('stop '+urlSc)
}
class PlatziClass{
    constructor({ 
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID)
    }
}


class Course {
    constructor({name,classes=[],isFree=false,lang='spanish'}){
        this._name=name;
        this.classes=classes;
        this.isFree=isFree
        this.lang=lang;
    } 

    get name(){
        return this._name;
    }
    set name(newName){
        if(newName ==='curso maldito de programacio basica'){
            console.error('Web... no');
        }else{
            this._name=newName;
        }
        
    }
}
const cursoProgBasic=new Course({name:'cursoProgBasic',isFree:true});
const cursoDefinitivoHtml=new Course({name:'cursoDefinitivoHtml'});
const cursoPracticoHtml=new Course({name:'cursocPracticoHtml',lang:'english'});
class learningPath{
    constructor({name,course=[],}){
        this.name=name;
        this.course=course;
    }
}
const escuelaWeb=new learningPath({name:'escuelaWeb',course:[cursoProgBasic,cursoDefinitivoHtml,cursoPracticoHtml,'react.js']});
const escuelaData=new learningPath({name:'escuelaDataScience',course:[cursoProgBasic,'python','pythonPOO']});
const escuelaVgs=new learningPath({name:'escuelaVideoJuegos',course:[cursoProgBasic,'c#','unity',' unity 3d']});



class Stundent{
    constructor(name,email,username,twitter=undefined,instagram=undefined,
facebook=undefined,approvedCourses=[],learingPaths=[],){
            this.name=name;
            this.email=email;
            this.username=username;
            this.socialMedia={
                twitter,
                instagram,
                facebook,
            }
            this.approvedCourses=approvedCourses;
            this.learingPaths=learingPaths;
    }
    publicarComentario(CommentContent){
        const commet=new Comment({content:CommentContent,studentName:this.name});
        commet.publicar();
    }
}

class FreeStudent extends Stundent{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn('Lo siento, '+ this.name +' solo pudes acceder a cursos free' )
        }
    }

};
class BasicStudent extends Stundent{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if(newCourse.lang!=='english'){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn('Lo siento, '+ this.name +' no pudes tomar cursos de english' )
        }
    }
};
class ExpertStudent extends Stundent{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
};
class TeacherStudent extends Stundent{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
    publicarComentario(CommentContent){
        const commet=new Comment({content:CommentContent,studentName:this.name,studentRole:'ProfePlatzi'});
        commet.publicar();
    }
}
const juan=new FreeStudent({
    name:'juan',
    userName:'juan15',
    points:157,
    twitter:'juan12',
    learningPath:[
        escuelaData,escuelaVgs
    ]
})
const migelito=new BasicStudent({
    name:'migel',
    userName:'migelito',
    points:1570,
    twitter:'migelito12',
    learningPath:[
        escuelaWeb
    ]
})
const freddy=new TeacherStudent({
    name:'freddy',
    userName:'freddy12',
    points:5000000,
    twitter:'freddy'
})