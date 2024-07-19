

async function fetchProfileData(){
    const url = '';
    const fetching = fetch(url)
    return await fetching.json()
}