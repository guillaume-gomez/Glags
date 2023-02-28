export interface FlagData {
    key: string;
    name: string;
}


export const flags : FlagData[] = [
    { key: "agender.jpg", name: "Agender Pride Flag"},
    { key: "ally.jpg", name: "Ally Flag"},
    { key: "androgynous.jpg", name: "Androgynous Pride Flag"},
    { key: "aromantic.jpg", name: "Aromantic Flag" },
    { key: "asexuel.jpg" , name: "Asexual Flag" },
    { key: "bear.jpg" , name: "Bear Flag" },
    { key: "bigender.jpg" , name: "Bigender Flag" },
    { key: "bisexuel.jpg" , name: "Bisexual Pride Flag" },
    { key: "butch.jpg" , name: "Butch Lesbian Flag" },
    { key: "demigender.jpg" , name: "Demigender Flag" },
    { key: "demiboy.jpg" , name: "Demigender (Demiboy) Flag" },
    { key: "demiboy2.jpg" , name: "Demigender (DemiGirl) Flag" },
    { key: "demisexuel.jpg" , name: "Demisexuel Flag" },
    { key: "drag.jpg" , name: "Drag/Feather Flag" },
    { key: "drag2.jpg" , name: "Drag Flag" },
    { key: "gay-pride.jpg" , name: "Rainbow Flag" },
    { key: "gender-questioning.jpg" , name: "Gender Questioning Flag" },
    { key: "genderfluid.jpg" , name: "Genderfluid Flag" },
    { key: "genderflux.jpg" , name: "Genderflux Flag" },
    { key: "genderqueer.jpg" , name: "Genderqueer Flag" },
    { key: "gilbert-baker.jpg" , name: "Gilbert Becker Flag" },
    { key: "graysexuel.jpg" , name: "Graysexuel Flag" },
    { key: "hirja.jpg" , name: "Hijra Flag" },
    { key: "intersex.jpg" , name: "Intersex Flag" },
    { key: "intersex-progress.jpg" , name: "Intersex progress Flag" },
    { key: "labrys.jpg" , name: "Labrys Flag" },
    { key: "leather.jpg" , name: "Leather Flag" },
    { key: "lesbian.jpg" , name: "Lesbian Flag" },
    { key: "lipstick.jpg" , name: "Lipstick Lesbian Flag" },
    { key: "maverique.jpg" , name: "Maverique Flag" },
    { key: "neutrois.jpg" , name: "Neutrois Flag" },
    { key: "nonbinary.jpg" , name: "Non-Binary Flag" },
    { key: "omnisexuel.jpg" , name: "Omnisexuel Flag" },
    { key: "pangender.jpg" , name: "Pangender Flag" },
    { key: "philadelphia.jpg" , name: "Philadelphia Pride Flag" },
    { key: "pocket-gender.jpg" , name: "Pocket Gender Flag" },
    { key: "polyamour.jpg" , name: "Polyamour Flag" },
    { key: "polysexuel.jpg" , name: "Polysexuel Flag" },
    { key: "progress.jpg" , name: "Progress Flag" },
    { key: "rubber.jpg" , name: "Rubber Flag" },
    { key: "transgender.jpg" , name: "Transgender Flag" },
    { key: "trigender.jpg" , name: "Trigender Flag" },
    { key: "twink.jpg" , name: "Twink Flag" },
    { key: "two-spirit.jpg" , name: "Two Spririt Flag" }
]

export function listOfFlagKeys() :string[] {
    return flags.map((flag) => flag.key);
}