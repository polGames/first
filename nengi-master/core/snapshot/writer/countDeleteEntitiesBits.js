import BinaryType from '../../binary/BinaryType';
import Binary from '../../binary/Binary';
import countDeleteIdBits from '../../protocol/countBits/countDeleteIdBits';
//var config = require('../../../config')

function countDeleteEntitiesBits(ids, config) {
    var bits = 0
    if (ids.length > 0) {
        bits += Binary[BinaryType.UInt8].bits
        bits += Binary[BinaryType.UInt16].bits
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i]
            bits += countDeleteIdBits(config.ID_BINARY_TYPE)
        }
    }
    return bits
}

export default countDeleteEntitiesBits;