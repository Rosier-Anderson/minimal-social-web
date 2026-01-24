export async function fetchUserById(id: number) {
  try {
    const res = await fetch(`http://localhost:3001/api/user/${id}`);
    return res.json();
  } catch (error) {
    console.log("Failed to fetch users data", error);
  }
}
