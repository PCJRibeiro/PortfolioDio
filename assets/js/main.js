
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const email =  document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
}

function updateSoftSkills(profileData){
    const softSkills= document.getElementById("profile.skills.softSkills")

    softSkills.innerHTML = profileData.skills.softSkills.map(skill=> `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills= document.getElementById("profile.skills.hardSkills")

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill=> `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages =document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language=> `<li>${language}</li>`).join('')
}
function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(myportfolio =>`<li>
        <h3 class="title github">${myportfolio.name}</h3>
        <a href="${myportfolio.url}"
            target="_blank">${myportfolio.url}</a>
    </li>`).join('')
}
function updateProfessionalEx(profileData){
    const professionalExperience = document.getElementById('profile.experience')

    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `<li><h3 class="title">${experience.name}</h3><span class="period">${experience.period}</span><p>${experience.description}</p> </li>`).join('')
}
function updateEdcation(profileData){
    const education = document.getElementById('profile.education')

    education.innerHTML = profileData.education.map(edu =>`<li>
                        <h3>${edu.name}</h3>
                        <span class="period">${edu.period}</span>
                    </li>`).join('')
}
(async () => {

    const profileData = await fetchProfileData()
    
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalEx(profileData)
    updateEdcation(profileData)
})()