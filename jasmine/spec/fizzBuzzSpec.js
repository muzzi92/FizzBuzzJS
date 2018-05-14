describe('Fizzbuz', function () {

    it('should return the number if not divisible by 3 or 5', function () {
        expect(fizzBuzz(7)).toBe(7);
    });

    it('should return buzz when given 5', function () {
        expect(fizzBuzz(5)).toBe('buzz');
    });

    it('should return fizzbuzz when given 15', function () {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });

    it('should return fizz when given 3', function () {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    it('should return fizz when given 9', function () {
        expect(fizzBuzz(9)).toBe('fizz');
    });
});