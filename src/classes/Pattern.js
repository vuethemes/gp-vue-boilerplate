import jsfeat from 'jsfeat';
import { generateResizedBlurMatrix, detectCorners } from '@/utils/jsfeat/base';

const maxPatternSize = 512;
const maxPerLevel = 300;
const scale_factor = Math.sqrt(2.0); // magic number ;)
const numTrainLevels = 4;
const blur = 5;

export default class Pattern {
  constructor() {
    this.matrix = null;
    this.scaleToMaxPatternSize = 1;
    this.corners = [];
    this.cornersCount = [];
    this.descriptors = [];
  }

  setup (imageData) {
    this.matrix = new jsfeat.matrix_t(imageData.width, imageData.height, jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    this.scaleToMaxPatternSize = Math.min(maxPatternSize / this.matrix.cols, maxPatternSize / this.matrix.rows);
    prepareLevelResults(this.matrix, this.scaleToMaxPatternSize, this.corners, this.descriptors);
  }

  train () {
    const matrices = [];
    let subScale = this.scaleToMaxPatternSize;

    for (let lev = 0; lev < numTrainLevels; ++lev) {
      const subLevelImgMatrix = generateResizedBlurMatrix(this.matrix, subScale, blur);
      matrices[Number(lev)] = subLevelImgMatrix;

      const corners = this.corners[Number(lev)];
      this.cornersCount[Number(lev)] = detectCorners(subLevelImgMatrix, corners, this.descriptors[Number(lev)], maxPerLevel, true);
      // for (let i = 0; i < this.cornersCount[Number(lev)]; ++i) {
      //   corners[Number(i)].x *= 1. / subScale;
      //   corners[Number(i)].y *= 1. / subScale;
      // }
      subScale /= scale_factor;
      console.log('train ' + subLevelImgMatrix.cols + 'x' + subLevelImgMatrix.rows + ' points: ' + this.cornersCount[Number(lev)]);
    }
    return matrices;
  }
}

function prepareLevelResults (imgMatrix, scale, corners, descriptors) {
  let size = (imgMatrix.cols | 0) * (imgMatrix.rows | 0) * scale;
  for (let lev = 0; lev < numTrainLevels; ++lev) {
    corners[Number(lev)] = [];
    // preallocate corners array
    let i = (size) >> lev;
    while (--i >= 0) {
      corners[Number(lev)][Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
    }
    descriptors[Number(lev)] = new jsfeat.matrix_t(32, maxPerLevel, jsfeat.U8_t | jsfeat.C1_t);
  }
}
