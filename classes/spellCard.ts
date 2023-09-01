class SpellCard extends PlayableCard {
    private spellSpeed: SpellSpeed;

    constructor (options) {
        super(options);
        this.spellSpeed = options.spellSpeed;
        if(options.spellSpeed = SpellSpeed.Focus){
            this.setTag(CardTag.Focus);
        }
        if(options.spellSpeed = SpellSpeed.Burst){
            this.setTag(CardTag.Burst);
        }
        if(options.spellSpeed = SpellSpeed.Fast){
            this.setTag(CardTag.Fast);
        }
        if(options.spellSpeed = SpellSpeed.Slow){
            this.setTag(CardTag.Slow);
        }
        
    }
}