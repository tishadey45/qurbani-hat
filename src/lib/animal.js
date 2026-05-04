export const allAnimals = async()=>{
const res =await fetch(`https://qurbani-hat-beta.vercel.app/data.json`);
  return res.json();
}