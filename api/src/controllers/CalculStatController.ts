import {Stats} from "../models/general/stats";

export type StatModifier = [string, number];

export class CalculStatController {

    public calculStat(statistique: Stats, niveau: number, nature: StatModifier[]): Stats {
        let hp = this.calculHp(statistique.hp, niveau);
        let attaque = this.calculOneStat(statistique.attaque, niveau);
        let attaqueSpeciale = this.calculOneStat(statistique.attaqueSpeciale, niveau);
        let defense = this.calculOneStat(statistique.defense, niveau);
        let defenseSpeciale = this.calculOneStat(statistique.defenseSpeciale, niveau);
        let vitesse = this.calculOneStat(statistique.vitesse, niveau);

        let newStat = {
            hp,
            attaque,
            attaqueSpeciale,
            defense,
            defenseSpeciale,
            vitesse,
            total: statistique.total
        };
        let nature1 = nature[0][0];
        let multiplicateur1 = nature[0][1];
        let nature2 = nature[1][0];
        let multiplicateur2 = nature[1][1];


        newStat[nature1] = Math.round(newStat[nature1] * multiplicateur1);
        newStat[nature2] = Math.round(newStat[nature2] * multiplicateur2);

        return newStat;
    }


    private calculHp(hp: number, niveau: number) {
        console.log("hp", hp,  niveau);
        return Math.round(((2 * hp * niveau)/100) + niveau + 10);
    }

    private calculOneStat(stat: number, niveau: number) {
        return Math.round(((2 * stat * niveau) / 100) + 5);
    }
}