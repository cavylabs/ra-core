var react_1 = require('react');
var InferredElement = (function () {
    function InferredElement(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
    InferredElement.prototype.getElement = function (props) {
        if (props === void 0) { props = {}; }
        if (!this.isDefined()) {
            return;
        }
        return this.children
            ? react_1.createElement.apply(void 0, [this.type.component, {}].concat(this.props, props)) : ;
    };
    return InferredElement;
})();
this.children.length > 0
    ? this.children.map(function (child, index) {
        return child.getElement({ key: index });
    })
    : this.children.getElement();
react_1.createElement.apply(void 0, [this.type.component, {}].concat(this.props, props));
getProps();
{
    return this.props;
}
isDefined();
{
    return !!this.type;
}
getRepresentation();
{
    if (!this.isDefined()) {
        return;
    }
    if (this.type.representation) {
        return this.type.representation(this.props, this.children);
    }
    return "<" + (this.type.component.displayName ||
        this.type.component.name) + " source=\"" + this.props.source + "\" />";
}
exports["default"] = InferredElement;
