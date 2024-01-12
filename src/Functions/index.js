const mass_defect_be = (Mx, Z, N) => {
    const mass_of_proton = 1.007276466583; // unit amu //1.007825031898 1.00782518 1.007276466621  1.007276466583
    const mass_of_nutreon = 1.00866491590; // unit amu // 1.00866491590
    const mass_of_electron = 5.48579909065 * (10 ** -4); // unit amu
    let mass_defect = (mass_of_proton * Z) + (mass_of_nutreon * N) + (mass_of_electron * Z) - Mx; //unit amu
    // const mass_1H = 1.007825031898;
    // mass_defect = (mass_1H * Z) + (mass_of_nutreon * N) - Mx; //unit amu
    //1 amu c^2 = 931.49432 MeV
    const conversion_amu_MeV = 931.49432;
    const bindnig_engergy = mass_defect * conversion_amu_MeV; // binding energy in MeV

    // const speed_of_light = 299792458;
    // // const conversion = 1.66053904 * (10**-27)
    // const bindnig_engergy = mass_defect * (931.49 / (speed_of_light * speed_of_light)) * (speed_of_light * speed_of_light);

    return bindnig_engergy.toFixed(2);
};

const mass_defect = (Mx, Z, N) => {
    const mass_of_proton = 1.007276466583; // unit amu //1.007825031898 1.00782518 1.007276466621  1.007276466583
    const mass_of_nutreon = 1.00866491590; // unit amu // 1.00866491590
    const mass_of_electron = 5.48579909065 * (10 ** -4); // unit amu
    let mass_defect = (mass_of_proton * Z) + (mass_of_nutreon * N) + (mass_of_electron * Z) - Mx;
    return mass_defect;
}

const mass_defect_be2 = (Mx, Z, N) => {
    const mass_of_proton = 1.007276466583; // unit amu //1.007825031898 1.00782518
    const mass_of_nutreon = 1.00866491590; // unit amu // 1.00866491590
    const mass_of_electron = 5.48579909065 * (10 ** -4); // unit amu
    let mass_defect = (mass_of_proton * Z) + (mass_of_nutreon * N) + (mass_of_electron * Z) - Mx; //unit amu
    const mass_1H = 1.007825031898;
    mass_defect = (mass_1H * Z) + (mass_of_nutreon * N) - Mx; //unit amu
    //1 amu c^2 = 931.49432 MeV
    const conversion_amu_MeV = 931.49432;
    const bindnig_engergy = mass_defect * conversion_amu_MeV; // binding energy in MeV

    // const speed_of_light = 299792458;
    // // const conversion = 1.66053904 * (10**-27)
    // const bindnig_engergy = mass_defect * (931.49 / (speed_of_light * speed_of_light)) * (speed_of_light * speed_of_light);

    return bindnig_engergy.toFixed(2);
};

const liquid_drop_model = (Mx, Z, N) => {
    const aV = 15.85;
    const aS = 18.34;
    const aMx = 23.21;
    const aC = 0.714;
    const aP = 12.00;

    if (N % 2 !== 0 && Z % 2 !== 0) {
        let cal = aV * Mx - aS * (Mx ** (2 / 3)) - aC * ((Z * (Z - 1)) / Mx ** (1 / 3)) - aMx * (((Mx - 2 * Z) ** 2) / Mx ** 2) + aP / Mx ** (1 / 2);
        return cal;
    }
    else if (N % 2 === 0 && Z % 2 === 0) {
        let cal = aV * Mx - aS * (Mx ** (2 / 3)) - aC * ((Z * (Z - 1)) / Mx ** (1 / 3)) - aMx * (((Mx - 2 * Z) ** 2) / Mx ** 2) - aP / Mx ** (1 / 2);
        return cal;
    }
    let cal = aV * Mx - aS * (Mx ** (2 / 3)) - aC * ((Z * (Z - 1)) / Mx ** (1 / 3)) - aMx * (((Mx - 2 * Z) ** 2) / Mx ** 2);
    return cal;
}


const elements = (symbol) => {
    switch (symbol) {
        case "H":
            return "Hydrogen";

        case "He":
            return "Helium";

        case "Li":
            return "Lithium";

        case "Be":
            return "Beryllium";

        case "B":
            return "Boron";

        case "C":
            return "Carbon";

        case "N":
            return "Notrogen";

        case "O":
            return "Oxygen";

        case "F":
            return "Fluorine";

        case "Ne":
            return "Neon";

        case "Na":
            return "Sodium";

        case "Mg":
            return "Magnesium";
        case "Al":
            return "Aluminium";

        case "Si":
            return "Silicon";

        case "P":
            return "Carbon";

        case "S":
            return "Sulfur";

        case "Cl":
            return "Chlorine";

        case "Ar":
            return "Argon";

        case "K":
            return "Potassium";

        case "Ca":
            return "Calcium";

        case "Sc":
            return "Scandium";

        case "Ti":
            return "Titanium";

        case "V":
            return "Vanadium";

        case "Cr":
            return "Chromium";

        case "Mn":
            return "Manganese";

        case "Fe":
            return "Iron";

        case "Co":
            return "Cobalt";

        case "Ni":
            return "Nikel";

        case "Cu":
            return "Copper";

        case "Zn":
            return "Zinc";

        case "Ga":
            return "Gallium";

        case "Ge":
            return "Germanium";

        case "As":
            return "Arsenic";

        case "Se":
            return "Selenium";

        case "Br":
            return "Bromine";

        case "Kr":
            return "Krypton";

        case "Rb":
            return "Rubidium";

        case "Sr":
            return "Strontium";

        case "Y":
            return "Yttrium";

        case "Zr":
            return "Zirconium";

        case "Nb":
            return "Niobium";

        case "Mo":
            return "Molybdenum";

        case "Tc":
            return "Technetium";

        case "Ru":
            return "Ruthenium";

        case "Rh":
            return "Rhodium";

        case "Pd":
            return "Palladium";

        case "Ag":
            return "Silver";

        case "Cd":
            return "Cadmium";

        case "In":
            return "Indium";

        case "Sn":
            return "Tin";

        case "Sb":
            return "Antimony";

        case "Te":
            return "Tellurium";

        case "I":
            return "Iodine";

        case "Xe":
            return "Xenon";

        case "Cs":
            return "Caesium";
        case "Ba":
            return "Barium";
        case "La":
            return "Lanthanum";
        case "Hf":
            return "Hafnium";
        case "Ta":
            return "Tantalum";
        case "W":
            return "Tungsten";
        case "Re":
            return "Rhenium";
        case "Os":
            return "Osmium";
        case "Ir":
            return "Iridium";
        case "Pt":
            return "Platinum";
        case "Au":
            return "Gold";
        case "Hg":
            return "Mercury";
        case "Ti":
            return "Thallium";
        case "Pb":
            return "Lead";
        case "Bi":
            return "Bismuth";
        case "Po":
            return "Polonium";
        case "At":
            return "Astatine";
        case "Rn":
            return "Radon";
        case "Fr":
            return "Francium";
        case "Ra":
            return "Radium";
        case "Ac":
            return "Actinium";
        case "Rf":
            return "Rutherfordium";
        case "Db":
            return "Dubnium";
        case "Sg":
            return "Seaborgium";
        case "Bh":
            return "Bohrium";
        case "Hs":
            return "Hassium";
        case "Mt":
            return "Meitnerium";
        case "Ds":
            return "Darmstadtium";
        case "Rg":
            return "Roentgenium";
        case "Cn":
            return "Copernicium";
        case "Nh":
            return "Nihonium";
        case "Fl":
            return "Flerovium";
        case "Mc":
            return "Moscovium";
        case "Lv":
            return "Livermorium";
        case "Ts":
            return "Tennessine";
        case "Og":
            return "Oganesson";
        case "Ce":
            return "Cerium";
        case "Pr":
            return "Praseodymium";
        case "Nd":
            return "Neodymium";
        case "Pm":
            return "Promethium";
        case "Sm":
            return "Samarium";
        case "Eu":
            return "Europium";
        case "Gd":
            return "Gadolinium";
        case "Tb":
            return "Terbium";
        case "Dy":
            return "Dysprosium";
        case "Ho":
            return "Holmium";
        case "Er":
            return "Erbium";
        case "Tm":
            return "Thulium";
        case "Yb":
            return "Ytterbium";
        case "Lu":
            return "Lutetium";
        case "Th":
            return "Thorium";
        case "Pa":
            return "Protactinium";
        case "U":
            return "Uranium";
        case "Np":
            return "Neptunium";
        case "Pu":
            return "Plutonium";
        case "Am":
            return "Americium";
        case "Cm":
            return "Curium";
        case "Bk":
            return "Berkelium";
        case "Cf":
            return "Californium";
        case "Es":
            return "Einsteinium";
        case "Fm":
            return "Fermium";
        case "Md":
            return "Mendelevium";
        case "No":
            return "Nobelium";
        case "Lr":
            return "Lawrencium";
        default:
            return "";
    }
}

const splitElementName = (str) => {
    let first = "";
    let second = "";
    const length = str.length;
    if (length % 2 == 0) {
        for (let i = 0; i < length / 2; i++) {
            first += str[i];
        }
        console.log(" ");
        for (let i = length / 2; i < length; i++) {
            second += str[i];
        }
    }
    else {
        for (let i = 0; i < (length - 1) / 2; i++) {
            first += str[i];
        }
        console.log(" ");
        for (let i = (length - 1) / 2; i < length; i++) {
            second += str[i];
        }
    }
    return [first, second];
};

export { liquid_drop_model, mass_defect_be, mass_defect_be2, elements, splitElementName, mass_defect};