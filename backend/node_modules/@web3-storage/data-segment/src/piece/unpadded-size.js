import * as API from '../api.js'
import { trailingZeros64, log2Ceil } from '../uint64.js'
import { IN_BYTES_PER_QUAD, NODE_SIZE } from '../constant.js'

const BYTES_PER_NODE = BigInt(NODE_SIZE)
const BYTES_PER_QUAD = BigInt(IN_BYTES_PER_QUAD)

/**
 * Validates that given `size` is a valid {@link API.UnpaddedPieceSize} and
 * returns {@link API.UnpaddedPieceSize} capturing the validation at the type
 * level. If given `size` is not a valid `UnpaddedPieceSize` throws an error.
 *
 * This function is a variation on {@link validate} that throws exceptions
 * instead of returning a {@link API.Result}.
 *
 * @param {number|API.uint64} size
 * @returns {API.UnpaddedPieceSize}
 */
export const from = (size) => {
  const result = validate(BigInt(size))
  if (result.error) {
    throw result.error
  } else {
    return result.ok
  }
}

/**
 * Validates that given `size` is a valid {@link API.UnpaddedPieceSize} that is
 * a power of 2 multiple of 127. Returns {@link API.Result} with
 * `UnpaddedPieceSize` ok case and an Error in the error case.
 *
 * @param {API.uint64} size
 * @returns {API.Result<API.UnpaddedPieceSize, Error>}
 */
export const validate = (size) => {
  if (size < BYTES_PER_QUAD) {
    return {
      error: new Error(`Minimum piece size is ${BYTES_PER_QUAD} bytes`),
    }
  }

  if (size >> BigInt(trailingZeros64(size)) !== BYTES_PER_QUAD) {
    return {
      error: new Error(
        `Unpadded piece size must be a power of 2 multiple of ${BYTES_PER_QUAD}, got ${size} instead`
      ),
    }
  }

  return { ok: size }
}

/**
 * Takes `{@link API.UnpaddedPieceSize}` and returns corresponding
 * {@link API.PaddedPieceSize}.
 *
 * Please note that this function does not validate the input size and
 * relies that type-checker will ensure that user passes valid unpadded
 * piece size created with {@link from} or {@link validate} functions.
 *
 *
 * @see https://github.com/filecoin-project/go-state-types/blob/master/abi/piece.go#L14-L16
 *
 * @param {API.UnpaddedPieceSize} size
 * @returns {API.PaddedPieceSize}
 */
export const toPaddedSize = (size) => size + size / BYTES_PER_QUAD

/**
 * Calculates the height of the piece tree from unpadded size.
 *
 * @param {API.UnpaddedPieceSize} size
 */
export const toHeight = (size) => log2Ceil(toPaddedSize(size) / BYTES_PER_NODE)
