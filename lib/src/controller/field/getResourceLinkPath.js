var get_1 = require('lodash/get');
var util_1 = require('../../util');
/**
 * Get the link toward the referenced resource
 *
 * @example
 *
 * const linkPath = getResourceLinkPath({
 *      basePath: '/comments',
 *      link: 'edit',
 *      reference: 'users',
 *      record: {
 *          userId: 7
 *      },
 *      resource: 'comments',
 *      source: 'userId',
 * });
 *
 * @param {Object} option
 * @param {string} option.basePath basepath to current resource
 * @param {string | false | LinkToFunctionType} option.link="edit" The link toward the referenced record. 'edit', 'show' or false for no link (default to edit). Alternatively a function that returns a string
 * @param {string | false | LinkToFunctionType} [option.linkType] DEPRECATED : old name for link
 * @param {string} option.reference The linked resource name
 * @param {Object} option.record The The current resource record
 * @param {string} option.resource The current resource name
 * @param {string} option.source The key of the linked resource identifier
 *
 * @returns {string | false} The reference props
 */
var getResourceLinkPath = ({
    basePath: basePath,
    link:  = 'edit',
    linkType: linkType,
    reference: reference,
    record:  = { id: '' },
    resource: resource,
    source: source
}), Option, string =  | false;
{
    var sourceId = get_1["default"](record, source);
    var rootPath = basePath.replace(resource, reference);
    // Backward compatibility: keep linkType but with warning
    var getResourceLinkPath_1 = function (linkTo) {
        return !linkTo
            ? false
            : typeof linkTo === 'function'
                ? linkTo(record, reference)
                : util_1.linkToRecord(rootPath, sourceId, linkTo, as, string);
    };
    if (linkType !== undefined) {
        console.warn("The 'linkType' prop is deprecated and should be named to 'link' in <ReferenceField />");
    }
    var resourceLinkPath = getResourceLinkPath_1(linkType !== undefined ? linkType : link);
    return resourceLinkPath;
}
;
exports["default"] = getResourceLinkPath;
