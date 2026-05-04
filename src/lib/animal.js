export const allAnimals = async()=>{
const res =await fetch(`https://raw.githubusercontent.com/tishadey45/qurbani-hat/refs/heads/main/public/data.json`);
  return res.json();
}