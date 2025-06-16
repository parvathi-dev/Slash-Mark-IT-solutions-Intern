let projectsBtnEl = document.getElementById('projectsBtn');
let skillsBtnEl = document.getElementById('skillsBtn');
let projectsContainerEl = document.getElementById('projectsContainer');
let skillsContainerEl = document.getElementById('skillsContainer');


skillsContainerEl.classList.add('d-none');
skillsBtnEl.classList.add('trans-btn');

projectsBtnEl.onclick = function() {
    projectsContainerEl.classList.remove('d-none');
    skillsContainerEl.classList.add('d-none');

    skillsBtnEl.classList.add('trans-btn');
    projectsBtnEl.classList.remove('trans-btn');

};

skillsBtnEl.onclick = function() {
    skillsContainerEl.classList.remove('d-none');
    projectsContainerEl.classList.add('d-none');

    skillsBtnEl.classList.remove('trans-btn');
    projectsBtnEl.classList.add('trans-btn');
};




let isCliked = true;

function changeToDarkMode() {
    if (isCliked === true) {


        let darkMode = document.getElementById('darkMode');
        darkMode.classList.add('fad', 'fa-sun', 'light-mode', 'mr-3', 'mt-3');

        let miniContainer = document.getElementById('miniContainer');
        miniContainer.classList.add('light-mini-container');

        let myName = document.getElementById('myName');
        myName.classList.add('light-my-name');

        let myPortfolio = document.getElementById('myPortfolio');
        myPortfolio.classList.add('light-my-portfolio');








        let myProfession = document.getElementById('myProfession');
        myProfession.classList.add('light-my-profession');

        let SocialIcon1 = document.getElementById('SocialIcon1');
        SocialIcon1.classList.add('light-social-icon');

        let SocialIcon2 = document.getElementById('SocialIcon2');
        SocialIcon2.classList.add('light-social-icon');

        let SocialIcon3 = document.getElementById('SocialIcon3');
        SocialIcon3.classList.add('light-social-icon');

        let experienceYears = document.getElementById('experienceYears');
        experienceYears.classList.add('light-experience');

        let experienceYearsDes = document.getElementById('experienceYearsDes');
        experienceYearsDes.classList.add('light-experience-des');

        let projectWorks = document.getElementById('projectWorks');
        projectWorks.classList.add('light-experience');

        let projectWorksDes = document.getElementById('projectWorksDes');
        projectWorksDes.classList.add('light-experience-des');

        let linesOfCode = document.getElementById('linesOfCode');
        linesOfCode.classList.add('light-experience');

        let linesOfCodeDes = document.getElementById('linesOfCodeDes');
        linesOfCodeDes.classList.add('light-experience-des');

        let iconContainer = document.getElementById('iconContainer');
        iconContainer.classList.add('light-icon-container');

        let iconSocial = document.getElementById('iconSocial');
        iconSocial.classList.add('light-icon-social');



        let buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.classList.add('light-buttons-container');

        projectsBtnEl.classList.add('light-projects-btn');

        skillsBtnEl.classList.add('light-skills-btn');

        let skillHeading = document.getElementById('skillHeading');
        skillHeading.classList.add('light-skills-heading');

        let skillName = document.getElementById('skillName');
        skillName.classList.add('light-skill-name');


        let skillName2 = document.getElementById('skillName2');
        skillName2.classList.add('light-skill-name');



        let skillName3 = document.getElementById('skillName3');
        skillName3.classList.add('light-skill-name');



        let skillName4 = document.getElementById('skillName4');
        skillName4.classList.add('light-skill-name');





        let skillName5 = document.getElementById('skillName5');
        skillName5.classList.add('light-skill-name');


        let skillName6 = document.getElementById('skillName6');
        skillName6.classList.add('light-skill-name');


        let skillName7 = document.getElementById('skillName7');
        skillName7.classList.add('light-skill-name');


        let skillName8 = document.getElementById('skillName8');
        skillName8.classList.add('light-skill-name');




        let skillName9 = document.getElementById('skillName9');
        skillName9.classList.add('light-skill-name');


        let skillName10 = document.getElementById('skillName10');
        skillName10.classList.add('light-skill-name');


        let skillName11 = document.getElementById('skillName11');
        skillName11.classList.add('light-skill-name');

        let skillName12 = document.getElementById('skillName12');
        skillName12.classList.add('light-skill-name');
        let skillHeading2 = document.getElementById('skillHeading2');
        skillHeading2.classList.add('light-skills-heading');

        let skillName13 = document.getElementById('skillName13');
        skillName13.classList.add('light-skill-name');

        let skillName14 = document.getElementById('skillName14');
        skillName14.classList.add('light-skill-name');

        let skillName15 = document.getElementById('skillName15');
        skillName15.classList.add('light-skill-name');
        let skillName16 = document.getElementById('skillName16');
        skillName16.classList.add('light-skill-name');
        let skillName17 = document.getElementById('skillName17');
        skillName17.classList.add('light-skill-name');
        let skillName18 = document.getElementById('skillName18');
        skillName18.classList.add('light-skill-name');





        isCliked = false;
    } else if (isCliked === false) {


        let darkMode = document.getElementById('darkMode');
        darkMode.classList.remove('fad', 'fa-sun', 'light-mode');

        let miniContainer = document.getElementById('miniContainer');
        miniContainer.classList.remove('light-mini-container');

        let myPortfolio = document.getElementById('myPortfolio');
        myPortfolio.classList.remove('light-my-portfolio');

        let myName = document.getElementById('myName');
        myName.classList.remove('light-my-name');

        let myProfession = document.getElementById('myProfession');
        myProfession.classList.remove('light-my-profession');

        let SocialIcon1 = document.getElementById('SocialIcon1');
        SocialIcon1.classList.remove('light-social-icon');

        let SocialIcon2 = document.getElementById('SocialIcon2');
        SocialIcon2.classList.remove('light-social-icon');

        let SocialIcon3 = document.getElementById('SocialIcon3');
        SocialIcon3.classList.remove('light-social-icon');

        let experienceYears = document.getElementById('experienceYears');
        experienceYears.classList.remove('light-experience');

        let experienceYearsDes = document.getElementById('experienceYearsDes');
        experienceYearsDes.classList.remove('light-experience-des');

        let projectWorks = document.getElementById('projectWorks');
        projectWorks.classList.remove('light-experience');

        let projectWorksDes = document.getElementById('projectWorksDes');
        projectWorksDes.classList.remove('light-experience-des');

        let linesOfCode = document.getElementById('linesOfCode');
        linesOfCode.classList.remove('light-experience');

        let linesOfCodeDes = document.getElementById('linesOfCodeDes');
        linesOfCodeDes.classList.remove('light-experience-des');

        let iconContainer = document.getElementById('iconContainer');
        iconContainer.classList.remove('light-icon-container');

        let iconSocial = document.getElementById('iconSocial');
        iconSocial.classList.remove('light-icon-social');



        let buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.classList.remove('light-buttons-container');

        projectsBtnEl.classList.remove('light-projects-btn');

        skillsBtnEl.classList.remove('light-skills-btn');

        let skillHeading = document.getElementById('skillHeading');
        skillHeading.classList.remove('light-skills-heading');



        let skillName = document.getElementById('skillName');
        skillName.classList.remove('light-skill-name');



        let skillName2 = document.getElementById('skillName2');
        skillName2.classList.remove('light-skill-name');



        let skillName3 = document.getElementById('skillName3');
        skillName3.classList.remove('light-skill-name');


        let skillName4 = document.getElementById('skillName4');
        skillName4.classList.remove('light-skill-name');




        let skillName5 = document.getElementById('skillName5');
        skillName5.classList.remove('light-skill-name');



        let skillName6 = document.getElementById('skillName6');
        skillName6.classList.remove('light-skill-name');



        let skillName7 = document.getElementById('skillName7');
        skillName7.classList.remove('light-skill-name');
        let skillName8 = document.getElementById('skillName8');
        skillName8.classList.remove('light-skill-name');
        let skillName9 = document.getElementById('skillName9');
        skillName9.classList.remove('light-skill-name');

        let skillName10 = document.getElementById('skillName10');
        skillName10.classList.remove('light-skill-name');
        let skillName11 = document.getElementById('skillName11');
        skillName11.classList.remove('light-skill-name');
        let skillName12 = document.getElementById('skillName12');
        skillName12.classList.remove('light-skill-name');
        let skillName13 = document.getElementById('skillName13');
        skillName13.classList.remove('light-skill-name');
        let skillName14 = document.getElementById('skillName14');
        skillName14.classList.remove('light-skill-name');
        let skillName15 = document.getElementById('skillName15');
        skillName15.classList.remove('light-skill-name');




        isCliked = true;
    }

}