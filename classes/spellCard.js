var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SpellCard = /** @class */ (function (_super) {
    __extends(SpellCard, _super);
    function SpellCard(options) {
        var _this = _super.call(this, options) || this;
        _this.spellSpeed = options.spellSpeed;
        if (options.spellSpeed = SpellSpeed.Focus) {
            _this.setTag(CardTag.Focus);
        }
        if (options.spellSpeed = SpellSpeed.Burst) {
            _this.setTag(CardTag.Burst);
        }
        if (options.spellSpeed = SpellSpeed.Fast) {
            _this.setTag(CardTag.Fast);
        }
        if (options.spellSpeed = SpellSpeed.Slow) {
            _this.setTag(CardTag.Slow);
        }
        return _this;
    }
    return SpellCard;
}(PlayableCard));
//# sourceMappingURL=spellCard.js.map