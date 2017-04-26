$(document).ready(function(){

    $('#name').append(bio.name);
    $('#address').append(bio.address);
    $('#contact').append(bio.contact);
    $('#photo').attr('src','bio.photo');



    function skillDisplay(){
        var skills = '';
        for(var i=0; i<bio.skills.length; i++){
            skills += "<li>"+bio.skills[i]+"</li>";
        }
        $('#skills').find('ul').append(skills);
    };


    function eduDisplay(){
        var education = '';
        for(var ed = 0; ed < bio.education.length; ed++){
            education += "<li>"+bio.education[ed].course+"<br/>";
            education += bio.education[ed].institution+"<br/>";
            education += bio.education[ed].board+"</br/>";
            education += bio.education[ed].year+"</li>";
        }
        $('#education').find('ul').append(education);
    };


    function workExpDisplay(){
        var workExp = '';
        for(var wExp = 0; wExp < bio.workExp.length; wExp++){
            workExp += '<li>'+bio.workExp[wExp].companyName+"<br/>";
            workExp += bio.workExp[wExp].role+"<br/>";
            workExp += bio.workExp[wExp].startDate+"<br/>";
            workExp += bio.workExp[wExp].current+"<br/>";
            workExp += bio.workExp[wExp].endDate+"</li>";
        }
        $('#workExp').find('ul').append(workExp);
    };


    function projectDisplay(){
        var project = '';
        for(pro in bio.projects){
            project += '<li>'+bio.projects[pro].projectName+" - "+bio.projects[pro].projectCompany+"</li>";
        }
        $('#project').find('ul').append(project);
    };

    function inName(string){
        var name = string;
        var nameSplit = name.split(" ");
        nameSplit[1] = nameSplit[1].toUpperCase();
        name = nameSplit[0]+" "+nameSplit[1];
        console.log(name);
        return name;
    };


    skillDisplay();
    eduDisplay();
    workExpDisplay();
    projectDisplay();
    inName(bio.name);
});
