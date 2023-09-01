class Card {
    private region: string;
    private image: string;
    private name: string
    private tag?: CardTag;
    private description: string;

    constructor (options) {
        this.region = options.region;
        this.image = options.image;
        this.name = options.name;
        this.description = options.description;
    }

    setTag(_CardTag){
        this.tag = _CardTag
    }

}