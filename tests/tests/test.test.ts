import logger from '../../app/utils/logger';
import { expect } from 'chai';
import 'mocha';

describe('logger', () => {
    describe('test', () => {
        it('should return the same string', () => {
            const result = logger.test('aaa');
            expect(result).to.equal('aaa');
        });
    });
});
