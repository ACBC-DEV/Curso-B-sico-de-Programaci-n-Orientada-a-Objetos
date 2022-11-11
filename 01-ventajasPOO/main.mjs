function videoPlay(id){
    const urlSc='https://platziSecreat';
    console.log('se esta reproduciones'+urlSc)
}
function videoStop(id){
    const urlSc='https://platziSecreat';
    console.log('stop '+urlSc)
}
export class PlatziClass{
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


class course {
    constructor({name,classes=[],}){
        this._name=name;
        this.classes=classes;
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
const cursoProgBasic=new course({name:'cursoProgBasic'});
class learningPath{
    constructor({name,course=[],}){
        this.name=name;
        this.course=course;
    }
}
const escuelaWeb=new learningPath({name:'escuelaWeb',course:[cursoProgBasic,'html','css','js','react.js']});
const escuelaData=new learningPath({name:'escuelaDataScience',course:[cursoProgBasic,'python','pythonPOO']});
const escuelaVgs=new learningPath({name:'escuelaVideoJuegos',course:[cursoProgBasic,'c#','unity',' unity 3d']});



class stundent{
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
}

const juan2=new stundent({
    name:'migel',
    userName:'migelito',
    points:157,
    twitter:'migelito12',
    learningPath:[
        
    ]
})

