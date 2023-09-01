class EquipmentCard extends PlayableCard {
    private attack: number;
    private health: number;

    constructor (options) {
        super(options);
        this.attack = options.attack;
        this.health = options.health;
        this.setTag(CardTag.Equipment);
    }
}