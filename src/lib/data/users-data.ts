export async function fetchUserById() {
  try {
    const res = await fetch(`http://localhost:3000/api/user/8`, {  cache: "no-store",});
    if(!res.ok){
    throw new Error("Failed to fetch user by ID")
    }
   return res.json()
  } catch (error) {
    console.log("Failed to fetch users data", error);
  }
}
