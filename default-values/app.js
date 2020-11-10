console.log("HELLO");

function makeMap(arr = [1, 2, 3]) {
  console.log(arr.map(() => 1));
}

makeMap(undefined);
makeMap();

const user = {
  name: "Dimitri",
  location: "Russia",
  in: "Germany",
  learning: "js",
};

function printUser({ name = "Marta", location = "Spain" }) {
  console.log(`${name} is cool, and is from ${location}`);
}

printUser(user);

const country = {
  name: "Portugal",
  location: "South West of Europe",
};

const noNameOrLocation = {
  in: "Germany",
  learning: "js",
};

printUser(noNameOrLocation);
// printUser(country);
