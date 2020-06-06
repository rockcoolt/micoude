module.exports = {
  name: 'micoude',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/micoude',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
