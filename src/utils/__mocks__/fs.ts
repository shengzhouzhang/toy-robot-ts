'use strict';

jest.genMockFromModule('fs');

const readFile = (fileName, type, cb): void => {
  if (fileName === 'error-file') {
    cb(new Error('test error'));
  } else {
    cb(null, 'First Line\nSecond Line\nThird Line');
  }
};

export default {
  readFile,
};
