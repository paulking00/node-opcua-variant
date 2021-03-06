"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustVariant = void 0;
const node_opcua_assert_1 = require("node-opcua-assert");
const DataType_enum_1 = require("./DataType_enum");
const VariantArrayType_enum_1 = require("./VariantArrayType_enum");
function adjustVariant(variant, valueRank, targetDataType) {
    if (targetDataType === DataType_enum_1.DataType.Byte && valueRank === 1 /* Array */) {
        if (variant.arrayType === VariantArrayType_enum_1.VariantArrayType.Scalar && variant.dataType === DataType_enum_1.DataType.ByteString) {
            // Byte
            variant.arrayType = VariantArrayType_enum_1.VariantArrayType.Array;
            variant.dataType = DataType_enum_1.DataType.Byte;
            (0, node_opcua_assert_1.default)(variant.dataType === DataType_enum_1.DataType.Byte);
            (0, node_opcua_assert_1.default)(!variant.value || variant.value instanceof Buffer);
        }
    }
    if (targetDataType === DataType_enum_1.DataType.ByteString && valueRank === -1 /* Scalar*/) {
        if (variant.arrayType === VariantArrayType_enum_1.VariantArrayType.Array && variant.dataType === DataType_enum_1.DataType.Byte) {
            // Byte
            variant.arrayType = VariantArrayType_enum_1.VariantArrayType.Scalar;
            variant.dataType = DataType_enum_1.DataType.ByteString;
            (0, node_opcua_assert_1.default)(variant.dataType === DataType_enum_1.DataType.ByteString);
            (0, node_opcua_assert_1.default)(!variant.value || variant.value instanceof Buffer);
        }
    }
    return variant;
}
exports.adjustVariant = adjustVariant;
//# sourceMappingURL=adjust_variant.js.map