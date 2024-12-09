function _getProperty(property) {
    const element = document.querySelector(this.element);
    const styleMap = window.getComputedStyle(element);

    if (Array.isArray(property)) {
        return property.reduce((response, currentProperty) => {
            response[currentProperty] = styleMap.getPropertyValue(currentProperty) || '';
            return response;
        }, {});
    }

    return styleMap.getPropertyValue(property) || '';
}

function _setProperty(property, value) {
    const elements = document.querySelectorAll(this.element);

    elements.forEach((element, index) => {
        if (typeof property === 'object') {
            const properties = Object.keys(property);
            properties.forEach((p) => {
                element.style[p] = property[p];
            });
        } else if (typeof value === 'function') {
            const currentValue = element.style[property];
            const computedValue = value.call(element, index, currentValue);
            element.style[property] = computedValue || currentValue;
        } else {
            element.style[property] = value;
        }
    });
}

function css(property, value) {
    if (typeof property === 'string' || Array.isArray(property)) {
        return _getProperty.call(this, property);
    } else if (typeof property === 'object' || value !== undefined) {
        return _setProperty.call(this, property, value);
    }
}

function jq(element) {
    return {
        element,
        css,
    };
}
