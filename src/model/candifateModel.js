
export class CandidateModel {
    
    account =  {
        firstName: 'Mulugeta', 
        lasttName: '',
        email: '',
        phone: '',
    }

    expectedSalary = ''
    headline = ''
    topSkills = []

    skills= []

    benefits =[]

    workExperiences =[]

    projectExperiences= []

    educations = []

    constructor(account, expectedSalary, headline, topSkills, skills, benefits, workExperiences, projectExperiences, educations){
        this.account = account;
        this.expectedSalary = expectedSalary; 
        this.headline = headline;
        this.topSkills = topSkills; 
        this.skills = skills; 
        this.benefits = benefits; 
        this.workExperiences = workExperiences; 
        this.projectExperiences = projectExperiences; 
        this.educations = educations;  

    }


}