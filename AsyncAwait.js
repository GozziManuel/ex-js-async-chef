async function handleAsync(url) {
  const response = await fetch(url);
  const obj = response.json();
  return obj;
}

async function getChefBirthday(id) {
  const chefBirthday = await handleAsync(`https://dummyjson.com/recipes/${id}`);
  return chefBirthday;
}

(async () => {
  const chef = await getChefBirthday(1);
  console.log(chef);
})();
