

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/PCJRibeiro/PortfolioDio/main/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}