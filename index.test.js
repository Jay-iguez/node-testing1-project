const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const input = expected
    const actual = utils.trimProperties(input)

    expect(actual).not.toBe(expected)
    expect(input).toMatchObject(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properites trimmed', () => {
    const invalid_structure = { foo: '   foo      ', bar: '     bar', baz: '      baz' }
    const input = { foo: '   foo      ', bar: '     bar', baz: '      baz' }
    const expected_final = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)

    expect(actual).toEqual(expected_final)
    expect(actual).toMatchObject(expected_final)
    expect(actual).not.toEqual(invalid_structure)
  })
  // test('[3] returns an object with the properties trimmed', () => {})

  test('[4] the object returned is the exact same one we passed in', () => {
    const expected = { foo: '   foo      ', bar: '     bar', baz: '      baz' }
    const expected_final = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const input = expected
    const actual = utils.trimPropertiesMutation(input)

    expect(actual).toBe(expected)
    expect(actual).toEqual(expected_final)
  })

  // test('[4] the object returned is the exact same one we passed in', () => {})
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects', () => {
    const expected = 20
    const input = [{ integer: 2 }, { integer: 3 }, { integer: 20 }, { integer: 12 }, { integer: 5 }]
    const actual = utils.findLargestInteger(input)

    expect(actual).toBe(expected)
    expect(actual).toBeDefined()
  })
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST call of counter.countDown returns the initial count', () => {
    const expected = 3
    const output = counter.countDown()

    expect(output).toBe(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    let expected = 3
    let output = counter.countDown()

    expect(output).toBe(expected)

    expected = 2
    output = counter.countDown()
    expect(output).toBe(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let expected = 0
    let output
    let amount_to_iterate = 5
    for (let i = 0; i <= amount_to_iterate; i++){
      output = counter.countDown()
    }

    expect(output).toBe(expected)
  })

  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let expected = 'summer'
    let actual = seasons.next()
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('string')
    expect(actual).toBeDefined()
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let expected = 'fall'
    let amount_to_iterate = 1
    let actual
    for (let i = 0; i <= amount_to_iterate; i++){
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('string')
    expect(actual).toBeDefined()
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let expected = 'winter'
    let amount_to_iterate = 2
    let actual
    for (let i = 0; i <= amount_to_iterate; i++){
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('string')
    expect(actual).toBeDefined()
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let expected = 'spring'
    let amount_to_iterate = 3
    let actual
    for (let i = 0; i <= amount_to_iterate; i++){
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('string')
    expect(actual).toBeDefined()
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let expected = 'summer'
    let amount_to_iterate = 4
    let actual
    for (let i = 0; i <= amount_to_iterate; i++){
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('string')
    expect(actual).toBeDefined()
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let expected = 'spring'
    let amount_to_iterate = 39
    let actual
    for (let i = 0; i <= amount_to_iterate; i++){
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('string')
    expect(actual).toBeDefined()
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    let expected = 300
    let input = 300
    let actual = focus.drive(input)
    expect(actual).toBe(expected)
    expect(typeof actual).toBe('number')
  })
  test('[16] driving the car uses gas', () => {
    let expected = 10
    let input = 300
    focus.drive(input)
    let actual = focus.get_tank()
    expect(actual).toBe(expected)
    expect(actual).toBeDefined()
  })
  test('[17] refueling allows to keep driving', () => {
    let inital_expected = 0
    let final_expected = 900
    let drive_input = 600
    let refuel_input = 10
    focus.drive(drive_input)
    let initial_actual = focus.get_tank()
    expect(initial_actual).toBe(inital_expected)

    focus.refuel(refuel_input)
    let final_actual = focus.drive(drive_input)
    expect(final_actual).toBe(final_expected)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    let expected = 600
    let input = 10
    let actual = focus.refuel(input)
    expect(actual).not.toBe(1200)
    expect(actual).toBe(expected)
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
  test('[19] resolves true if passed an even number', async () => {
    let expected = true
    let input = 10
    let actual = await utils.isEvenNumberAsync(input)
    expect(actual).toBe(expected)
    expect(actual).toBeDefined()
  })
  test('[20] resolves false if passed an odd number', async () => {
    let expected = false
    let input = 7
    let actual = await utils.isEvenNumberAsync(input)
    expect(actual).toBe(expected)
    expect(actual).toBeDefined()
  })
})
