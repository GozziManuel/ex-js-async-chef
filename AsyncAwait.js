async function handleAsync(url) {
  const response = await fetch(url);
  const obj = response.json();
  return obj;
}

async function getChefBirthday(id) {
  let chefBirthday;
  try {
    chefBirthday = await handleAsync(`https://dummyjson.com/recipes/${id}`);
  } catch (error) {
    console.error(error);
  }
  if (chefBirthday === undefined) {
    throw new Error("Not found API with that id");
  }

  let chefUserId;
  let chefBirthdayDate;
  try {
    chefUserId = await handleAsync(
      `https://dummyjson.com/users/${chefBirthday.userId}`,
    );
    chefBirthdayDate = chefUserId.birthDate;
  } catch (error) {
    console.error(error);
  }
  if (chefBirthdayDate === undefined) {
    throw new Error("age inexistent");
  }

  return chefBirthdayDate;
}

(async () => {
  try {
    const chef = await getChefBirthday(32);
    console.log("Data di nascita dello chef:", chef);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("data ricavata!");
  }
})();
