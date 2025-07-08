function classifyHeroLevel(xp: number): string {
	if (xp < 1000) return "Ferro";
	if (xp <= 2000) return "Bronze";
	if (xp <= 5000) return "Prata";
	if (xp <= 7000) return "Ouro";
	if (xp <= 8000) return "Platina";
	if (xp <= 9000) return "Ascendente";
	if (xp <= 10000) return "Imortal";
	if (xp >= 10001) return "Radiante";
	return "Indefinido";
}

const heroName = "Reyna";
const heroXP = 7500;
const heroLevel = classifyHeroLevel(heroXP);

console.log(
	`O Herói de nome **${heroName}** está no nível de **${heroLevel}**`,
);
