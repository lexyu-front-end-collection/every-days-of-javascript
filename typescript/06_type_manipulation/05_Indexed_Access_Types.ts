console.log("\n===== Indexed Access Types Demo =====");

interface Creature {
    name: string;
    type: {
        species: string;
        breed: string;
    };
    ages: number[];
}

const dog: Creature = {
    name: "Rex",
    type: {
        species: "Canis",
        breed: "German Shepherd"
    },
    ages: [1, 2, 3, 4]
};

type CreatureType = Creature["type"];
type AgeType = Creature["ages"][number];

console.log("Dog type:", dog.type);
console.log("First age:", dog.ages[0]);
