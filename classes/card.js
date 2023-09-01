var Card = /** @class */ (function () {
    function Card(options) {
        this.region = options.region;
        this.image = options.image;
        this.name = options.name;
        this.description = options.description;
    }
    Card.prototype.setTag = function (_CardTag) {
        this.tag = _CardTag;
    };
    return Card;
}());
//# sourceMappingURL=card.js.map