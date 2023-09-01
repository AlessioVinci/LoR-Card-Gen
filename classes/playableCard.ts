class PlayableCard extends Card {
    private manaCost: number;

    constructor (options) {
        super(options);
        this.manaCost = options.manaCost;
    }
}