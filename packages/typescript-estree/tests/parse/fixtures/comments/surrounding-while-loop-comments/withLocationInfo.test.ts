import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/comments/surrounding-while-loop-comments.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);