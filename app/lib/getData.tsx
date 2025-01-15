export async function GetData() {
    const res = await fetch('https://api.github.com/users/thoriqwildan/repos')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}